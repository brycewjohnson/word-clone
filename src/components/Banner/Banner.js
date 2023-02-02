import React from 'react';

function Banner({ type, answer, numGuesses, handleReset }) {
  return (
    <div className={`banner ${type}`}>
      {type === 'happy' ? (
        <span>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numGuesses} guess{numGuesses > 1 ? 'es' : ''}
          </strong>
          .
        </span>
      ) : (
        <span>Sorry, the correct answer is <strong>{answer}</strong></span>
      )}
      <button onClick={handleReset} className='restart-button'>Restart</button>
    </div>
  );
}

export default Banner;
