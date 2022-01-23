import { Box, Container, Stack } from "@mui/material";
import { Status } from "../../lib/status";

export default function GridSquare({
  value,
  status = "DEFAULT",
}: Status): JSX.Element {
  const styles = {
    display: "inline-flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    lineHeight: "2rem",
    fontWeight: "bold",
    border: "",
    backgroundColor: "",
    color: "white",
    minWidth: "20px",
  };

  if (status === "CORRECT") {
    styles.backgroundColor = "#6aaa64";
    styles.border = "";
  } else if (status === "PRESENT") {
    styles.backgroundColor = "#c9b458";
  } else if (status === "INCORRECT") {
    styles.backgroundColor = "#939598";
  } else if (status === "FAKE") {
    styles.backgroundColor = "#de1c18";
  } else {
    styles.border = "solid 2px #d3d6da";
    styles.color = "black";
  }

  return (
    <div style={styles}>{value}</div>

    /*     <Stack sx={styles} flexGrow={1} justifyContent="center" alignItems="center">
      <strong>{value}</strong>
    </Stack> */
  );
}
