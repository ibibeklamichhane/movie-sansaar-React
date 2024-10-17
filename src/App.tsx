import { lazy,Suspense } from 'react';
import LoginPage from './Page/LoginPage';
import { Routes,Route } from 'react-router-dom';
const SignupPage = lazy(() => import('./Page/SignupPage'));
import HomePage from './Page/HomePage';
import LayOut from './Layout/Layout';
import ContactPage from './Page/ContactPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LayOut/>}>
      <Route index element={<HomePage />}/>
     
      <Route path='/contact' element={<ContactPage />}/>

     <Route path='/log-in' element={ <LoginPage />}/>
     <Route path='/sign-up' element={ <Suspense fallback="Loading..."><SignupPage /></Suspense>}/>
     </Route>
    </Routes>
  )
}
export default App