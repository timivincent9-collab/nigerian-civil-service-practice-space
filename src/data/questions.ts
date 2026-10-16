export type Difficulty = "Easy" | "Medium" | "Hard";

export type Section =
  | "Accounting"
  | "General Knowledge"
  | "Civic Education"
  | "English"
  | "Quantitative Aptitude"
  | "Logical Reasoning"
  | "Computer / ICT"
  | "Public Service"
  | "Current Affairs";

export interface Question {
  id: number;
  section: Section;
  topic: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  active: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    section: "Accounting",
    topic: "Internal Control",
    difficulty: "Medium",
    question:
      "Which of the following is an important purpose of internal control in a public-sector organization?",
    options: [
      "To eliminate every possible business risk",
      "To protect assets and promote accurate financial records",
      "To increase the number of employees",
      "To prevent the preparation of financial statements",
    ],
    correctAnswer: "To protect assets and promote accurate financial records",
    explanation:
      "Internal controls help protect organizational resources, improve the reliability of financial information, and support proper procedures and accountability.",
    active: true,
  },

  {
    id: 2,
    section: "English",
    topic: "Vocabulary",
    difficulty: "Easy",
    question: "Choose the word closest in meaning to 'accurate'.",
    options: [
      "Correct",
      "Difficult",
      "Unusual",
      "Incomplete",
    ],
    correctAnswer: "Correct",
    explanation:
      "Accurate means correct, exact, or free from errors.",
    active: true,
  },

  {
    id: 3,
    section: "Quantitative Aptitude",
    topic: "Percentages",
    difficulty: "Easy",
    question: "What is 20% of 150?",
    options: [
      "20",
      "25",
      "30",
      "35",
    ],
    correctAnswer: "30",
    explanation:
      "20% of 150 is calculated as 20 ÷ 100 × 150, which equals 30.",
    active: true,
  },
];