# 🎯 Online Quiz Single Page Application (SPA)

A modern, responsive, and feature-rich **Online Quiz Web Application** built using **React.js**, **React Router**, **State Management**, and **CSS**.

---

## 🚀 Features

1. **🏠 Home Page**
   - Application title, banner badge, and description
   - Quick action buttons (*Start Quiz* & *View Leaderboard*)
   - Key highlight cards (Categories, Timers, Instant Results, Leaderboard)
   - 3-step visual walkthrough

2. **📚 Quiz Categories**
   - ☕ **Java** (OOP, JVM architecture, Memory, Collections)
   - 🐍 **Python** (Data structures, List comprehensions, Decorators, GIL)
   - ⚛️ **React.js** (Virtual DOM, Hooks, Lifecycle, Reconciliation)
   - 🌍 **General Knowledge** (Science, Discoveries, Inventions, World Geography)
   - 💻 **Computer Science** (Algorithms, Operating Systems, DBMS, Networks)
   - Metadata chips showing difficulty level, question count, and estimated time.

3. **⏱️ Quiz Page with Real-Time Timer**
   - Displays **one question at a time**
   - Multiple-choice answers with letter badges (A, B, C, D) and check indicator
   - Dynamic countdown timer with visual progress bar and threshold alerts (Green ➔ Amber ➔ Red pulsing)
   - **Question Navigator Palette**: Allows students to jump directly to any question and clearly visualizes answered vs unanswered questions
   - Next / Previous / Clear selection buttons
   - Submit confirmation dialog with unanswered warning
   - Automatic quiz submission when timer hits 0

4. **📊 Comprehensive Result Page**
   - Pass / Fail status banner (Passing mark: 50%+)
   - Circular percentage score badge with correct ratio
   - 4-stat metric grid: Total Questions, Correct, Wrong, and Time Taken
   - **Leaderboard Submission Form**: Students can input their name to persist their score
   - Retake quiz and change category buttons
   - **Detailed Question Review**: Explains each question, user choice, correct answer, and full rational explanation

5. **🏆 Student Leaderboard**
   - Displays Rank badges (🥇 1st, 🥈 2nd, 🥉 3rd), Student Name, Category, Score, Percentage bar, Pass/Fail status, and Date
   - Category filter tabs (`All`, `Java`, `Python`, `React`, `CS`, `GK`)
   - Pre-seeded with realistic sample student records
   - Client-side persistence using `localStorage`

---

## 📂 Project Structure

```text
online-quiz/
├── public/
│   └── index.html                # HTML template with Google Fonts & icons
├── src/
│   ├── components/
│   │   ├── Navbar.js             # Sticky header with brand logo & navigation links
│   │   ├── QuizCard.js           # Multi-choice question card with option buttons
│   │   ├── Timer.js              # Real-time countdown timer with progress bar
│   │   └── Footer.js             # Footer with credits and tech badges
│   ├── pages/
│   │   ├── Home.js               # Landing page with hero & feature grid
│   │   ├── Categories.js         # Category selection cards
│   │   ├── Quiz.js               # Quiz engine with timer, navigation & state
│   │   ├── Result.js             # Score breakdown, review & leaderboard save
│   │   └── Leaderboard.js        # Hall of fame table with category filters
│   ├── data/
│   │   └── questions.js          # Questions & explanations for all 5 categories
│   ├── App.js                    # Main app routing with HashRouter
│   ├── App.css                   # Polished styles & responsive design
│   ├── index.js                  # React 18 DOM root mount
│   └── index.css                 # Global CSS variables & reset
├── package.json                  # Dependencies & start scripts
├── standalone-preview.html       # Zero-install instant browser preview
└── README.md                     # Documentation
```

---

## ⚡ How to Run

### Method 1: Instant Browser Preview (Zero Installation Needed!)
You can run and test the complete React Single Page Application immediately without installing Node or npm:
1. Navigate to:
   ```text
   C:\sabari\online-quiz\
   ```
2. Double-click **`standalone-preview.html`** or right-click ➔ **Open with Google Chrome / Microsoft Edge**.
3. The quiz application will load instantly with all categories, timer, questions, scoring, and leaderboard functioning!

---

### Method 2: Standard React Project (CMD / PowerShell)

If you have Node.js installed or install Node.js:

1. **Open Command Prompt (CMD) or PowerShell**:
   ```cmd
   cd C:\sabari\online-quiz
   ```

2. **Install dependencies**:
   ```cmd
   npm install
   ```

3. **Start the local development server**:
   ```cmd
   npm start
   ```

4. The app will automatically open at:
   ```text
   http://localhost:3000
   ```

---

## 🎓 Viva / Project Defense Questions & Answers

- **Q: Why use a Single Page Application (SPA)?**  
  *A:* SPAs load a single HTML shell and update views dynamically via client-side routing and DOM reconciliation. This prevents full-page reloads, ensuring smooth transitions and uninterrupted state (e.g. keeping timers and quiz progress intact).

- **Q: How does the timer work?**  
  *A:* The timer utilizes React's `useEffect` hook with `setInterval` ticking once per second. A cleanup function (`clearInterval`) is returned to avoid memory leaks when unmounting or completing the quiz.

- **Q: Where is the leaderboard stored?**  
  *A:* In the browser's `localStorage` API as JSON strings, allowing student scores and ranks to persist even across page refreshes.

- **Q: How can this be scaled to a Full-Stack MERN app?**  
  *A:* Replace `localStorage` with a Node.js + Express REST API (`/api/quiz`, `/api/leaderboard`) connected to MongoDB to store user authentication (JWT), dynamic question banks, and multi-user leaderboard entries.
