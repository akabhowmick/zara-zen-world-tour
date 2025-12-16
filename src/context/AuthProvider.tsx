import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "../api/supabase";
import {
  getCurrentUserSupabase,
  signInUserSupabase,
  signOutUserSupabase,
  signUpUserSupabase,
} from "../api/Auth/auth";

interface User {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize user session on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const { data, error } = await getCurrentUserSupabase();

      if (error || !data?.user) {
        setLoading(false);
        return;
      }

      setUser({
        id: data.user.id,
        email: data.user.email || "",
        user_metadata: data.user.user_metadata,
      });

      setLoading(false);
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(event);
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || "",
          user_metadata: session.user.user_metadata,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } = await signUpUserSupabase(email, password);
    if (error) {
      console.error("Login error:", error);
      return false;
    }
    if (data?.user) {
      setUser({
        id: data.user.id,
        email: data.user.email!,
        user_metadata: data.user.user_metadata,
      });
      return true;
    }
    return false;
  };

  const signup = async (email: string, password: string) => {
    const { data, error } = await signInUserSupabase(email, password);
    if (error) {
      console.error("Signup error:", error);
      return false;
    }
    if (data?.user) {
      setUser({
        id: data.user.id,
        email: data.user.email!,
        user_metadata: data.user.user_metadata,
      });
      return true;
    }
    return false;
  };

  const logout = async () => {
    await signOutUserSupabase();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
