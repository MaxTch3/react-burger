import React from 'react';
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

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredientsData())
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/profile/*' element={
          <ProtectedRouteElement element={<ProfilePage />} />
        } />
        <Route path='*' element={<NotFound404 />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
