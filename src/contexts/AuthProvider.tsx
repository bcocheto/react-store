import { useEffect, useState } from 'react';
import { useAuth } from '~/hooks/useAuth';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<string | null>(null);
  const api = useAuth();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if (storageData) {
        setToken(storageData);
      }
    };
    validateToken();
  }, []);

  const signin = async (username: string, password: string) => {
    const data = await api.signin(username, password);
    if (data.jwtToken) {
      setToken(data.jwtToken);
      setJwtToken(data.jwtToken);
      return true;
    }
    return false;
  };

  const signout = async () => {
    try {
      await api.logout();
      setToken(null);
      setJwtToken('');
      return false;
    } catch (error) {
      console.log('Erro ao realizar logout: ', error);
    }
  };

  const setJwtToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  return <AuthContext.Provider value={{ token, signin, signout }}>{children}</AuthContext.Provider>;
};
