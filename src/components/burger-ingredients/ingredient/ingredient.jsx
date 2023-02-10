import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import styles from './ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../../utils/componentTypes';
import Modal from '../../modal/modal';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import {
  GET_INGREDIENT_CURRENT_INFO,
  REMOVE_INGREDIENT_CURRENT_INFO
} from '../../../services/actions/ingredient-current-info.js';

const Ingredient = ({ item, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [{ opacity }, ref] = useDrag({
    type: 'ingredient',
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  const onClose = () => {
    dispatch({ type: REMOVE_INGREDIENT_CURRENT_INFO })
  }

  return (
    <>
      <div className={styles.ingredient_card + ' ml-3 mr-3'}
        onClick={() => {
          dispatch({ type: GET_INGREDIENT_CURRENT_INFO, item })
          setIsOpen(true)
        }}
        draggable
        ref={ref}
        style={{ opacity }}
      >
        {count > 0 &&
          <Counter count={count} size='default' extraClass='m-1' />
        }

        <img className={'ml-4 mr-4 ' + styles.ingredient_image} src={item.image} alt={item.name} />
        <div className={styles.ingredient__price + ' pt-1'}>
          <p className='text text_type_digits-default'>{item.price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <div style={{ textAlign: 'center' }} className='text text_type_main-default pt-1'>{item.name}</div>
      </div>

      {isOpen &&
        <Modal setActive={setIsOpen} onClose={onClose} header={'Детали ингредиента'}>
          <IngredientDetails />
        </Modal>
      }
    </>
  )
};

Ingredient.propTypes = {
  item: ingredientType,
  count: PropTypes.number
};

export default Ingredient;
