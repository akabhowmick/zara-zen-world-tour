export interface BookUser {
  id: string;
  name: string;
  phone_number: string | null;
  email: string;
  games_played: number;
  high_score: number;
  current_tier: string;
  created_at?: string;
  updated_at?: string;
}

export interface UpdateProfileData {
  name?: string;
  phone_number?: string | null;
}

export interface GameStats {
  games_played: number;
  high_score: number;
  current_tier: string;
}

export const TIERS = {
  BEGINNER: "Beginner",
  EXPLORER: "Explorer",
  ADVENTURER: "Adventurer",
  EXPERT: "Expert",
  MASTER: "Master",
} as const;

export type Tier = (typeof TIERS)[keyof typeof TIERS];

// Tier thresholds based on high scores
export const TIER_THRESHOLDS = {
  [TIERS.BEGINNER]: 0,
  [TIERS.EXPLORER]: 50,
  [TIERS.ADVENTURER]: 150,
  [TIERS.EXPERT]: 300,
  [TIERS.MASTER]: 500,
};

// Calculate tier based on high score
export const calculateTier = (highScore: number): Tier => {
  if (highScore >= TIER_THRESHOLDS[TIERS.MASTER]) return TIERS.MASTER;
  if (highScore >= TIER_THRESHOLDS[TIERS.EXPERT]) return TIERS.EXPERT;
  if (highScore >= TIER_THRESHOLDS[TIERS.ADVENTURER]) return TIERS.ADVENTURER;
  if (highScore >= TIER_THRESHOLDS[TIERS.EXPLORER]) return TIERS.EXPLORER;
  return TIERS.BEGINNER;
};
