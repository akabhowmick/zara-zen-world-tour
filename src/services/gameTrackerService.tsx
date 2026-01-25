import { POINT_THRESHOLDS, type UserGameStats, type QuizAttempt, type LevelInfo, LEVELS } from "../types/game-tracker-types";

/**
 * Calculate points earned based on percent correct
 */
export function calculatePoints(percentCorrect: number): number {
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
export function getLevelProgress(totalPoints: number): { progress: number; current: number; next: number } {
  const currentLevel = calculateLevel(totalPoints);
  const currentLevelIndex = LEVELS.findIndex((l) => l.level === currentLevel.level);

  if (currentLevelIndex === LEVELS.length - 1) {
    return { progress: 100, current: totalPoints, next: totalPoints };
  }

  const nextLevel = LEVELS[currentLevelIndex + 1];
  const pointsInCurrentLevel = totalPoints - currentLevel.pointsRequired;
  const pointsNeededForNextLevel = nextLevel.pointsRequired - currentLevel.pointsRequired;
  const progress = Math.min(100, (pointsInCurrentLevel / pointsNeededForNextLevel) * 100);

  return {
    progress,
    current: totalPoints,
    next: nextLevel.pointsRequired,
  };
}

/**
 * Game Tracker Service - Singleton for managing game statistics
 */
export class GameTrackerService {
  private static instance: GameTrackerService;
  private stats: UserGameStats;
  private readonly STORAGE_KEY = "zara_zen_game_stats";

  private constructor() {
    this.stats = this.loadStats();
  }

  static getInstance(): GameTrackerService {
    if (!GameTrackerService.instance) {
      GameTrackerService.instance = new GameTrackerService();
    }
    return GameTrackerService.instance;
  }

  /**
   * Load stats from localStorage or return empty stats
   */
  private loadStats(): UserGameStats {
    if (typeof window === "undefined") {
      return this.getEmptyStats();
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("Error loading stats from localStorage:", error);
    }

    return this.getEmptyStats();
  }

  /**
   * Save stats to localStorage
   */
  private saveStats(): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stats));
      // Emit custom event to notify listeners
      window.dispatchEvent(new CustomEvent("gameStatsUpdated"));
    } catch (error) {
      console.error("Error saving stats to localStorage:", error);
    }
  }

  /**
   * Get current stats
   */
  getUserStats(): UserGameStats {
    return this.stats;
  }

  /**
   * Get current level info
   */
  getCurrentLevel(): LevelInfo {
    return calculateLevel(this.stats.totalPoints);
  }

  /**
   * Get level progress
   */
  getLevelProgress(): { progress: number; current: number; next: number } {
    return getLevelProgress(this.stats.totalPoints);
  }

  /**
   * Record a quiz attempt
   */
  recordQuizAttempt(attempt: QuizAttempt): void {
    const quizId = attempt.quizId;
    const existingBest = this.stats.bestScores[quizId];

    let pointsDelta = 0;

    if (!existingBest) {
      this.stats.bestScores[quizId] = {
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
      const improved = attempt.pointsEarned > existingBest.bestPointsEarned;
      this.stats.bestScores[quizId] = {
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

    this.stats.recentAttempts = [attempt, ...this.stats.recentAttempts].slice(0, 10);
    this.stats.totalPoints += pointsDelta;
    this.stats.level = calculateLevel(this.stats.totalPoints).level;
    this.stats.quizzesCompleted = Object.keys(this.stats.bestScores).length;
    this.stats.totalAttempts += 1;

    this.saveStats();
  }

  /**
   * Get empty initial stats
   */
  private getEmptyStats(): UserGameStats {
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
   * Reset all stats
   */
  resetStats(): void {
    this.stats = this.getEmptyStats();
    this.saveStats();
  }

  /**
   * Clear localStorage
   */
  clearStorage(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.STORAGE_KEY);
    }
    this.stats = this.getEmptyStats();
  }
}

// Export singleton instance
export const gameTrackerService = GameTrackerService.getInstance();