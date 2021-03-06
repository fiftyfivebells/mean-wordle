import React from "react";
import Keyboard from "./components/keyboard/Keyboard";
import LetterGrid from "./components/grid/LetterGrid";
import AppMenu from "./components/AppMenu";
import RulesModal from "./components/modals/RulesModal";
import {
  addStatusToGuess,
  CharStatus,
  keyStatuses,
  Status,
} from "./lib/status";
import { getWordOfDay, isWordInWordList } from "./lib/wordUtils";
import { Alert, AlertTitle, Snackbar, Stack, Typography } from "@mui/material";

function App() {
  const [isNotAWordModalOpen, setIsNotAWordModalOpen] =
    React.useState<boolean>(false);
  const [isUsingBadLettersOpen, setIsUsingBadLettersOpen] =
    React.useState(false);
  const [isGameLostOpen, setIsGameLostOpen] = React.useState(false);
  const [isRulesOpen, setIsRulesOpen] = React.useState(false);
  const [isNotCorrectOpen, setIsNotCorrectOpen] = React.useState(false);
  const [isNotPresentOpen, setIsNotPresentOpen] = React.useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = React.useState(false);
  const [isGameWon, setIsGameWon] = React.useState(false);
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [correctChars, setCorrectChars] = React.useState<string[]>(
    Array(5).fill("")
  );
  const [guesses, setGuesses] = React.useState(Array<Status[]>());
  const [keyStatus, setKeyStatus] =
    React.useState<{ [key: string]: CharStatus }>(keyStatuses);

  const { word: wordOfDay } = getWordOfDay();
 
  function updateKeyStatuses(): void {
    const newStatus: { [key: string]: CharStatus } = { ...keyStatus };
    const letterSet: Set<string> = new Set(wordOfDay);

    currentGuess.split("").forEach((letter, i) => {
      if (letter === wordOfDay[i]) {
        newStatus[letter] = "CORRECT";
      } else if (letterSet.has(letter)) {
        newStatus[letter] = "PRESENT";
      } else {
        newStatus[letter] = "INCORRECT";
      }
    });

    setKeyStatus(newStatus);
  }

  function updateCorrectChars(guess: Status[]): void {
    const newChars: string[] = Array(5).fill("");
    guess.forEach((letter, i) => {
      if (letter.status === "CORRECT") {
        newChars[i] = letter.value;
      }
    });

    setCorrectChars(newChars);
  }

  function usingOutOfPlaceLetter(): boolean {
    let result = false;
    const currentGuessArr = currentGuess.split("");

    correctChars.forEach((char, i) => {
      if (char && char !== currentGuessArr[i]) {
        result = true;
      }
    })

    return result;
  }

  function setInvalidWordStatus(word: string): Status[] {
    const newStatus: Status[] = [];

    word.split("").forEach((w) => {
      const char = {
        value: w,
        status: "FAKE" as CharStatus,
      };
      newStatus.push(char);
    });

    return newStatus;
  }

  function getLetterStatus(status: CharStatus): string[] {
    const letters: string[] = [];
    for (const [key, val] of Object.entries(keyStatus)) {
      if (val === status) {
        letters.push(key);
      }
    }
    return letters;
  }

  function checkIfUsingStatus(status: CharStatus): boolean {
    const guessArray = currentGuess.split("");
    return getLetterStatus(status).every(
      (letter) => guessArray.indexOf(letter) !== -1
    );
  }

  function checkIfUsingIncorrect(): boolean {
    const guessArray = currentGuess.split("");
    return getLetterStatus("INCORRECT").some(
      (letter) => guessArray.indexOf(letter) !== -1
    );
  }

  function handleValue(e?: React.MouseEvent | null, key?: string): void {
    if (isGameWon) {
      return;
    }

    let nextChar = "";
    if (e) {
      const event = e.target as HTMLInputElement;
      nextChar = event.value;
    } else if (key) {
      nextChar = key;
    }

    if (currentGuess.length < 5) {
      setCurrentGuess(`${currentGuess}${nextChar}`);
    }
  }

  function handleDelete(): void {
    setCurrentGuess(currentGuess.slice(0, -1));
  }

  function handleEnter(): void {
    const isWinner = wordOfDay === currentGuess;

    if (currentGuess.length === 5) {
      if (guesses.length === 5) {
        if (
          !isWordInWordList(currentGuess.toLowerCase()) ||
          !checkIfUsingStatus("PRESENT") ||
          !checkIfUsingStatus("CORRECT") ||
          checkIfUsingIncorrect() ||
          usingOutOfPlaceLetter()
        ) {
          setGuesses([...guesses, setInvalidWordStatus(currentGuess)]);
          setCurrentGuess("");
          setIsGameLostOpen(true);
          setTimeout(() => {
            setIsGameLostOpen(false);
          }, 2000);
        }
      }

      if (usingOutOfPlaceLetter()) {
        setGuesses([...guesses, setInvalidWordStatus(currentGuess)]);
        setCurrentGuess("");
        setIsNotCorrectOpen(true);
        setTimeout(() => {
          setIsNotCorrectOpen(false);
        }, 2000);
        return;
      }

      if (!isWordInWordList(currentGuess.toLowerCase())) {
        setGuesses([...guesses, setInvalidWordStatus(currentGuess)]);
        setCurrentGuess("");
        setIsNotAWordModalOpen(true);
        setTimeout(() => {
          setIsNotAWordModalOpen(false);
        }, 2000);
        return;
      }

      if (!checkIfUsingStatus("PRESENT")) {
        setGuesses([...guesses, setInvalidWordStatus(currentGuess)]);
        setCurrentGuess("");
        setIsNotPresentOpen(true);
        setTimeout(() => {
          setIsNotPresentOpen(false);
        }, 3000);
        return;
      }

      if (!checkIfUsingStatus("CORRECT")) {
        setGuesses([...guesses, setInvalidWordStatus(currentGuess)]);
        setCurrentGuess("");
        setIsNotCorrectOpen(true);
        setTimeout(() => {
          setIsNotCorrectOpen(false);
        }, 3000);
        return;
      }

      if (checkIfUsingIncorrect()) {
        setGuesses([...guesses, setInvalidWordStatus(currentGuess)]);
        setCurrentGuess("");
        setIsUsingBadLettersOpen(true);
        setTimeout(() => {
          setIsUsingBadLettersOpen(false);
        }, 3000);
        return;
      }

      updateKeyStatuses();
      updateCorrectChars(addStatusToGuess(currentGuess, wordOfDay));
      setGuesses([...guesses, addStatusToGuess(currentGuess, wordOfDay)]);
      setCurrentGuess("");

      if (isWinner) {
        setIsGameWon(true);
        setIsWinModalOpen(true);
        setTimeout(() => {
          setIsWinModalOpen(false);
        }, 2000);
        return;
      } else if (guesses.length === 5) {
        setIsGameLostOpen(true);
        setTimeout(() => {
          setIsGameLostOpen(false);
        }, 3000);
      }
    }
  }

  const keyboardProps = {
    handleValue: handleValue,
    handleDelete: handleDelete,
    handleEnter: handleEnter,
    keyStatus: keyStatus,
  };

  return (
    <Stack
      justifyContent="space-between"
      sx={{ margin: "0 auto", maxWidth: "500px", display: "flex" }}
    >
      <AppMenu setRulesOpen={setIsRulesOpen} />
      <Snackbar
        open={isNotAWordModalOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          <AlertTitle>
            <Typography variant="h6">Incorrect Word</Typography>
          </AlertTitle>
          <Typography>
            The word {currentGuess} does not exist. You just lost a turn.
          </Typography>
        </Alert>
      </Snackbar>
      <Snackbar
        open={isUsingBadLettersOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          <AlertTitle>
            <Typography variant="h6">Bad Letters</Typography>
          </AlertTitle>
          <Typography>
            You can't use letters that you know aren't in the word. You just
            lost a turn.
          </Typography>
        </Alert>
      </Snackbar>
      <Snackbar
        open={isNotCorrectOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          <AlertTitle>
            <Typography variant="h6">Missing Letters</Typography>
          </AlertTitle>
          <Typography>
            You are not using letters you know are in the right place. You just
            lost a turn.
          </Typography>
        </Alert>
      </Snackbar>
      <Snackbar
        open={isNotPresentOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          <AlertTitle>
            <Typography variant="h6">Missing Letters</Typography>
          </AlertTitle>
          <Typography>
            Your guess should contain all letters you know are present. You just
            lost a turn.
          </Typography>
        </Alert>
      </Snackbar>
      <Snackbar
        open={isWinModalOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success">
          <AlertTitle>
            <Typography variant="h6">You Won!</Typography>
          </AlertTitle>
          <Typography>You beat Mean Wordle!</Typography>
        </Alert>
      </Snackbar>
      <Snackbar
        open={isGameLostOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          <AlertTitle>
            <Typography variant="h6">You Lost!</Typography>
          </AlertTitle>
          <Typography>
            You were beaten by Mean Wordle! The correct word was {wordOfDay}.
          </Typography>
        </Alert>
      </Snackbar>
      <RulesModal isOpen={isRulesOpen} setIsOpen={setIsRulesOpen} />
      <LetterGrid
        currentGuess={currentGuess}
        guesses={guesses}
        keyStatus={keyStatus}
      />
      <Keyboard {...keyboardProps} />
    </Stack>
  );
}

export default App;
