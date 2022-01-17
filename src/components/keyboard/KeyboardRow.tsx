import Key from "./Key";
import { CharStatus } from "../../lib/status";
import { Grid } from "@mui/material";
import { KeyProps } from "../../lib/keyboard";

export default function KeyboardRow({ keyList }: { keyList: KeyProps[] }): JSX.Element {

  const keys = keyList.map((k) => {
    return <Key key={k.value} {...k} />
  });

  return (
    <Grid>
      {keys}
    </Grid>
  )
}