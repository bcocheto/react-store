import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './contexts/RequireAuth';
import { HomePage } from './pages/Home';
import { SignInPage } from './pages/SignIn';
import { SignUpPage } from './pages/SignUp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
