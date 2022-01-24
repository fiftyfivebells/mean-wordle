import { Button, Grid } from "@mui/material";
import { CharStatus } from "../../lib/status";
import { KeyProps } from "../../lib/keyboard";

export default function Key({
  value,
  status,
  handleClick,
}: KeyProps): JSX.Element {

  const styles = {
    border: 0,
    padding: 0,
    margin: "0 6px 0 0",
    height: "58px",
    width: "40px",
    flex: 1,
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d8d8d8",
    color: "black",
  };

  if (status === "CORRECT") {
    styles.backgroundColor = "#6aaa64";
    styles.color = "white"
  } else if (status === "PRESENT") {
    styles.backgroundColor = "#c9b548";
    styles.color = "white"
  } else if (status === "INCORRECT") {
    styles.backgroundColor = "#939598";
    styles.color = "white"
  } else {
    styles.color = "black";
  }

  if (value === "ENTER" || value === "DELETE") {
    styles.width = "80px";
    styles.flex = 1.5;
  }
  
  if (value === "") {
    styles.backgroundColor = "none";
    styles.width = "20px";
    styles.cursor = "default";
    styles.flex = 0.5;
  }
  
  return (
    value ?
    <button style={styles} onClick={handleClick}>
      {value}
    </button>
    :
    <div style={styles}></div>
  );
}
