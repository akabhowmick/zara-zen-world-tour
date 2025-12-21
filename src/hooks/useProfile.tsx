import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthProvider";
import type { BookUser } from "../types/user-profiles-types";

export const useProfile = () => {
  const { user, isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<BookUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch profile on mount and when auth state changes
  const fetchProfile = useCallback(async () => {
    if (!isAuthenticated || !user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await ProfileService.getProfile();

      if (data) {
        setProfile(data);
      } else {
        setError("Failed to load profile");
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError("An error occurred while loading your profile");
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // Update profile
  const updateProfile = async (updates: UpdateProfileData): Promise<boolean> => {
    try {
      setError(null);
      const updated = await ProfileService.updateProfile(updates);

      if (updated) {
        setProfile(updated);
        return true;
      } else {
        setError("Failed to update profile");
        return false;
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("An error occurred while updating your profile");
      return false;
    }
  };

  // Update game stats
  const updateGameStats = async (newScore: number): Promise<boolean> => {
    try {
      setError(null);
      const stats = await ProfileService.updateGameStats(newScore);

      if (stats) {
        // Update profile with new stats
        setProfile((prev) => (prev ? { ...prev, ...stats } : null));
        return true;
      } else {
        setError("Failed to update game statistics");
        return false;
      }
    } catch (err) {
      console.error("Error updating game stats:", err);
      setError("An error occurred while updating game statistics");
      return false;
    }
  };

  // Increment games played
  const incrementGamesPlayed = async (): Promise<boolean> => {
    try {
      const success = await ProfileService.incrementGamesPlayed();
      if (success) {
        setProfile((prev) => (prev ? { ...prev, games_played: prev.games_played + 1 } : null));
        return true;
      }
      return false;
    } catch (err) {
      console.error("Error incrementing games:", err);
      return false;
    }
  };

  // Refresh profile data
  const refreshProfile = () => {
    fetchProfile();
  };

  return {
    profile,
    loading,
    error,
    updateProfile,
    updateGameStats,
    incrementGamesPlayed,
    refreshProfile,
  };
};
