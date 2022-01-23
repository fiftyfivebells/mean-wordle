import Key from "./Key";
import { CharStatus } from "../../lib/status";
import { Grid, Stack } from "@mui/material";
import { KeyProps } from "../../lib/keyboard";

export default function KeyboardRow({
  keyList,
}: {
  keyList: KeyProps[];
}): JSX.Element {
  const keys = keyList.map((k, i) => {
    const arrKey = k.value ? k.value : i;
    return <Key key={arrKey} {...k} />;
  });

  return (
    <Stack sx={{ display: "flex", width: "100%" }} direction="row" justifyContent="center" spacing={1}>
      {keys}
    </Stack>
  );
}
