import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import AppHeader from '../app-header/app-header'
import HomePage from '../../pages/home-page';
import { getIngredientsData } from '../../services/actions/ingredients-data.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        </Routes>
      </div>
    </Router >
  );
}

export default App;
