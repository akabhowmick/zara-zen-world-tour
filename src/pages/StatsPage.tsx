import { Trophy, Award, TrendingUp, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { gameTrackerService } from "../../services/gameTrackerService";
import { LEVELS } from "../../types/game-tracker-types";
import type { QuizScore } from "../../types/game-tracker-types";

export const StatsPage = () => {
  const [stats, setStats] = useState(gameTrackerService.getUserStats());
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const loadStats = () => setStats(gameTrackerService.getUserStats());
    window.addEventListener("gameStatsUpdated", loadStats);
    return () => window.removeEventListener("gameStatsUpdated", loadStats);
  }, []);

  const handleReset = () => {
    gameTrackerService.resetStats();
    setStats(gameTrackerService.getUserStats());
    setShowResetConfirm(false);
  };

  const levelInfo = gameTrackerService.getCurrentLevel();
  const levelProgress = gameTrackerService.getLevelProgress();

  // Sort quizzes by points (highest first)
  const sortedQuizzes = Object.values(stats.quizScores).sort((a, b) => b.points - a.points);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Your Game Statistics</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="h-8 w-8" />
            <span className="text-3xl font-bold">{stats.totalPoints}</span>
          </div>
          <p className="text-yellow-100 font-medium">Total Points</p>
        </div>

        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Award className="h-8 w-8" />
            <span className="text-3xl font-bold">{stats.level}</span>
          </div>
          <p className="text-blue-100 font-medium">Current Level</p>
          <p className="text-xs text-blue-50 mt-1">{levelInfo.title}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="h-8 w-8" />
            <span className="text-3xl font-bold">{stats.quizzesCompleted}</span>
          </div>
          <p className="text-purple-100 font-medium">Quizzes Completed</p>
        </div>
      </div>

      {/* Level Progress */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Level Progress</h2>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-medium text-gray-700">
              Level {stats.level} - {levelInfo.title}
            </span>
            <span className="text-sm text-gray-500">{Math.round(levelProgress.progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${levelProgress.progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{levelProgress.current} points</span>
            {stats.level < 8 && <span>{levelProgress.next} to next level</span>}
          </div>
        </div>

        {/* All Levels Overview */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3 text-gray-800">All Levels</h3>
          <div className="space-y-2">
            {LEVELS.map((level) => (
              <div
                key={level.level}
                className={`flex items-center justify-between p-3 rounded ${
                  level.level === stats.level
                    ? "bg-blue-50 border-2 border-blue-500"
                    : level.level < stats.level
                    ? "bg-green-50"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-bold text-lg ${
                      level.level === stats.level
                        ? "text-blue-600"
                        : level.level < stats.level
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    Lv {level.level}
                  </span>
                  <span className="font-medium text-gray-700">{level.title}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {level.minPoints} - {level.maxPoints === Infinity ? "∞" : level.maxPoints} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Scores Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Scores Breakdown</h2>
        {sortedQuizzes.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No quizzes completed yet. Start playing to track your progress!
          </p>
        ) : (
          <div className="space-y-3">
            {sortedQuizzes.map((quiz: QuizScore) => (
              <div
                key={`${quiz.countryId}-${quiz.quizSetId}`}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 capitalize">
                      {quiz.countryId}
                      {quiz.quizSetId > 1 && (
                        <span className="text-sm text-gray-500 ml-2">(Set {quiz.quizSetId})</span>
                      )}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span>
                        Score: {quiz.score}/{quiz.totalQuestions}
                      </span>
                      <span>Accuracy: {quiz.percentCorrect.toFixed(1)}%</span>
                      <span>Attempts: {quiz.attempts}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-600 font-bold text-xl">
                      <Trophy className="h-5 w-5" />
                      <span>{quiz.points}</span>
                    </div>
                    <span className="text-xs text-gray-500">points</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        quiz.percentCorrect >= 90
                          ? "bg-green-500"
                          : quiz.percentCorrect >= 70
                          ? "bg-blue-500"
                          : "bg-orange-500"
                      }`}
                      style={{ width: `${quiz.percentCorrect}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Points Guide */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">How Points Work</h2>
        <p className="text-gray-700 mb-4">
          You earn points based on your quiz performance. The better you do, the more points you
          earn!
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-green-50 rounded">
            <span className="font-medium text-gray-700">100% Correct</span>
            <span className="text-green-600 font-bold">5 points</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
            <span className="font-medium text-gray-700">90%+ Correct</span>
            <span className="text-blue-600 font-bold">4 points</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
            <span className="font-medium text-gray-700">80%+ Correct</span>
            <span className="text-purple-600 font-bold">3 points</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
            <span className="font-medium text-gray-700">65%+ Correct</span>
            <span className="text-yellow-600 font-bold">2 points</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
            <span className="font-medium text-gray-700">50%+ Correct</span>
            <span className="text-orange-600 font-bold">1 point</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          💡 <strong>Tip:</strong> You can retake quizzes to improve your score! Only your best
          score counts toward your total points.
        </p>
      </div>

      {/* Reset Button */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Danger Zone</h2>
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Reset All Stats
          </button>
        ) : (
          <div className="space-y-3">
            <p className="text-red-600 font-medium">
              Are you sure? This will delete all your progress permanently!
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium"
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
