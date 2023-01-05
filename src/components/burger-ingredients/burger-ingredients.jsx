import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css'
import Ingredient from './ingredient/ingredient.jsx';

const BurgerIngredients = (props) => {
   const [current, setCurrent] = React.useState('bun');
   const data = props.data;
   const bunData = data.filter((item) => item.type === 'bun');
   const sauceData = data.filter((item) => item.type === 'sauce');
   const mainData = data.filter((item) => item.type === 'main');

   const bun = React.useRef();
   const sauce = React.useRef();
   const main = React.useRef();

   const viewBuns = () => bun.current.scrollIntoView({ behavior: "smooth" });
   const viewSauce = () => sauce.current.scrollIntoView({ behavior: "smooth" });
   const viewMain = () => main.current.scrollIntoView({ behavior: "smooth" });

   return (
      <>
<h2 className="text text_type_main-large pt-10">Соберите бургер</h2>
         <div  className='pt-5' style={{ display: 'flex' }}>
            <Tab value="bun" active={current === 'bun'} onClick={() => { setCurrent('bun'); viewBuns() }}>
               Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={() => { setCurrent('sauce'); viewSauce() }}>
               Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={() => { setCurrent('main'); viewMain() }}>
               Начинки
            </Tab>
         </div>
         <div className={styles.containerIngredients + ' pl-1 pr-1'}>
            <h3 ref={bun} className="text text_type_main-medium pt-10">Булки</h3>
            <div className={styles.ingredients_section}>
               {
                  bunData.map((item) =>
                     <Ingredient key={item._id} data={item} />)
               }
            </div>
            <h3 ref={sauce} className="text text_type_main-medium pt-10">Соусы</h3>
            <div className={styles.ingredients_section}>
               {
                  sauceData.map((item) =>
                     <Ingredient key={item._id} data={item} />)
               }
            </div>
            <h3 ref={main} className="text text_type_main-medium pt-10">Начинки</h3>
            <div className={styles.ingredients_section}>
               {
                  mainData.map((item) =>
                     <Ingredient key={item._id} data={item} />)
               }
            </div>
         </div>
      </>
   )
}
export default BurgerIngredients;