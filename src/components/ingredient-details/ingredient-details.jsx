import { useContext } from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../../services/ingredientsContext';

const IngredientDetails = ({ itemId }) => {
  const data = useContext(IngredientsContext);
  const itemData = data.find(el => el._id === itemId);
  return (
    <div className={styles.container + ' pl-10 pr-10 pb-15'}>
      <div className='pl-5 pr-5'>
        <img src={itemData.image_large} alt={itemData.name} />
      </div>
      <p className='text text_type_main-medium pt-4'>{itemData.name}</p>
      <div className={styles.colorizator + ' pt-8'}>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{itemData.calories}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{itemData.proteins}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{itemData.fat}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{itemData.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  itemId: PropTypes.string.isRequired,
}

export default IngredientDetails;
