import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import { v4 as uuidv4 } from 'uuid';
import RoundIcon from './round-icon/round-icon';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';



const OrderCard = ({ order }) => {
  const ingredients = useSelector(state => state.ingredientsData.data);
  const ingredientsToDraw = useMemo(() => order.ingredients.slice(0, 6), [order]);

  const count = useMemo(() =>
    order.ingredients.length > 6 ? (order.ingredients.length - 6) : 0
    , [order]);

  const cost = useMemo(() => {
    let totalCost = 0;
    order.ingredients.forEach((id) => {
      const ingredient = ingredients.find((item) => (item._id === id));
      if (ingredient?.type === 'bun') {
        totalCost += ingredient?.price * 2;
      } else {
        totalCost += ingredient?.price;
      }
    });
    return totalCost

  }, [ingredients, order])
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
          <p className='text text_type_digits-default'>{`${cost}`}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>

    </div>
  )
};

export default OrderCard;
