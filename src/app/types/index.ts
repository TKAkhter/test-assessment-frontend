import { JwtPayload } from "jwt-decode";

export interface Episode {
  title: string;
  watched: boolean;
  _id: string;
  season?: number;
  episode?: number;
  imdburl?: string;
  plot?: string;
  poster?: string;
}

export interface Show {
  _id: string;
  title: string;
  episodes: Episode[];
  userId: string;
  __v: number;
  year?: string;
  genre?: string;
  plot?: string;
  poster?: string;
  imdburl?: string;
  totalSeasons?: number;
}
export interface AuthState {
  token: string | null;
  userId: string | null;
  username: string | null;
  shows: Show[] | [];
}
export interface StoreRootState {
  user: AuthState;
}

export interface AuthMiddlewareProps {
  children: React.ReactNode;
}

export interface JwtUserPayload extends JwtPayload {
  username: string;
  userId: string;
}
