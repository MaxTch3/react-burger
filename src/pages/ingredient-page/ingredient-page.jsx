import styles from './ingredient-page.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const IngredientPage = () => {
  const { data } = useSelector((state) => state.ingredientsData);
  const params = useParams();

  const item = data.find((item) => item._id === params.id)

  return (
    <div className={styles.container + ' pl-10 pr-10 pb-15'}>
      <div className='pl-5 pr-5'>
        <img src={item.image_large} alt={item.name} />
      </div>
      <p className='text text_type_main-medium pt-4'>{item.name}</p>
      <div className={styles.colorizator + ' pt-8'}>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{item.calories}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{item.proteins}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{item.fat}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive pt-2'>{item.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}

export default IngredientPage;
