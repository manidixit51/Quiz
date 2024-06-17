// src/components/Question.js
import React from 'react';

const Question = ({ question, choices, onSelectChoice, questionNumber, totalQuestions }) => {
  return (
    <div className="question-container">
      <h2>Question {questionNumber} of {totalQuestions}</h2>
      <p className="question">{question}</p>
      <div className="choices">
        {choices.map((choice, index) => (
          <button key={index} className="choice" onClick={() => onSelectChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
