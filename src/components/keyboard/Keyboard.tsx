import { Stack } from "@mui/material";
import { KeyProps, KeyboardProps } from "../../lib/keyboard";
import KeyboardRow from "./KeyboardRow";
import React from "react";

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

  React.useEffect(() => {
    function eventListener(event: KeyboardEvent) {
      const { key, code } = event;

      if (code === "Enter") {
        handleEnter();
      } else if (code === "Delete" || code === "Backspace") {
        handleDelete();
      } else if (
        key.length === 1 &&
        key.toUpperCase() >= "A" &&
        key.toUpperCase() <= "Z"
      ) {
        handleValue(undefined, key.toUpperCase());
      }
    }
    window.addEventListener("keyup", eventListener);
    return () => {
      window.removeEventListener("keyup", eventListener);
    };
  }, [handleEnter, handleDelete, handleValue]);

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
    ["", "A", "S", "D", "F", "G", "H", "J", "K", "L", ""],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
  ];

  const keys = rows.map((row) => makeKeyRow(row));

  return (
    <Stack spacing={0.5} sx={{ padding: "10px", margin: "0 8px", maxHeight: "200px" }}>
      {keys.map((row, i) => {
        return <KeyboardRow key={i} keyList={row} />;
      })}
    </Stack>
  );
}
