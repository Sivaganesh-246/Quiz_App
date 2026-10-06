import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          <span className="brand-icon">🎯</span>
          <span className="brand-name">Quiz<span className="accent-text">Master</span></span>
          <span className="brand-badge">SPA</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className={isActive('/')}>
            🏠 Home
          </Link>
          <Link to="/categories" className={isActive('/categories')}>
            📚 Categories
          </Link>
          <Link to="/leaderboard" className={isActive('/leaderboard')}>
            🏆 Leaderboard
          </Link>
          <Link to="/create-quiz" className={isActive('/create-quiz')}>
            ✍️ Create Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
