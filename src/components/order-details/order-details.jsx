import { useSelector } from 'react-redux';
import styles from './order-details.module.css';

const OrderDetails = () => {
  const orderNumber = useSelector(state => state.order.orderNumber);
  return (
    <div className={styles.container}>
      <p className='text text_type_digits-large' style={{ texAlign: 'center' }}>{orderNumber > 0 ? String(orderNumber) : '----'}</p>
      <p className='text text_type_main-medium pt-8' style={{ texAlign: 'center' }}>идентификатор заказа</p>
      <div className={styles.image_container}></div>
      <p className='text text_type_main-default pt-15' style={{ texAlign: 'center' }}>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive pt-2' style={{ texAlign: 'center' }}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;
