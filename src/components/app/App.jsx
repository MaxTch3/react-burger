import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import AppHeader from '../app-header/app-header'
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import { getIngredientsData } from '../../services/actions/ingredients-data.js';
import RegisterPage from '../../pages/register-page/register-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import ProtectedRouteElement from '../protected-route-element/protected-route-element';
import getUserAction from '../../services/actions/get-user';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsData())
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      dispatch(getUserAction());
    }
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ingredients/:id' element={<IngredientPage />} exact={true} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/profile/*' element={
          <ProtectedRouteElement element={<ProfilePage />} />
        } />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
