export interface TestMeta {
  title: string;
  section: number;
  questions: string;
  timeLimit?: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  questionTypes: string[];
  audioFile?: string;
  audioDuration?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  answer: string | string[];
  explanation?: string;
  audioTimestamp?: string;
  image?: string;
  wordLimit?: number;
}

export enum QuestionType {
  // Reading Types
  MULTIPLE_CHOICE = "mcq",
  TRUE_FALSE_NOT_GIVEN = "true-false-not-given",
  YES_NO_NOT_GIVEN = "yes-no-not-given",
  MATCHING_HEADINGS = "matching-headings",
  MATCHING_INFORMATION = "matching-information",
  MATCHING_FEATURES = "matching-features",
  MATCHING_SENTENCE_ENDINGS = "matching-sentence-endings",
  SENTENCE_COMPLETION = "sentence-completion",
  SUMMARY_COMPLETION = "summary-completion",
  SUMMARY_COMPLETION_BANK = "summary-completion-bank",
  NOTE_COMPLETION = "note-completion",
  TABLE_COMPLETION = "table-completion",
  FLOWCHART_COMPLETION = "flowchart-completion",
  DIAGRAM_LABELING = "diagram-labeling",
  SHORT_ANSWER = "short-answer",
  CLASSIFICATION = "classification",

  // Listening Types
  LISTENING_MCQ_SINGLE = "listening-mcq-single",
  LISTENING_MCQ_MULTI = "listening-mcq-multi",
  LISTENING_MATCHING = "listening-matching",
  LISTENING_SENTENCE_COMPLETION = "listening-sentence-completion",
  LISTENING_FORM_COMPLETION = "listening-form-completion",
  LISTENING_NOTE_COMPLETION = "listening-note-completion",
  LISTENING_TABLE_COMPLETION = "listening-table-completion",
  LISTENING_SUMMARY_COMPLETION = "listening-summary-completion",
  LISTENING_SHORT_ANSWER = "listening-short-answer",
  LISTENING_PLAN_MAP_LABELING = "listening-plan-map-labeling",
  LISTENING_FLOWCHART_COMPLETION = "listening-flowchart-completion",
}

export interface TestSection {
  meta: TestMeta;
  content: string;
  questions: Question[];
}

export interface TestProgress {
  answers: { [questionId: string]: string | string[] };
  timeSpent: number;
  completed: boolean;
  startTime: number;
  lastSaved: number;
  score?: number;
  bandScore?: number;
}

export interface ReadingProgress {
  [testId: string]: {
    [sectionId: string]: TestProgress;
  };
}

export interface ListeningProgress {
  [testId: string]: {
    [sectionId: string]: TestProgress & {
      audioProgress: number;
      playCount: number;
      rewindCount: number;
    };
  };
}

export interface ScoreBreakdown {
  correct: number;
  incorrect: number;
  total: number;
  percentage: number;
  bandScore: number;
  timeAnalysis: {
    totalTime: number;
    averageTimePerQuestion: number;
  };
}
