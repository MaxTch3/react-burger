import React from 'react';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import styles from './App.module.css';
import { getIngredients } from '../../utils/burgers-api';
import { IngredientsContext } from '../../services/ingredientsContext';

function App() {
  const [state, setState] = React.useState({
    ingredientsData: [],
    loading: true
  });
  const [dataModal, setDataModal] = React.useState('');

  React.useEffect(() => {
    setState({ ingredientsData: [], loading: true });
    getIngredients()
      .then((data) => {
        setState({ ingredientsData: data.data, loading: false })
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className={styles.app}>
      <IngredientsContext.Provider value={state.ingredientsData}>
        <AppHeader />
        <main className={styles.main} >
          <BurgerIngredients
            setDataModal={setDataModal}
            dataModal={dataModal}
          />
          <BurgerConstructor />
        </main>
      </IngredientsContext.Provider>
    </div>
  );
}

export default App;
