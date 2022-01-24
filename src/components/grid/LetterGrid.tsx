import { Stack } from "@mui/material";
import GridRow from "./GridRow";
import { CharStatus, Status } from "../../lib/status";

export default function LetterGrid({
  currentGuess,
  guesses,
  keyStatus,
}: {
  currentGuess: string;
  guesses: Status[][];
  keyStatus: { [value: string]: CharStatus };
}): JSX.Element {
  function addStatusToCurrentGuess(guess: string): Status[] {
    const guessStatus: Status[] = [];

    guess.split("").forEach((char) => {
      const key = {
        value: char,
        status: "DEFAULT" as CharStatus,
      };
      guessStatus.push(key);
    });

    return guessStatus;
  }

  const completedRows: JSX.Element[] = guesses.map((guess, i) => {
    return <GridRow key={i} characters={guess} />;
  });
  const empties: number = 5 - guesses.length;
  const emptyRows =
    empties === -1
      ? []
      : Array(empties)
          .fill(0)
          .map((_, i) => <GridRow key={i} />);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    overflow: "hidden"
  }
          
  const gridStyle = {
    width: "350px",
    height: "420px",
    display: "flex",
    gridGap: "5px",
    padding: "10px",
    boxSizing: "border-box",
    flexShrink: 1
  }
          
  return (
    <div style={containerStyle}>
       <Stack sx={gridStyle}>
        {completedRows}
        {guesses.length < 6 && (
          <GridRow characters={addStatusToCurrentGuess(currentGuess)} />
        )}
        {empties > -1 && emptyRows}
        </Stack>
    </div>
  );
}
