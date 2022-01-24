import { Box, Container, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Status } from "../../lib/status";

const theme = createTheme();

theme.typography.body1 = {
  fontSize: "1rem",
  "@media (min-width:350px)": {
    fontSize: "2rem",
  },
};

export default function GridSquare({
  value,
  status = "DEFAULT",
}: Status): JSX.Element {
  const styles = {
    display: "inline-flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    <div style={styles}>
      <ThemeProvider theme={theme}>
        <Typography variant="body1">{value}</Typography>
      </ThemeProvider>
    </div>
  );
}
