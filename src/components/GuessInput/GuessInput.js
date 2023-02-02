import React from 'react';

export default function GuessInput({submitGuess, disabled, guess, setGuess}) {
  function handleSubmit(e) {
    e.preventDefault();
    submitGuess();
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        type="text"
        id="guess-input"
        value={guess}
        required={true}
        minLength={5}
        maxLength={5}
        pattern="^[A-Z]{5}$"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        autoComplete='none'
      />
    </form>
  );
}