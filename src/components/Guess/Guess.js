import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <div className="guess">
      {range(0, 5).map((cell) => (
        <div className={`cell ${guess && guess[cell].status}`} key={cell}>
          {guess && guess[cell].letter}
        </div>
      ))}
    </div>
  );
}

export default Guess;
