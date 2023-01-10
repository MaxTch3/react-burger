import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './components/burger-constructor/burger-constructor.jsx'
import styles from './App.module.css';
// import data from './utils/data.js';


function App() {
   const [state, setState] = React.useState({
      ingredientsData: [],
      loading: true
   });
   const url = 'https://norma.nomoreparties.space/api/ingredients'


   React.useEffect(() => {
      const getData = async () => {
         setState({ ...state, loading: true });
         try {
            const res = await fetch(url);
            if (res.ok) {
               const data = await res.json();
               setState({ ingredientsData: data.data, loading: false });
            }
         }
         catch (error) {
            console.log(error);
         };
      };
      getData();
   }, []);

   return (
      <div className={styles.app}>
         <AppHeader />
         <main className={styles.main} >
            <BurgerIngredients data={state.ingredientsData} />
            <BurgerConstructor data={state.ingredientsData} />
         </main>
      </div>
   );
}

export default App;
