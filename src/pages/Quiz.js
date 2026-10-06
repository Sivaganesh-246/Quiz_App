import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, quizQuestions } from '../data/questions';
import { getStoredCustomQuizzes } from '../data/customQuiz';
import QuizCard from '../components/QuizCard';
import Timer from '../components/Timer';

const Quiz = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const customQuiz = getStoredCustomQuizzes().find((quiz) => quiz.id === categoryId);

  // Find category metadata
  const currentCategory =
    categories.find((c) => c.id === categoryId) ||
    (customQuiz
      ? {
          id: customQuiz.id,
          name: customQuiz.name,
          icon: customQuiz.icon,
          color: customQuiz.color,
          description: customQuiz.description,
          difficulty: customQuiz.difficulty,
          totalQuestions: customQuiz.totalQuestions,
          timeInMinutes: customQuiz.timeInMinutes
        }
      : categories[0]);
  const questions = customQuiz ? customQuiz.questions : quizQuestions[categoryId] || quizQuestions.java;

  const totalTimeSeconds = (currentCategory?.timeInMinutes || 3) * 60;

  // States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionIndex]: optionIndex }
  const [timeLeft, setTimeLeft] = useState(totalTimeSeconds);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Keep ref for auto-submit
  const answersRef = useRef(userAnswers);
  answersRef.current = userAnswers;

  const timeLeftRef = useRef(timeLeft);
  timeLeftRef.current = timeLeft;

  // Submit Handler
  const handleSubmitQuiz = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const timeSpent = totalTimeSeconds - timeLeftRef.current;

    navigate('/result', {
      state: {
        categoryId: currentCategory.id,
        categoryName: currentCategory.name,
        categoryIcon: currentCategory.icon,
        questions: questions,
        userAnswers: answersRef.current,
        timeSpent: Math.max(1, timeSpent),
        totalTime: totalTimeSeconds
      }
    });
  }, [currentCategory, isSubmitting, navigate, questions, totalTimeSeconds]);

  // Timer Effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [handleSubmitQuiz]);

  // Option selection
  const handleSelectOption = (optionIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleClearAnswer = () => {
    setUserAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentIndex];
      return updated;
    });
  };

  // Progress metrics
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="page-container quiz-page">
      {/* Top Banner with Quiz Title & Timer */}
      <div className="quiz-header-bar">
        <div className="quiz-title-info">
          <span className="quiz-category-pill">
            {currentCategory.icon} {currentCategory.name}
          </span>
          <span className="quiz-progress-text">
            Answered {answeredCount} of {questions.length}
          </span>
        </div>

        <Timer timeLeft={timeLeft} totalTime={totalTimeSeconds} />
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Main Quiz Card */}
      <main className="quiz-main-content">
        <QuizCard
          questionData={questions[currentIndex]}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          selectedOption={userAnswers[currentIndex]}
          onSelectOption={handleSelectOption}
        />

        {/* Bottom Controls: Previous, Clear, Next/Submit */}
        <div className="quiz-controls">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ← Previous
          </button>

          {userAnswers[currentIndex] !== undefined && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleClearAnswer}
            >
              Clear Choice
            </button>
          )}

          {currentIndex < questions.length - 1 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next →
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-submit"
              onClick={() => setShowConfirmModal(true)}
            >
              Finish & Submit Quiz ✓
            </button>
          )}
        </div>

        {/* Question Palette / Navigator */}
        <div className="question-palette">
          <span className="palette-title">Question Navigator:</span>
          <div className="palette-grid">
            {questions.map((_, idx) => {
              const isAnswered = userAnswers[idx] !== undefined;
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`palette-num ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  title={`Go to Question ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <h3>Submit Quiz Confirmation</h3>
            <p>
              You have answered <strong>{answeredCount}</strong> out of <strong>{questions.length}</strong> questions.
            </p>
            {answeredCount < questions.length && (
              <p className="modal-warning">
                ⚠️ You have {questions.length - answeredCount} unanswered question(s). Are you sure you want to finish now?
              </p>
            )}
            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowConfirmModal(false)}
              >
                Keep Answering
              </button>
              <button
                type="button"
                className="btn btn-submit"
                onClick={handleSubmitQuiz}
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
