import { Grid, Stack } from "@mui/material";
import GridRow from "./GridRow"
import { CharStatus, Status } from "../../lib/status"

export default function LetterGrid({ currentGuess, guesses, keyStatus }:
  { currentGuess: string, guesses: string[], keyStatus: { [value: string]: CharStatus } }): JSX.Element {

  function addStatusToGuess(guess: string): Status[] {
    const guessStatus: Status[] = [];

    guess.split("").forEach((char) => {
      const key = {
        value: char,
        status: keyStatus[char]
      }
      guessStatus.push(key);
    });

    return guessStatus;
  }

  const guessesWithStatus = guesses.map(guess => addStatusToGuess(guess));
  const guessWithStatus = addStatusToGuess(currentGuess);
  
  const completedRows: JSX.Element[] = guessesWithStatus.map((guess, i) => {
    return <GridRow key={i} characters={guess} />
  });
  const empties: number = 5 - guesses.length;
  const emptyRows = Array(empties).fill(0).map((_, i) => <GridRow key={i} />);

  return (
    <Stack
      direction="column"
      alignItems="center"
    >
      {completedRows}
      <GridRow characters={guessWithStatus} />
      {emptyRows}
    </Stack>
  );
}