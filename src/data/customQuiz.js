const STORAGE_KEY = 'custom_quizzes';

export const getStoredCustomQuizzes = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

export const saveCustomQuizzes = (quizzes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(quizzes));
};

export const getCustomQuizCategories = () => {
  return getStoredCustomQuizzes().map((quiz) => ({
    id: quiz.id,
    name: quiz.name,
    icon: quiz.icon || '🧩',
    color: quiz.color || '#8b5cf6',
    description: quiz.description || 'Custom-created quiz by a creator.',
    difficulty: quiz.difficulty || 'Custom',
    totalQuestions: quiz.totalQuestions || quiz.questions?.length || 0,
    timeInMinutes: quiz.timeInMinutes || 5
  }));
};

export const createCustomQuizRecord = ({
  name,
  description,
  icon,
  difficulty,
  timeInMinutes,
  questions
}) => {
  const cleanedQuestions = (Array.isArray(questions) ? questions : [])
    .map((entry, index) => {
      const questionText = String(entry?.question || '').trim();
      const options = (Array.isArray(entry?.options) ? entry.options : [])
        .map((option) => String(option || '').trim())
        .filter(Boolean)
        .slice(0, 4);

      if (!questionText || options.length < 2) {
        return null;
      }

      const correctAnswer = Number.isInteger(Number(entry?.correctAnswer))
        ? Number(entry.correctAnswer)
        : 0;
      const safeCorrectAnswer =
        correctAnswer >= 0 && correctAnswer < options.length ? correctAnswer : 0;

      return {
        id: index + 1,
        question: questionText,
        options,
        correctAnswer: safeCorrectAnswer,
        explanation:
          String(entry?.explanation || 'Custom quiz question created by the app creator.')
            .trim() || 'Custom quiz question created by the app creator.'
      };
    })
    .filter(Boolean);

  return {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: String(name || '').trim() || 'New Custom Quiz',
    description: String(description || '').trim() || 'Custom quiz created in the app.',
    icon: String(icon || '').trim() || '🧩',
    difficulty: String(difficulty || '').trim() || 'Custom',
    timeInMinutes: Number(timeInMinutes) > 0 ? Number(timeInMinutes) : 5,
    color: '#8b5cf6',
    totalQuestions: cleanedQuestions.length,
    questions: cleanedQuestions
  };
};
