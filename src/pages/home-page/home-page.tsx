import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './home-page.module.css';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import { FC } from 'react';

const HomePage: FC = () => {
   return (
      <main className={styles.main} >
         <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
         </DndProvider>
      </main>
   )
}
export default HomePage;

