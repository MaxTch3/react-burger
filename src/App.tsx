import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import './App.css';

function App() {
   return (
      <div className="App">
         <header>
            <AppHeader />
         </header>
         <body>
            <BurgerIngredients />
         </body>
      </div>
   );
}

export default App;
