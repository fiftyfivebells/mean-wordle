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
  const guessWithStatus: Status[] = [];
  const letterSet: Set<string> = new Set(wordOfDay);

  currentGuess.split("").forEach((letter, i) => {
    const char = {
      value: letter,
      status: "DEFAULT" as CharStatus,
    };
    if (letter === wordOfDay[i]) {
      char.status = "CORRECT" as CharStatus;
    } else if (letterSet.has(letter)) {
      char.status = "PRESENT" as CharStatus;
    } else {
      char.status = "INCORRECT" as CharStatus;
    }

    guessWithStatus.push(char);
  });

  return guessWithStatus;
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
