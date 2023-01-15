import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../../utils/componentTypes';

const Ingredient = ({ item, openModal, setModal, setDataModal }) => {

  return (

    <div className={styles.ingredient_card + ' ml-3 mr-3'} onClick={() => {
      setDataModal(item._id);
      setModal(1);
      openModal();
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
  )
};

Ingredient.propTypes = {
  item: ingredientType,
  openModal: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  setDataModal: PropTypes.func.isRequired
};

export default Ingredient;
