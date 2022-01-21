import { Box } from "@mui/material";
import { Status } from "../../lib/status";

export default function GridSquare({
  value,
  status = "DEFAULT",
}: Status): JSX.Element {
  const styles = {
    border: "solid 1px black",
    width: "40px",
    height: "40px",
    backgroundColor: "white",
    color: "white",
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
    <Box sx={styles}>
      <strong>{value}</strong>
    </Box>
  );
}
