import { Status } from "../../lib/status";
import GridSquare from "./GridSquare";

export default function GridRow({
  characters = [],
}: {
  characters?: Status[];
}): JSX.Element {
  const squares = characters.map((char, i) => {
    return <GridSquare key={i} {...char} />;
  });

  // Handle the case of a guess in progress (has empty squares)
  if (characters.length < 5) {
    for (let i = characters.length; i < 5; ++i) {
      squares.push(<GridSquare key={i} value=" " status="DEFAULT" />);
    }
  }

  const rowStyle = {
    display: "flex",
    gridGap: "5px",
    flex: 1
  };

  return (
    <div style={rowStyle}>
      {squares}
    </div>
/*     <Stack direction="row" spacing={1} flex={1} sx={{ display: "flex" }}>
      {squares}
    </Stack> */
  );
}
