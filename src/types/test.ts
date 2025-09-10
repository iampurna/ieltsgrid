import { ScoreBreakdown } from ".";

export interface TestConfig {
  id: string;
  title: string;
  type: "reading" | "listening" | "writing" | "speaking";
  sections: number;
  totalQuestions: number;
  timeLimit: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
}

export interface UserAnswer {
  questionId: string;
  answer: string | string[];
  timeSpent: number;
  confident: boolean;
}

export interface TestResult {
  testId: string;
  sectionId: string;
  answers: UserAnswer[];
  score: ScoreBreakdown;
  completedAt: Date;
}
