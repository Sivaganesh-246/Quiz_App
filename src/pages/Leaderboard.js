import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const defaultSeedScores = [
  {
    id: 101,
    name: 'Sabari Rajan',
    category: 'React.js',
    categoryIcon: '⚛️',
    score: 6,
    total: 6,
    percentage: 100,
    status: 'PASS',
    timeSpent: '1m 24s',
    date: 'Oct 02, 2026'
  },
  {
    id: 102,
    name: 'Priya Sharma',
    category: 'Python',
    categoryIcon: '🐍',
    score: 5,
    total: 6,
    percentage: 83,
    status: 'PASS',
    timeSpent: '1m 45s',
    date: 'Oct 02, 2026'
  },
  {
    id: 103,
    name: 'Arun Kumar',
    category: 'Java',
    categoryIcon: '☕',
    score: 5,
    total: 6,
    percentage: 83,
    status: 'PASS',
    timeSpent: '2m 10s',
    date: 'Oct 01, 2026'
  },
  {
    id: 104,
    name: 'Deepa V',
    category: 'Computer Science',
    categoryIcon: '💻',
    score: 4,
    total: 6,
    percentage: 67,
    status: 'PASS',
    timeSpent: '2m 35s',
    date: 'Oct 01, 2026'
  },
  {
    id: 105,
    name: 'Karthik S',
    category: 'General Knowledge',
    categoryIcon: '🌍',
    score: 4,
    total: 6,
    percentage: 67,
    status: 'PASS',
    timeSpent: '1m 50s',
    date: 'Sep 30, 2026'
  }
];

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Load from localStorage or initialize with seed data
  useEffect(() => {
    const saved = localStorage.getItem('quiz_leaderboard');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setScores(parsed);
          return;
        }
      } catch (err) {
        console.error('Error parsing leaderboard data', err);
      }
    }
    // Set seed data
    setScores(defaultSeedScores);
    localStorage.setItem('quiz_leaderboard', JSON.stringify(defaultSeedScores));
  }, []);

  const handleClear = () => {
    if (window.confirm('Are you sure you want to reset the leaderboard?')) {
      localStorage.removeItem('quiz_leaderboard');
      setScores([]);
    }
  };

  const handleResetToDefault = () => {
    localStorage.setItem('quiz_leaderboard', JSON.stringify(defaultSeedScores));
    setScores(defaultSeedScores);
  };

  // Filtered and sorted scores (highest percentage first, then score)
  const filteredScores = scores
    .filter((item) => {
      if (selectedFilter === 'All') return true;
      return item.category.toLowerCase().includes(selectedFilter.toLowerCase());
    })
    .sort((a, b) => b.percentage - a.percentage || b.score - a.score);

  const getRankBadge = (index) => {
    if (index === 0) return <span className="rank-badge rank-1">🥇 1st</span>;
    if (index === 1) return <span className="rank-badge rank-2">🥈 2nd</span>;
    if (index === 2) return <span className="rank-badge rank-3">🥉 3rd</span>;
    return <span className="rank-badge rank-other">#{index + 1}</span>;
  };

  return (
    <div className="page-container leaderboard-page">
      <div className="page-header">
        <h1 className="page-title">🏆 Quiz Leaderboard</h1>
        <p className="page-description">
          Top scoring students ranked by percentage, score, and completion speed.
        </p>
      </div>

      {/* Filter Tabs & Reset Controls */}
      <div className="leaderboard-controls">
        <div className="category-tabs">
          {['All', 'Java', 'Python', 'React', 'Computer Science', 'General Knowledge'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-tab ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="table-actions">
          <button type="button" className="btn btn-sm btn-outline" onClick={handleResetToDefault}>
            🔄 Load Sample Scores
          </button>
          {scores.length > 0 && (
            <button type="button" className="btn btn-sm btn-ghost" onClick={handleClear}>
              🗑️ Clear All
            </button>
          )}
        </div>
      </div>

      {/* Leaderboard Table / Cards */}
      {filteredScores.length === 0 ? (
        <div className="empty-leaderboard">
          <p>No records found for the selected category.</p>
          <Link to="/categories" className="btn btn-primary mt-2">
            Be the First to Play! 🚀
          </Link>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Student Name</th>
                <th>Category</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Status</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredScores.map((entry, index) => (
                <tr key={entry.id || index} className={index < 3 ? `top-row top-${index + 1}` : ''}>
                  <td>{getRankBadge(index)}</td>
                  <td>
                    <strong>{entry.name}</strong>
                  </td>
                  <td>
                    <span className="cat-chip">
                      {entry.categoryIcon || '🎯'} {entry.category}
                    </span>
                  </td>
                  <td>
                    <span className="score-pill">{entry.score} / {entry.total}</span>
                  </td>
                  <td>
                    <div className="score-bar-inline">
                      <span>{entry.percentage}%</span>
                      <div className="mini-progress">
                        <div
                          className="mini-fill"
                          style={{
                            width: `${entry.percentage}%`,
                            backgroundColor: entry.percentage >= 80 ? '#10b981' : entry.percentage >= 50 ? '#f59e0b' : '#ef4444'
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`status-pill ${entry.status === 'PASS' ? 'pass' : 'fail'}`}>
                      {entry.status}
                    </span>
                  </td>
                  <td>{entry.timeSpent || 'N/A'}</td>
                  <td>{entry.date || 'Today'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Call to action */}
      <div className="leaderboard-cta">
        <p>Think you can score higher?</p>
        <Link to="/categories" className="btn btn-primary btn-lg">
          Take a Quiz Now →
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
