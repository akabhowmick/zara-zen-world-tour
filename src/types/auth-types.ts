import type { User, Session, AuthError } from "@supabase/supabase-js";

export interface AuthResponse {
  data: {
    user: User;
    session: Session | null;
  } | null;
  error: AuthError | null;
}

export interface SignAuthResponse {
  data: {
    user: User;
    session: Session;
  } | null;
  error: AuthError | null;
}