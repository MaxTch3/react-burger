import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import { ingredientType } from '../../../utils/componentTypes';
import Modal from '../../modal/modal';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_INGREDIENT_CURRENT_INFO } from '../../../services/actions/ingredientCurrentInfo.js';

const Ingredient = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.ingredient_card + ' ml-3 mr-3'} onClick={() => {
        dispatch({ type: GET_INGREDIENT_CURRENT_INFO, item })
        setIsOpen(true)
      }}>
        {
          <Counter count={1} size='default' extraClass='m-1' />
        }

        <img className={'ml-4 mr-4 ' + styles.ingredient_image} src={item.image} alt={item.name} />
        <div className={styles.ingredient__price + ' pt-1'}>
          <p className='text text_type_digits-default'>{item.price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <div style={{ textAlign: 'center' }} className='text text_type_main-default pt-1'>{item.name}</div>
      </div>
      {isOpen &&
        <Modal setActive={setIsOpen} header={'Детали ингредиента'}>
          <IngredientDetails />
        </Modal>
      }
    </>
  )
};

Ingredient.propTypes = {
  item: ingredientType
};

export default Ingredient;
