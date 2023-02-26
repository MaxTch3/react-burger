import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import AppHeader from '../app-header/app-header'
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import { getIngredientsData } from '../../services/actions/ingredients-data.js';
import RegisterPage from '../../pages/register-page/register-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredientsData())
  }, [dispatch]);

  return (
    <Router>
      <div className={styles.app}>
        <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
