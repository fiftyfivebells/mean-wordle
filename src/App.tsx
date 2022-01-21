import React from 'react';

function App() {
  const [isNotAWordModalOpen, setIsNotAWordModalOpen] =
    React.useState<boolean>(false);
  const [isWinModalOpen, setIsWinModalOpen] = React.useState(false);
  const [isGameWon, setIsGameWon] = React.useState(false);
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState(Array<Status[]>());
  const [keyStatus, setKeyStatus] =
    React.useState<{ [key: string]: CharStatus }>(keyStatuses);
  return (
    <>
    </>
  );
}

export default App;
