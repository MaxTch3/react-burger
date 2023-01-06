import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './components/burger-constructor/burger-constructor.jsx'
import './App.css';
import data from './utils/data.js';


function App() {
   return (
      <div className="App" style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         maxWidth: '1280px',
         width: '100%',
         marginLeft: 'auto',
         marginRight: 'auto'
      }}>
         <AppHeader />
         <main>
            <BurgerIngredients data={data} />
            <BurgerConstructor />
         </main>


      </div>
   );
}

export default App;
