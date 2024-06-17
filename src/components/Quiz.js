// src/components/Quiz.js
import React, { useEffect, useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import ScoreWindow from './ScoreWindow';
import questionsData from '../data/questions.json';

const Quiz = () => {
  const [questions] = useState(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const savedIndex = localStorage.getItem('currentQuestionIndex');
    return savedIndex ? parseInt(savedIndex) : 0;
  });
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleChoiceSelection = (choice) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      localStorage.setItem('currentQuestionIndex', nextIndex);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleTimeUp = () => {
    setIsQuizComplete(true);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizComplete(false);
    localStorage.setItem('currentQuestionIndex', 0);
    localStorage.setItem('timer', 600);
  };

  const handleExit = () => {
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('timer');
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  }, [currentQuestionIndex]);

  if (isQuizComplete) {
    return <ScoreWindow score={score} totalQuestions={questions.length} onRetry={handleRetry} onExit={handleExit} />;
  }

  return (
    <div className="quiz">
      <Timer onTimeUp={handleTimeUp} />
      <Question
        question={questions[currentQuestionIndex].question}
        choices={questions[currentQuestionIndex].choices}
        onSelectChoice={handleChoiceSelection}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default Quiz;
