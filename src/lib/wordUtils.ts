import { fiveLetterWords, fiveLetterWordSet } from "../constants/wordlist";

export function getWordOfDay(): {word: string, index: number} {
  const epochMs: number = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  
  return {
    word: fiveLetterWords[index].toUpperCase(),
    index: index 
  }
}

export function isWordInWordList(word: string): boolean {
  return fiveLetterWordSet.has(word);
}

