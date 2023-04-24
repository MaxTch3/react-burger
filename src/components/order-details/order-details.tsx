import styles from './order-details.module.css';
import { useSelectorApp } from '../burger-constructor/burger-constructor';
import { FC } from 'react';

const OrderDetails: FC = () => {
  const orderNumber = useSelectorApp(state => state.order.orderNumber);
  return (
    <div className={styles.container}>
      <p className='text text_type_digits-large' style={{ textAlign: 'center' }}>{orderNumber}</p>
      <p className='text text_type_main-medium pt-8' style={{ textAlign: 'center' }}>идентификатор заказа</p>
      <div className={styles.image_container}></div>
      <p className='text text_type_main-default pt-15' style={{ textAlign: 'center' }}>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive pt-2' style={{ textAlign: 'center' }}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;
