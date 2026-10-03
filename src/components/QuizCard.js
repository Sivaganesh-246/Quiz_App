import React from 'react';

const optionLabels = ['A', 'B', 'C', 'D'];

const QuizCard = ({
  questionData,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption
}) => {
  if (!questionData) return null;

  return (
    <div className="quiz-card">
      <div className="quiz-card-header">
        <span className="question-badge">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <span className="question-status">
          {selectedOption !== undefined ? '✓ Answered' : '○ Not Answered'}
        </span>
      </div>

      <h2 className="question-text">{questionData.question}</h2>

      <div className="options-grid">
        {questionData.options.map((option, index) => {
          const isSelected = selectedOption === index;
          return (
            <button
              key={index}
              type="button"
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectOption(index)}
              aria-pressed={isSelected}
            >
              <span className="option-label">{optionLabels[index]}</span>
              <span className="option-content">{option}</span>
              <span className="option-check">{isSelected ? '●' : '○'}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;
