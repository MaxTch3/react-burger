import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../../utils/componentTypes';
import Modal from '../../modal/modal';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import { useState } from 'react';

const Ingredient = ({ item, setDataModal, dataModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.ingredient_card + ' ml-3 mr-3'} onClick={() => {
        setDataModal(item._id);
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
          <IngredientDetails itemId={dataModal} />
        </Modal>}
    </>
  )
};

Ingredient.propTypes = {
  item: ingredientType,
  setDataModal: PropTypes.func.isRequired,
  dataModal: PropTypes.string.isRequired
};

export default Ingredient;
