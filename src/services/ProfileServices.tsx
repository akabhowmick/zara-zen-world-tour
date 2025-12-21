import { supabase } from "../api/supabase";
import type { BookUser } from "../types/user-profiles-types";

export class ProfileService {
  /**
   * Fetch the current user's profile
   */
  static async getProfile(): Promise<BookUser | null> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("No authenticated user");
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return null;
      }

      return data as BookUser;
    } catch (error) {
      console.error("Error in getProfile:", error);
      return null;
    }
  }

  /**
   * Create a new profile for a user
   */
  static async createProfile(
    userId: string,
    email: string,
    name: string
  ): Promise<BookUser | null> {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .insert({
          id: userId,
          email,
          name,
          games_played: 0,
          high_score: 0,
          current_tier: "Beginner",
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating profile:", error);
        return null;
      }

      return data as BookUser;
    } catch (error) {
      console.error("Error in createProfile:", error);
      return null;
    }
  }

  /**
   * Update user profile information
   */
  static async updateProfile(updates: UpdateProfileData): Promise<BookUser | null> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("No authenticated user");
      }

      const { data, error } = await supabase
        .from("profiles")
        .update(updates)
        .eq("id", user.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating profile:", error);
        return null;
      }

      return data as BookUser;
    } catch (error) {
      console.error("Error in updateProfile:", error);
      return null;
    }
  }

  /**
   * Update game statistics (games played, high score, tier)
   */
  static async updateGameStats(newScore: number): Promise<GameStats | null> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("No authenticated user");
      }

      // Get current profile
      const { data: profile, error: fetchError } = await supabase
        .from("profiles")
        .select("games_played, high_score")
        .eq("id", user.id)
        .single();

      if (fetchError) {
        console.error("Error fetching profile for stats update:", fetchError);
        return null;
      }

      const gamesPlayed = (profile.games_played || 0) + 1;
      const highScore = Math.max(profile.high_score || 0, newScore);
      const currentTier = calculateTier(highScore);

      // Update stats
      const { data, error: updateError } = await supabase
        .from("profiles")
        .update({
          games_played: gamesPlayed,
          high_score: highScore,
          current_tier: currentTier,
        })
        .eq("id", user.id)
        .select("games_played, high_score, current_tier")
        .single();

      if (updateError) {
        console.error("Error updating game stats:", updateError);
        return null;
      }

      return data as GameStats;
    } catch (error) {
      console.error("Error in updateGameStats:", error);
      return null;
    }
  }

  /**
   * Increment games played without updating score
   */
  static async incrementGamesPlayed(): Promise<boolean> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("No authenticated user");
      }

      const { error } = await supabase.rpc("increment_games_played", {
        user_id: user.id,
      });

      if (error) {
        // If RPC doesn't exist, fall back to manual increment
        const { data: profile } = await supabase
          .from("profiles")
          .select("games_played")
          .eq("id", user.id)
          .single();

        if (profile) {
          await supabase
            .from("profiles")
            .update({ games_played: (profile.games_played || 0) + 1 })
            .eq("id", user.id);
        }
      }

      return true;
    } catch (error) {
      console.error("Error incrementing games played:", error);
      return false;
    }
  }

  /**
   * Delete user profile (careful - this cascades to auth.users)
   */
  static async deleteProfile(): Promise<boolean> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("No authenticated user");
      }

      const { error } = await supabase.from("profiles").delete().eq("id", user.id);

      if (error) {
        console.error("Error deleting profile:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error in deleteProfile:", error);
      return false;
    }
  }
}
