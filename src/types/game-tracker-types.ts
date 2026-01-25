// Game Statistics Types

export interface QuizAttempt {
  quizId: string; // Format: "country-name" (e.g., "japan", "south-korea")
  country: string;
  timestamp: Date;
  score: number; // Number of correct answers
  totalQuestions: number;
  percentCorrect: number; // 0-100
  pointsEarned: number; // 0-5 based on performance
  timeSpent?: number; // Optional: time in seconds
}

export type QuizScore = QuizBestScore & {
  score?: number;
  totalQuestions?: number;
  percentCorrect?: number;
  points?: number;
  attempts?: number;
};

export interface QuizBestScore {
  quizId: string;
  country: string;
  bestScore: number;
  bestPercentCorrect: number;
  bestPointsEarned: number;
  timesPlayed: number;
  lastPlayed: Date;
  firstPlayed: Date;
}

export interface UserGameStats {
  userId?: string; // Optional for logged-in users
  totalPoints: number;
  level: number;
  quizzesCompleted: number; // Number of unique quizzes played
  totalAttempts: number; // Total number of quiz attempts
  bestScores: Record<string, QuizBestScore>; // Key is quizId
  recentAttempts: QuizAttempt[]; // Last 10 attempts
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  progress?: number; // 0-100 for progress-based achievements
}

export interface LevelInfo {
  level: number;
  name: string;
  pointsRequired: number;
  nextLevelPoints?: number;
  color: string;
}

// Constants for point calculation (based on JetPunk system)
export const POINT_THRESHOLDS = [
  { percentile: 95, percentCorrect: 100, points: 5 },
  { percentile: 75, percentCorrect: 90, points: 4 },
  { percentile: 60, percentCorrect: 80, points: 3 },
  { percentile: 50, percentCorrect: 65, points: 2 },
  { percentile: 25, percentCorrect: 50, points: 1 },
  { percentile: 0, percentCorrect: 0, points: 0 },
] as const;

export const LEVELS: LevelInfo[] = [
  { level: 1, name: "Puppy Explorer", pointsRequired: 0, nextLevelPoints: 10, color: "#93c5fd" },
  { level: 2, name: "Curious Pup", pointsRequired: 10, nextLevelPoints: 25, color: "#60a5fa" },
  { level: 3, name: "World Wanderer", pointsRequired: 25, nextLevelPoints: 50, color: "#3b82f6" },
  { level: 4, name: "Globe Trotter", pointsRequired: 50, nextLevelPoints: 100, color: "#2563eb" },
  {
    level: 5,
    name: "Geography Genius",
    pointsRequired: 100,
    nextLevelPoints: 150,
    color: "#1d4ed8",
  },
  {
    level: 6,
    name: "Master Navigator",
    pointsRequired: 150,
    nextLevelPoints: 250,
    color: "#1e40af",
  },
  { level: 7, name: "World Expert", pointsRequired: 250, nextLevelPoints: 400, color: "#7c3aed" },
  { level: 8, name: "Global Legend", pointsRequired: 400, color: "#6d28d9" },
];
