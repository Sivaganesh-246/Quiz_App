import React from 'react';

const Timer = ({ timeLeft, totalTime = 180 }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const percentage = Math.max(0, Math.min(100, (timeLeft / totalTime) * 100));

  let statusClass = 'timer-normal';
  if (timeLeft <= 20) {
    statusClass = 'timer-danger';
  } else if (timeLeft <= 60) {
    statusClass = 'timer-warning';
  }

  return (
    <div className={`timer-container ${statusClass}`}>
      <div className="timer-icon">⏳</div>
      <div className="timer-info">
        <span className="timer-label">Time Remaining</span>
        <span className="timer-digits">{formattedTime}</span>
      </div>
      <div className="timer-bar-wrapper">
        <div 
          className="timer-bar-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
