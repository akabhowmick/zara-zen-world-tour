import { Trophy, Target, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { gameTrackerService } from "../../services/gameTrackerService";
import type { UserGameStats } from "../../types/game-tracker-types";

export const UserStatsDisplay = ({ compact = false }: { compact?: boolean }) => {
  const [stats, setStats] = useState<UserGameStats | null>(null);

  useEffect(() => {
    const loadStats = () => {
      const userStats = gameTrackerService.getUserStats();
      setStats(userStats);
    };

    loadStats();

    // Listen for custom event when stats are updated
    window.addEventListener("gameStatsUpdated", loadStats);
    return () => window.removeEventListener("gameStatsUpdated", loadStats);
  }, []);

  if (!stats) return null;

  const levelInfo = gameTrackerService.getCurrentLevel();
  const levelProgress = gameTrackerService.getLevelProgress();

  if (compact) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1">
          <Trophy className="h-4 w-4 text-yellow-500" />
          <span className="font-medium">{stats.totalPoints}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-blue-500" />
          <span className="text-xs">Lv {stats.level}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">Your Progress</h3>
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-500" />
          <span className="text-2xl font-bold text-gray-900">{stats.totalPoints}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Level {stats.level} - {levelInfo.title}
          </span>
          <span className="text-xs text-gray-500">{Math.round(levelProgress.progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${levelProgress.progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>{levelProgress.current} points</span>
          <span>{levelProgress.next} points to next level</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Target className="h-4 w-4 text-blue-600" />
            <span className="text-xs text-gray-600">Quizzes</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{stats.quizzesCompleted}</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Star className="h-4 w-4 text-purple-600" />
            <span className="text-xs text-gray-600">Avg Points</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">
            {stats.quizzesCompleted > 0
              ? (stats.totalPoints / stats.quizzesCompleted).toFixed(1)
              : "0.0"}
          </p>
        </div>
      </div>
    </div>
  );
};
