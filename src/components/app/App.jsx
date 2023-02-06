import React from 'react';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import styles from './App.module.css';
import { useDispatch } from 'react-redux';
import { getIngredientsData } from '../../services/actions/ingredientsData.js';

function App() {
  //const [dataModal, setDataModal] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredientsData())
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main} >
        <BurgerIngredients
          // setDataModal={setDataModal}
          // dataModal={dataModal}
        />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
