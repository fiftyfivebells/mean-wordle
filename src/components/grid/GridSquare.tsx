import { Box } from "@mui/material";
import { Status } from "../../lib/status";

export default function GridSquare({ value, status = "DEFAULT" }: Status): JSX.Element {
  return (
    <Box
      sx={{ border: "solid 1px black", width: "40px", height: "40px" }}
    >
      {value}
    </Box>
  );
}