import React from 'react';

function Keyboard({ guesses, handleClick }) {
  const status = guesses.flat().reduce((dict, { letter, status }) => {
    const current = dict[letter];
    if (!current || current === 'misplaced') dict[letter] = status;
    return dict;
  }, {});
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map((key) => (
            <button
              onClick={() => handleClick(key)}
              className={`keyboard-key ${status[key]}`}
              key={key}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
