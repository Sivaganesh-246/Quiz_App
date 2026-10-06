import { createCustomQuizRecord, getStoredCustomQuizzes, saveCustomQuizzes } from './customQuiz';

describe('custom quiz helpers', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('creates a valid quiz record with normalized question data', () => {
    const quiz = createCustomQuizRecord({
      name: 'React Basics',
      description: 'A quick custom quiz',
      icon: '⚛️',
      difficulty: 'Beginner',
      timeInMinutes: 3,
      questions: [
        {
          question: 'What is JSX?',
          options: ['HTML', 'JavaScript XML', 'CSS', 'Python'],
          correctAnswer: 1,
          explanation: 'JSX is JavaScript XML.'
        }
      ]
    });

    expect(quiz.id).toMatch(/^custom-/);
    expect(quiz.questions).toHaveLength(1);
    expect(quiz.questions[0].options).toHaveLength(4);
    expect(quiz.totalQuestions).toBe(1);
  });

  it('stores and loads custom quizzes from localStorage', () => {
    const quiz = createCustomQuizRecord({
      name: 'My Custom Quiz',
      description: 'Saved quiz',
      icon: '🧩',
      difficulty: 'Custom',
      timeInMinutes: 5,
      questions: [
        {
          question: 'Which option is correct?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 2,
          explanation: 'C is correct.'
        }
      ]
    });

    saveCustomQuizzes([quiz]);

    expect(getStoredCustomQuizzes()).toHaveLength(1);
    expect(getStoredCustomQuizzes()[0].name).toBe('My Custom Quiz');
  });
});
