import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import { v4 as uuidv4 } from 'uuid';
import RoundIcon from './round-icon/round-icon';
import { useMemo } from 'react';



const OrderCard = ({ order }) => {
  const ingredientsToDraw = useMemo(() => order.ingredients.slice(0, 6), [order])
  const count = useMemo(() =>
    order.ingredients.length > 6 ? (order.ingredients.length - 6) : 0
    , [order])
  return (
    <div className={styles.order}>
      <div className={styles.header}>
        <p className='text text_type_digits-default' >{`#${order.number}`}</p>
        <p className='text text_type_main-default text_color_inactive'>
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
      </div>

      <p className='text text_type_main-medium pt-6'>Death Star Starship Main бургер</p>
      <p className='text text_type_main-default pt-2'>Создан</p>
      <div className={styles.images_and_cost}>
        <div className={styles.image_box}>
          {
            ingredientsToDraw.map((ingredientId, index) => (
              <RoundIcon key={uuidv4()} id={ingredientId} count={count} index={index} />
            ))
          }
        </div>
        <div className={styles.cost}>
          <p className='text text_type_digits-default'>480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>

    </div>
  )
};

export default OrderCard;
