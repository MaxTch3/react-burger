import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../../utils/componentTypes';
import Modal from '../../modal/modal';
import ModalHeader from '../../modal/modal-header/modal-header';
import IngredientDetails from '../../ingredient-details/ingredient-details';

const Ingredient = ({ item, openModal, setModal, setDataModal, modalActive, setModalActive, handleCloseModal, modal, dataModal }) => {

  return (
<>
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
    {(modal === 1) &&
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalHeader header={'Детали ингредиента'} closeModal={handleCloseModal} />
            <IngredientDetails itemId={dataModal} />
          </Modal>}
  </>
  )
};

Ingredient.propTypes = {
  item: ingredientType,
  openModal: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  setDataModal: PropTypes.func.isRequired
};

export default Ingredient;
