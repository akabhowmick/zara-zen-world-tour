import React, { createContext, useContext, type ReactNode, useEffect } from "react";
import { supabase } from "../api/supabase";
import type { UserSignIn } from "../types/user";

interface AuthContextType {
  login: (email: string, password: string) => Promise<boolean>;
  signup: (newUser: UserSignIn, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user && !error) {
        console.log("fetched saved user");
      }
    };

    fetchUser();
  }, []);

  // Login Function using Supabase
  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.error(error);
    if (error) return false;

    const userMetadata = data.user?.user_metadata;
    console.log(userMetadata);

    return true;
  };

  // 🔹 Signup Function using Supabase
  const signup = async (newUser: UserSignIn, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: newUser.email,
      password,
    });
    console.log(data);
    if (error) return false;
    return true;
  };

  // Logout Function
  const logout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("authSchool");
  };

  return <AuthContext.Provider value={{ login, signup, logout }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
