import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import './App.css';
import data from './utils/data.js'

function App() {
   return (
      <div className="App">
         <AppHeader />
         <main>
            <BurgerIngredients data={data} />
         </main>


      </div>
   );
}

export default App;
