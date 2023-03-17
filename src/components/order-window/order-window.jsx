import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './order-window.module.css'

const OrderWindow = () => {

  const order = useSelector(state => state.orderCurrentInfo.order);
  const ingredientsData = useSelector(state => state.ingredientsData.data)
  const status = order.status === 'done' ? 'Выполнен' : '';

  const countObj = order.ingredients.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  }, {})

  const ingredientsUniq = useMemo(() => {
    return Array.from(
      new Set(
        ingredientsData.filter((item) => order.ingredients.includes(item._id)
        )
      )
    );
  }, [ingredientsData, order.ingredients]);

  return (
    <div className={styles.container}>
      <p className='text text_type_main-medium pt-5'>Black Hole Singularity острый бургер</p>
      <p className='text text_type_main-default pt-2' style={{ color: '#00CCCC' }}>{status}</p>
      <p className='text text_type_main-medium pt-15'>Состав:</p>
      <div className={styles.ingredients}>
        {
          ingredientsUniq.map((ingredient, index) => (
            <div className={styles.ingredients_box} key={index}>
              <div className={styles.image_container} >
                <img className={styles.image} src={ingredient?.image_mobile} alt={ingredient?.name} />
              </div>
              <p className='text text_type_main-default'>{ingredient?.name}</p>
              <p className='text text_type_main-default'>{ingredient?.price}</p>

              <CurrencyIcon />
              <p className='text text_type_main-default'>{countObj[ingredient._id]}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderWindow;

