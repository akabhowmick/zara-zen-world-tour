import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit2, LogOut, Mail, Phone, Loader2 } from "lucide-react";
import { useAuth } from "../../../context/AuthProvider";
import { useProfile } from "../../../hooks/useProfile";
import { Button } from "../Button";
import { Alert } from "../Alert";
import type { UpdateProfileData } from "../../../types/user-profiles-types";
import { ProfileCard } from "./ProfileCard";
import { ProfileEditForm } from "./ProfileEditForm";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { profile, loading, error, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setLogoutLoading(false);
    }
  };

  const handleSaveProfile = async (updates: UpdateProfileData): Promise<boolean> => {
    const success = await updateProfile(updates);
    return success;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Alert type="error" message={error || "Failed to load profile. Please try again."} />
          <div className="mt-4 text-center">
            <Button onClick={() => navigate("/")} variant="outline">
              Go Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                <p className="text-gray-500 text-sm mt-1">Zara & Zen Explorer</p>
              </div>
            </div>
            <div className="flex gap-2">
              {!isEditing && (
                <>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleLogout}
                    loading={logoutLoading}
                    disabled={logoutLoading}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-sm">{profile.email}</span>
            </div>
            {profile.phone_number && (
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-sm">{profile.phone_number}</span>
              </div>
            )}
            {!profile.phone_number && !isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
              >
                <Phone className="h-4 w-4" />
                Add phone number
              </button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Stats */}
          <div>
            <ProfileCard profile={profile} />
          </div>

          {/* Right Column - Edit Form or Additional Info */}
          <div>
            {isEditing ? (
              <ProfileEditForm
                profile={profile}
                onSave={handleSaveProfile}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <div className="space-y-6">
                {/* Achievement Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🏆 Achievements</h3>
                  <div className="space-y-3">
                    {profile.games_played >= 1 && (
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl">🎮</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">First Steps</p>
                          <p className="text-xs text-gray-600">Played your first game</p>
                        </div>
                      </div>
                    )}
                    {profile.games_played >= 10 && (
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl">🌟</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">Dedicated Learner</p>
                          <p className="text-xs text-gray-600">Played 10 games</p>
                        </div>
                      </div>
                    )}
                    {profile.high_score >= 100 && (
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl">🔥</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">Century Club</p>
                          <p className="text-xs text-gray-600">Scored 100+ points</p>
                        </div>
                      </div>
                    )}
                    {profile.games_played === 0 && (
                      <p className="text-sm text-gray-500 text-center py-4">
                        Play your first game to unlock achievements!
                      </p>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🚀 Quick Actions</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => navigate("/trivia")}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <p className="font-semibold text-sm text-gray-900">Play Trivia</p>
                      <p className="text-xs text-gray-600">Test your knowledge and earn points</p>
                    </button>
                    <button
                      onClick={() => navigate("/chapters")}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <p className="font-semibold text-sm text-gray-900">Read Chapters</p>
                      <p className="text-xs text-gray-600">Continue Zara & Zen's adventure</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
