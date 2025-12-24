import { Trophy, Target, TrendingUp, Calendar } from "lucide-react";
import { TIER_THRESHOLDS, TIERS, type BookUser } from "../../../types/user-profiles-types";

interface ProfileCardProps {
  profile: BookUser;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case TIERS.MASTER:
        return "from-purple-500 to-pink-500";
      case TIERS.EXPERT:
        return "from-blue-500 to-indigo-500";
      case TIERS.ADVENTURER:
        return "from-green-500 to-teal-500";
      case TIERS.EXPLORER:
        return "from-yellow-500 to-orange-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getTierEmoji = (tier: string) => {
    switch (tier) {
      case TIERS.MASTER:
        return "👑";
      case TIERS.EXPERT:
        return "⭐";
      case TIERS.ADVENTURER:
        return "🎯";
      case TIERS.EXPLORER:
        return "🔍";
      default:
        return "🌱";
    }
  };

  const getNextTier = () => {
    const tiers = Object.entries(TIER_THRESHOLDS).sort((a, b) => a[1] - b[1]);
    const currentIndex = tiers.findIndex(([tier]) => tier === profile.current_tier);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  };

  const nextTier = getNextTier();
  const pointsToNextTier = nextTier ? nextTier[1] - profile.high_score : 0;

  const stats = [
    {
      icon: Trophy,
      label: "High Score",
      value: profile.high_score,
      color: "text-yellow-500",
    },
    {
      icon: Target,
      label: "Games Played",
      value: profile.games_played,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Tier Badge */}
      <div className="relative">
        <div
          className={`bg-gradient-to-r ${getTierColor(
            profile.current_tier
          )} rounded-2xl p-6 text-white shadow-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Current Tier</p>
              <h3 className="text-3xl font-bold mt-1 flex items-center gap-2">
                <span>{getTierEmoji(profile.current_tier)}</span>
                {profile.current_tier}
              </h3>
            </div>
            <TrendingUp className="h-12 w-12 opacity-50" />
          </div>
          {nextTier && pointsToNextTier > 0 && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-sm opacity-90">
                {pointsToNextTier} points to {nextTier[0]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Member Since */}
      {profile.created_at && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="h-4 w-4" />
            <p className="text-sm">
              Member since {new Date(profile.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
