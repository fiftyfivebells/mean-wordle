export type CharStatus =
  | "CORRECT"
  | "INCORRECT"
  | "PRESENT"
  | "DEFAULT"
  | "FAKE";

export interface Status {
  value: string;
  status: CharStatus;
}

export function addStatusToGuess(
  currentGuess: string,
  wordOfDay: string
): Status[] {
  const guessWithStatus: Status[] = addCorrectStatus(currentGuess, wordOfDay);
  const letterSet: Set<string> = new Set();

  guessWithStatus.forEach((letter, i) => {
    if (letter.status !== "CORRECT") {
      letterSet.add(wordOfDay[i]);
    }
  });

  guessWithStatus.forEach((letter, i) => {
    if (letterSet.has(letter.value) && letter.status !== "CORRECT") {
      letter.status = "PRESENT" as CharStatus;
    } else if (letter.status !== "CORRECT") {
      letter.status = "INCORRECT" as CharStatus;
    }
  });

  return guessWithStatus;
}

function addCorrectStatus(currentGuess: string, wordOfDay: string) {
  const guessWithCorrect: Status[] = [];

  currentGuess.split("").forEach((letter, i) => {
    const char = {
      value: letter,
      status: "DEFAULT" as CharStatus,
    };
    if (letter === wordOfDay[i]) {
      char.status = "CORRECT";
    }

    guessWithCorrect.push(char);
  });

  return guessWithCorrect;
}

export const keyStatuses: { [key: string]: CharStatus } = {
  A: "DEFAULT" as CharStatus,
  B: "DEFAULT" as CharStatus,
  C: "DEFAULT" as CharStatus,
  D: "DEFAULT" as CharStatus,
  E: "DEFAULT" as CharStatus,
  F: "DEFAULT" as CharStatus,
  G: "DEFAULT" as CharStatus,
  H: "DEFAULT" as CharStatus,
  I: "DEFAULT" as CharStatus,
  J: "DEFAULT" as CharStatus,
  K: "DEFAULT" as CharStatus,
  L: "DEFAULT" as CharStatus,
  M: "DEFAULT" as CharStatus,
  N: "DEFAULT" as CharStatus,
  O: "DEFAULT" as CharStatus,
  P: "DEFAULT" as CharStatus,
  Q: "DEFAULT" as CharStatus,
  R: "DEFAULT" as CharStatus,
  S: "DEFAULT" as CharStatus,
  T: "DEFAULT" as CharStatus,
  U: "DEFAULT" as CharStatus,
  V: "DEFAULT" as CharStatus,
  W: "DEFAULT" as CharStatus,
  X: "DEFAULT" as CharStatus,
  Y: "DEFAULT" as CharStatus,
  Z: "DEFAULT" as CharStatus,
};
