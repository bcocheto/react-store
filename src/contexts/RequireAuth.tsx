import { useContext } from 'react';
import { SignInPage } from '~/pages/SignIn';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.token) {
    return <SignInPage />;
  }

  return children;
};
