import { POINT_THRESHOLDS, type UserGameStats, type QuizAttempt, type LevelInfo, LEVELS, } from "../types/game-tracker-types";

/**
 * Calculate points earned based on percent correct
 * Uses JetPunk-style system: whichever is higher between percentile and percent correct
 * For simplicity, we'll use percent correct as the primary metric
 */
export function calculatePoints(percentCorrect: number): number {
  // Find the highest point tier the user qualifies for
  for (const threshold of POINT_THRESHOLDS) {
    if (percentCorrect >= threshold.percentCorrect) {
      return threshold.points;
    }
  }
  return 0;
}

/**
 * Calculate level based on total points
 */
export function calculateLevel(totalPoints: number): LevelInfo {
  // Find the highest level the user has reached
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (totalPoints >= LEVELS[i].pointsRequired) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

/**
 * Get progress to next level (0-100)
 */
export function getLevelProgress(totalPoints: number): number {
  const currentLevel = calculateLevel(totalPoints);
  const currentLevelIndex = LEVELS.findIndex((l) => l.level === currentLevel.level);

  // If at max level, return 100
  if (currentLevelIndex === LEVELS.length - 1) {
    return 100;
  }

  const nextLevel = LEVELS[currentLevelIndex + 1];
  const pointsInCurrentLevel = totalPoints - currentLevel.pointsRequired;
  const pointsNeededForNextLevel = nextLevel.pointsRequired - currentLevel.pointsRequired;

  return Math.min(100, (pointsInCurrentLevel / pointsNeededForNextLevel) * 100);
}

/**
 * Process a new quiz attempt and update best scores
 */
export function processQuizAttempt(
  currentStats: UserGameStats,
  attempt: QuizAttempt
): UserGameStats {
  const quizId = attempt.quizId;
  const existingBest = currentStats.bestScores[quizId];

  const newBestScores = { ...currentStats.bestScores };
  let pointsDelta = 0; // Change in total points

  if (!existingBest) {
    // First time playing this quiz
    newBestScores[quizId] = {
      quizId: attempt.quizId,
      country: attempt.country,
      bestScore: attempt.score,
      bestPercentCorrect: attempt.percentCorrect,
      bestPointsEarned: attempt.pointsEarned,
      timesPlayed: 1,
      lastPlayed: attempt.timestamp,
      firstPlayed: attempt.timestamp,
    };
    pointsDelta = attempt.pointsEarned;
  } else {
    // Update existing quiz record
    const improved = attempt.pointsEarned > existingBest.bestPointsEarned;

    newBestScores[quizId] = {
      ...existingBest,
      timesPlayed: existingBest.timesPlayed + 1,
      lastPlayed: attempt.timestamp,
      ...(improved && {
        bestScore: attempt.score,
        bestPercentCorrect: attempt.percentCorrect,
        bestPointsEarned: attempt.pointsEarned,
      }),
    };

    if (improved) {
      pointsDelta = attempt.pointsEarned - existingBest.bestPointsEarned;
    }
  }

  // Update recent attempts (keep last 10)
  const newRecentAttempts = [attempt, ...currentStats.recentAttempts].slice(0, 10);

  // Calculate new totals
  const newTotalPoints = currentStats.totalPoints + pointsDelta;
  const newLevel = calculateLevel(newTotalPoints).level;

  // Check for new achievements
  const newAchievements = checkForAchievements(
    {
      ...currentStats,
      bestScores: newBestScores,
      totalPoints: newTotalPoints,
      totalAttempts: currentStats.totalAttempts + 1,
    },
    attempt
  );

  return {
    ...currentStats,
    totalPoints: newTotalPoints,
    level: newLevel,
    quizzesCompleted: Object.keys(newBestScores).length,
    totalAttempts: currentStats.totalAttempts + 1,
    bestScores: newBestScores,
    recentAttempts: newRecentAttempts,
    achievements: [...currentStats.achievements, ...newAchievements],
  };
}

/**
 * Check for newly unlocked achievements
 */
function checkForAchievements(
  stats: UserGameStats,
  lastAttempt: QuizAttempt
): UserGameStats["achievements"] {
  const newAchievements = [];
  const existingIds = new Set(stats.achievements.map((a) => a.id));

  // Perfect Score Achievement
  if (!existingIds.has("perfect-score") && lastAttempt.percentCorrect === 100) {
    newAchievements.push({
      id: "perfect-score",
      name: "Perfect Pup!",
      description: "Score 100% on any quiz",
      icon: "🏆",
      unlockedAt: new Date(),
    });
  }

  // First Quiz Achievement
  if (!existingIds.has("first-quiz") && stats.quizzesCompleted === 1) {
    newAchievements.push({
      id: "first-quiz",
      name: "Getting Started",
      description: "Complete your first quiz",
      icon: "🎯",
      unlockedAt: new Date(),
    });
  }

  // Explorer Achievement (5 different quizzes)
  if (!existingIds.has("explorer") && stats.quizzesCompleted >= 5) {
    newAchievements.push({
      id: "explorer",
      name: "World Explorer",
      description: "Complete 5 different country quizzes",
      icon: "🌍",
      unlockedAt: new Date(),
    });
  }

  // Dedicated Achievement (10 attempts)
  if (!existingIds.has("dedicated") && stats.totalAttempts >= 10) {
    newAchievements.push({
      id: "dedicated",
      name: "Dedicated Learner",
      description: "Play 10 quiz attempts",
      icon: "📚",
      unlockedAt: new Date(),
    });
  }

  // All Countries Achievement
  if (!existingIds.has("all-countries") && stats.quizzesCompleted >= 12) {
    newAchievements.push({
      id: "all-countries",
      name: "Globe Master",
      description: "Complete all country quizzes",
      icon: "🌟",
      unlockedAt: new Date(),
    });
  }

  return newAchievements;
}

/**
 * Get empty initial stats
 */
export function getEmptyStats(): UserGameStats {
  return {
    totalPoints: 0,
    level: 1,
    quizzesCompleted: 0,
    totalAttempts: 0,
    bestScores: {},
    recentAttempts: [],
    achievements: [],
  };
}

/**
 * Format quiz ID from country name
 */
export function formatQuizId(country: string): string {
  return country.toLowerCase().replace(/\s+/g, "-");
}