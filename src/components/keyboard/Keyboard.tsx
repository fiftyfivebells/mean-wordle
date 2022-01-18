import { Stack } from "@mui/material";
import { CharStatus } from "../../lib/status";
import { KeyProps, KeyboardProps } from "../../lib/keyboard";
import KeyboardRow from "./KeyboardRow";

export default function Keyboard({
  handleValue,
  handleEnter,
  handleDelete,
  keyStatus,
}: KeyboardProps): JSX.Element {
  function handleClick(event: React.MouseEvent): void {
    const e = event.target as HTMLInputElement;
    console.log(e.value);
  }

  function makeKeyRow(values: string[]): KeyProps[] {
    const row: KeyProps[] = [];

    values.forEach((val) => {
      const key: KeyProps = {
        value: val,
        status: "DEFAULT",
        handleClick: handleValue,
      };

      if (val === "ENTER") {
        key.handleClick = handleEnter;
      } else if (val === "DELETE") {
        key.handleClick = handleDelete;
      } else {
        key.status = keyStatus[val];
      }

      row.push(key);
    });

    return row;
  }

  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
  ];

  const keys = rows.map((row) => makeKeyRow(row));

  return (
    <Stack direction="column" alignItems="center">
      {keys.map((row, i) => {
        return <KeyboardRow key={i} keyList={row} />;
      })}
    </Stack>
  );
}
