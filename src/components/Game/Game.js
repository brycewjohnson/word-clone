import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [currentGuess, setCurrentGuess] = React.useState('');

  const gameWon = guesses
    .at(-1)
    ?.every((letter) => letter.status === 'correct');
  const gameOver = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function submitGuess() {
    const g = checkGuess(currentGuess, answer);
    setGuesses([...guesses, g]);
    setCurrentGuess('');
  }

  function handleKeyClick(key) {
    setCurrentGuess(currentGuess + key);
  }

  function handleReset() {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  return (
    <div>
      <GuessResults guesses={guesses} />
      <GuessInput
        submitGuess={submitGuess}
        setGuess={setCurrentGuess}
        guess={currentGuess}
        disabled={gameWon || gameOver}
      />
      <Keyboard guesses={guesses} handleClick={handleKeyClick} />
      {(gameWon || gameOver) && (
        <Banner
          answer={answer}
          numGuesses={guesses.length}
          type={gameWon ? 'happy' : 'sad'}
          handleReset={handleReset}
        ></Banner>
      )}
    </div>
  );
}

export default Game;
