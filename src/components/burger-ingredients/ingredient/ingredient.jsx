import { type } from '@testing-library/user-event/dist/type';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './ingredient.module.css';

const Ingredient = ({ item, openModal, setModal, setDataModal}) => {
   // const [count, setCount] = React.useState(0);
   // const addCount = () => {
   //    setCount(count + 1)
   // }

   return (

      <div className={styles.ingredient_card + ' ml-3 mr-3'} onClick={() => {
         setDataModal(item._id);      
         setModal(1);
         openModal();
      }}>
         {
            <Counter count={1} size="default" extraClass="m-1" />
         }

         <img className={"ml-4 mr-4 " + styles.ingredient_image} src={item.image} alt={item.name} />
         <div className={styles.ingredient__price + ' pt-1'}>
            <p className="text text_type_digits-default">{item.price}</p>
            <CurrencyIcon type="primary" />
         </div>
         <div style={{ textAlign: 'center' }} className="text text_type_main-default pt-1">{item.name}</div>
      </div>
   )
}

export default Ingredient;
