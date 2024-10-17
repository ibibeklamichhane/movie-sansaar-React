import { lazy,Suspense } from 'react';
import LoginPage from './Page/LoginPage';
import { Routes,Route } from 'react-router-dom';
const SignupPage = lazy(() => import('./Page/SignupPage'));
import HomePage from './Page/HomePage';
import LayOut from './Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayOut/>}>
      <Route index element={<HomePage />}/>
      </Route>
     <Route path='/log-in' element={ <LoginPage />}/>
     <Route path='/sign-up' element={ <Suspense fallback="Loading..."><SignupPage /></Suspense>}/>
    </Routes>
  )
}
export default App