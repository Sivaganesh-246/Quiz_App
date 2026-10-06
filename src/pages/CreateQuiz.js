import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createCustomQuizRecord,
  getStoredCustomQuizzes,
  saveCustomQuizzes
} from '../data/customQuiz';

const createEmptyQuestion = () => ({
  question: '',
  options: ['', '', '', ''],
  correctAnswer: 0,
  explanation: ''
});

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [quizName, setQuizName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('🧩');
  const [difficulty, setDifficulty] = useState('Custom');
  const [timeInMinutes, setTimeInMinutes] = useState(5);
  const [questions, setQuestions] = useState([createEmptyQuestion()]);
  const [error, setError] = useState('');

  const updateQuestion = (index, field, value) => {
    setQuestions((prev) =>
      prev.map((question, questionIndex) =>
        questionIndex === index ? { ...question, [field]: value } : question
      )
    );
  };

  const updateOption = (questionIndex, optionIndex, value) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index !== questionIndex) return question;

        const nextOptions = [...question.options];
        nextOptions[optionIndex] = value;
        return { ...question, options: nextOptions };
      })
    );
  };

  const addQuestion = () => {
    setQuestions((prev) => [...prev, createEmptyQuestion()]);
  };

  const removeQuestion = (index) => {
    if (questions.length === 1) {
      setQuestions([createEmptyQuestion()]);
      return;
    }

    setQuestions((prev) => prev.filter((_, questionIndex) => questionIndex !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = quizName.trim();
    if (!trimmedName) {
      setError('Please enter a quiz name.');
      return;
    }

    const validQuestions = questions.filter((question) => {
      const hasQuestion = question.question.trim();
      const validOptions = question.options.filter((option) => option.trim()).length >= 2;
      return hasQuestion && validOptions;
    });

    if (validQuestions.length === 0) {
      setError('Add at least one valid question with at least two choices.');
      return;
    }

    const cleanedQuiz = createCustomQuizRecord({
      name: trimmedName,
      description,
      icon,
      difficulty,
      timeInMinutes,
      questions: validQuestions.map((question) => ({
        question: question.question,
        options: question.options,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation
      }))
    });

    const currentQuizzes = getStoredCustomQuizzes();
    saveCustomQuizzes([...currentQuizzes, cleanedQuiz]);
    navigate('/categories');
  };

  return (
    <div className="page-container creator-page">
      <div className="page-header creator-header">
        <button type="button" className="back-link" onClick={() => navigate('/categories')}>
          ← Back to Categories
        </button>
        <h1 className="page-title">Create a New Quiz</h1>
        <p className="page-description">
          Build your own quiz by adding questions, answer choices, and the correct option for each question.
        </p>
      </div>

      <form className="creator-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-field">
            <span>Quiz Name</span>
            <input
              type="text"
              value={quizName}
              onChange={(event) => setQuizName(event.target.value)}
              placeholder="e.g. JavaScript Fundamentals"
            />
          </label>

          <label className="form-field">
            <span>Icon</span>
            <input
              type="text"
              value={icon}
              maxLength={2}
              onChange={(event) => setIcon(event.target.value || '🧩')}
            />
          </label>
        </div>

        <div className="form-grid">
          <label className="form-field">
            <span>Description</span>
            <textarea
              rows="3"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Short description for this quiz"
            />
          </label>

          <div className="split-fields">
            <label className="form-field">
              <span>Difficulty</span>
              <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
                <option value="Custom">Custom</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>

            <label className="form-field">
              <span>Minutes</span>
              <input
                type="number"
                min="1"
                max="30"
                value={timeInMinutes}
                onChange={(event) => setTimeInMinutes(Number(event.target.value) || 5)}
              />
            </label>
          </div>
        </div>

        {error && <div className="form-error">{error}</div>}

        <div className="questions-editor">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question-block">
              <div className="question-block-header">
                <h3>Question {questionIndex + 1}</h3>
                {questions.length > 1 && (
                  <button
                    type="button"
                    className="remove-question-btn"
                    onClick={() => removeQuestion(questionIndex)}
                  >
                    Remove
                  </button>
                )}
              </div>

              <label className="form-field">
                <span>Question</span>
                <input
                  type="text"
                  value={question.question}
                  onChange={(event) => updateQuestion(questionIndex, 'question', event.target.value)}
                  placeholder="Type your question"
                />
              </label>

              <div className="options-list">
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="option-row">
                    <label className="form-field option-label">
                      <span>Choice {optionIndex + 1}</span>
                      <input
                        type="text"
                        value={option}
                        onChange={(event) => updateOption(questionIndex, optionIndex, event.target.value)}
                        placeholder={`Choice ${optionIndex + 1}`}
                      />
                    </label>
                  </div>
                ))}
              </div>

              <div className="correct-answer-row">
                <label className="form-field">
                  <span>Correct Answer</span>
                  <select
                    value={question.correctAnswer}
                    onChange={(event) =>
                      updateQuestion(questionIndex, 'correctAnswer', Number(event.target.value))
                    }
                  >
                    {question.options.map((_, optionIndex) => (
                      <option key={optionIndex} value={optionIndex}>
                        Choice {optionIndex + 1}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="form-field">
                <span>Explanation</span>
                <textarea
                  rows="2"
                  value={question.explanation}
                  onChange={(event) => updateQuestion(questionIndex, 'explanation', event.target.value)}
                  placeholder="Why is this the correct answer?"
                />
              </label>
            </div>
          ))}
        </div>

        <div className="creator-actions">
          <button type="button" className="btn btn-secondary" onClick={addQuestion}>
            + Add Question
          </button>
          <button type="submit" className="btn btn-submit">
            Save Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
