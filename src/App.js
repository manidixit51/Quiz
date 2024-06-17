// src/App.js
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import StartScreen from './components/StartScreen';
import './index.css';


const App = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement != null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleStartQuiz = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
        setQuizStarted(true);
      }).catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      setIsFullscreen(true);
      setQuizStarted(true);
    }
  };

  return (
    <div className="app">
      {!quizStarted && <StartScreen onStart={handleStartQuiz} />}
      {quizStarted && isFullscreen && <Quiz />}
      {quizStarted && !isFullscreen && (
        <div className="fullscreen-popup">
          <p>Please enter fullscreen mode to start the quiz.</p>
          <button onClick={handleStartQuiz}>Enter Fullscreen</button>
        </div>
      )}
    </div>
  );
};

export default App;
