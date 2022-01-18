
import { Button } from "@mui/material";
import { CharStatus } from "../../lib/status"
import { KeyProps } from "../../lib/keyboard";

export default function Key({ value, status, handleClick }: KeyProps): JSX.Element {

  const styles = {
    backgroundColor: "white",
    color: "white"
  };

  if (status === "CORRECT") {
    styles.backgroundColor = "green";
  } else if (status === "PRESENT") {
    styles.backgroundColor = "yellow";
  } else if (status === "INCORRECT") {
    styles.backgroundColor = "gray";
  } else {
    styles.color = "black";
  }
  
  return (
    <Button
      sx={styles}
      onClick={handleClick}
      value={value}
      variant="outlined"
    >
      {value}
    </Button>
  );
}