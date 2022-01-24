import { forwardRef } from "react";
import {
  AppBar,
  Dialog,
  IconButton,
  makeStyles,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import GridRow from "../grid/GridRow";
import { CharStatus } from "../../lib/status";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  dialog: {
    position: "absolute",
    left: 10,
    top: 50,
  },
};

export default function RulesModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}): JSX.Element {
  const sampleCorrect = [
    { value: "H", status: "CORRECT" as CharStatus },
    { value: "O", status: "DEFAULT" as CharStatus },
    { value: "U", status: "DEFAULT" as CharStatus },
    { value: "S", status: "DEFAULT" as CharStatus },
    { value: "E", status: "DEFAULT" as CharStatus },
  ];

  const samplePresent = [
    { value: "S", status: "DEFAULT" as CharStatus },
    { value: "H", status: "PRESENT" as CharStatus },
    { value: "A", status: "DEFAULT" as CharStatus },
    { value: "P", status: "DEFAULT" as CharStatus },
    { value: "E", status: "DEFAULT" as CharStatus },
  ];

  const sampleIncorrect = [
    { value: "P", status: "DEFAULT" as CharStatus },
    { value: "E", status: "DEFAULT" as CharStatus },
    { value: "A", status: "DEFAULT" as CharStatus },
    { value: "R", status: "INCORRECT" as CharStatus },
    { value: "S", status: "DEFAULT" as CharStatus },
  ];

  const sampleFake = [
    { value: "J", status: "FAKE" as CharStatus },
    { value: "I", status: "FAKE" as CharStatus },
    { value: "Y", status: "FAKE" as CharStatus },
    { value: "Z", status: "FAKE" as CharStatus },
    { value: "T", status: "FAKE" as CharStatus },
  ];

  return (
    <Dialog
      sx={styles}
      open={isOpen}
      TransitionComponent={Transition}
      onClose={() => setIsOpen(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <IconButton onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </IconButton>
      </div>

      <Stack
        alignItems="center"
        component="div"
        sx={{ flexGrow: 1, margin: "0 auto", padding: "10px" }}
      >
        <Typography variant="h5">HOW TO PLAY</Typography>
        <Typography variant="overline">Guess the WORDLE in 6 tries.</Typography>
        <p>
          Each guess must be a valid 5 letter word. If the word is not valid,
          you will lose a turn. Press enter to submit your guess.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <GridRow characters={sampleCorrect} />
        <Typography variant="body2">
          The letter <strong>H</strong> is in the word and in the correct spot.
        </Typography>
        <GridRow characters={samplePresent} />
        <Typography variant="body2">
          The letter <strong>H</strong> is in the word but in the wrong spot.
        </Typography>
        <GridRow characters={sampleIncorrect} />
        <Typography variant="body2">
          The letter <strong>R</strong> is not in the word at all.
        </Typography>
        <GridRow characters={sampleFake} />
        <p>
          You will lose a turn for guessing an invalid word or for not including
          present or correct letters in subsequent guesses.
        </p>
      </Stack>
    </Dialog>
  );
}
