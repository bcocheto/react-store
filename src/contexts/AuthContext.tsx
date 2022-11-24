import { createContext } from 'react';

export type AuthContextType = {
  token: string | null;
  signin: (username: string, password: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
