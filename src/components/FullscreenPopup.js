import React from 'react';

const FullscreenPopup = ({ onEnableFullscreen }) => {
  return (
    <div className="fullscreen-popup">
      <p>Please enable full-screen mode to start the quiz.</p>
      <button onClick={onEnableFullscreen}>Go Fullscreen</button>
    </div>
  );
};

export default FullscreenPopup;
