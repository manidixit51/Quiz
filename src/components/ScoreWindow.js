// src/components/ScoreWindow.js
import React from 'react';

const ScoreWindow = ({ score, totalQuestions, onRetry, onExit }) => {
  return (
    <div className="score-window">
      <h2>Your Score</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <div className="score-window-buttons">
        <button onClick={onRetry}>Retry</button>
        <button onClick={onExit}>Exit</button>
      </div>
    </div>
  );
};

export default ScoreWindow;
