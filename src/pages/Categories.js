import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { categories } from '../data/questions';
import { getCustomQuizCategories } from '../data/customQuiz';

const Categories = () => {
  const navigate = useNavigate();
  const customCategories = getCustomQuizCategories();
  const allCategories = [...categories, ...customCategories];

  const handleStartCategory = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <div className="page-container categories-page">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">Select Quiz Category</h1>
        <p className="page-description">
          Pick your favorite subject to test your understanding. Each quiz contains multiple-choice questions with a countdown timer.
        </p>
      </div>

      <div className="creator-cta">
        <Link to="/create-quiz" className="btn btn-primary btn-lg">
          + Create Custom Quiz
        </Link>
      </div>

      <div className="categories-grid">
        {allCategories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            style={{ '--cat-color': cat.color }}
          >
            <div className="category-header">
              <span className="category-icon">{cat.icon}</span>
              <span className="difficulty-pill">{cat.difficulty}</span>
            </div>

            <h3 className="category-name">{cat.name}</h3>
            <p className="category-desc">{cat.description}</p>

            <div className="category-meta">
              <div className="meta-badge">
                <span>📝</span> {cat.totalQuestions} Questions
              </div>
              <div className="meta-badge">
                <span>⏳</span> {cat.timeInMinutes} Minutes
              </div>
            </div>

            <button
              type="button"
              className="btn btn-category"
              onClick={() => handleStartCategory(cat.id)}
            >
              Start {cat.name} Quiz →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
