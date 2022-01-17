
import { Button } from "@mui/material";
import { CharStatus } from "../../lib/status"
import { KeyProps } from "../../lib/keyboard";

export default function Key({ value, status, handleClick }: KeyProps): JSX.Element {

  return (
    <Button
      onClick={handleClick}
      value={value}
      variant="outlined"
    >
      {value}
    </Button>
  );
}