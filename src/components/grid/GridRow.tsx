import { Grid, Stack } from "@mui/material";
import { Status } from "../../lib/status";
import GridSquare from "./GridSquare";

export default function GridRow({ characters = [] }: { characters?: Status[] }): JSX.Element {

  const squares = characters.map((char, i) => {
    return <GridSquare key={i} {...char} />
  });

  // Handle the case of a guess in progress (has empty squares)
  if (characters.length < 5) {
    for (let i = characters.length; i < 5; ++i) {
      squares.push(<GridSquare key={i} value=" " status="DEFAULT" />);
    }
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      alignContent="center"
    >
      {squares}
    </Stack>
  );
}