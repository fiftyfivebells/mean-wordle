import React from 'react';

function App() {
  const [isNotAWordModalOpen, setIsNotAWordModalOpen] =
    React.useState<boolean>(false);
  const [isWinModalOpen, setIsWinModalOpen] = React.useState(false);
  const [isGameWon, setIsGameWon] = React.useState(false);
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState(Array<Status[]>());
  const [keyStatus, setKeyStatus] =
    React.useState<{ [key: string]: CharStatus }>(keyStatuses);
  function updateStatuses(): void {
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
      }

  function checkIfUsingStatus(status: CharStatus): boolean {
    const guessArray = currentGuess.split("");
    return getLetterStatus(status).every(
      (letter) => guessArray.indexOf(letter) !== -1
    );
  }

    return guessWithStatus;
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
      if (!isWordInWordList(currentGuess.toLowerCase())) {
        setGuesses([...guesses, setInvalidWordStatus(currentGuess)]);
        setCurrentGuess("");
        setIsNotAWordModalOpen(true);
        setTimeout(() => {
          setIsNotAWordModalOpen(false);
        }, 2000);
        return;
      } 

      updateStatuses();
      setGuesses([...guesses, addStatusToGuess(currentGuess)]);
      setCurrentGuess("");

      if (isWinner) {
        setIsGameWon(true);
        setIsWinModalOpen(true);
        setTimeout(() => {
          setIsWinModalOpen(false);
        }, 2000);
        return;
      }
    }
  }

  return (
    <>
    </>
  );
}

export default App;
