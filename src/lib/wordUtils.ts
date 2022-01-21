import { fiveLetterWords, fiveLetterWordSet } from "../constants/wordlist";

export function getWordOfDay(): string {
  return fiveLetterWords[0];
}

export function isWordInWordList(word: string): boolean {
  return fiveLetterWordSet.has(word);
}

