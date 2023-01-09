import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './components/burger-constructor/burger-constructor.jsx'
import styles from './App.module.css';
import data from './utils/data.js';


function App() {
   return (
      <div className={styles.app}>
         <AppHeader />
         <main className={styles.main}>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
         </main>


      </div>
   );
}

export default App;
