import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, useMemo } from 'react';
import styles from './order-window.module.css'
import { useSelectorApp } from '../burger-constructor/burger-constructor';

const OrderWindow: FC = () => {

  const order = useSelectorApp(state => state.orderCurrentInfo.order);
  const ingredientsData = useSelectorApp(state => state.ingredientsData.data)

  const status =
    order?.status === 'done' ? 'Выполнен'
      : order?.status === 'created' ? 'Создан'
        : order?.status === 'pending' ? 'Готовится' : '';

  const ingredientsUniq = useMemo(() => {
    return Array.from(new Set(
      ingredientsData.filter((item) => order?.ingredients.includes(item._id))
    ));
  }, [ingredientsData, order]);

  const countsObject = useMemo(() => {
    const counts = order?.ingredients.reduce((acc: { [a: string]: number }, i) => {
      if (acc.hasOwnProperty(i)) {
        acc[i] += 1;
      } else {
        acc[i] = 1;
      }
      return acc;
    }, {});
    return counts
  }, [order])

  const cost = useMemo(() => {
    let totalCost = 0;
    if (order) {
      order.ingredients.forEach((id) => {
        const ingredient = ingredientsUniq.find((item) => (item._id === id));
        if (ingredient) { totalCost += ingredient.price };
      })
    };
    return totalCost
  }, [ingredientsUniq, order])


  return (
    <div className={styles.container}>
      <p className='text text_type_main-medium pt-5'>{order?.name}</p>
      <p className='text text_type_main-default pt-2' style={order?.status === 'done' ? { color: '#00CCCC' } : {}}>{status}</p>
      <p className='text text_type_main-medium pt-15'>Состав:</p>
      <div className={styles.ingredients}>
        {
          ingredientsUniq.map((ingredient, index) => (
            <div className={styles.ingredients_box} key={index}>
              <div className={styles.ingredient}>
                <div className={styles.image_container} >
                  <img className={styles.image} src={ingredient?.image_mobile} alt={ingredient?.name} />
                </div>
                <p className='text text_type_main-default' style={{ maxWidth: '320px' }}>{ingredient?.name}</p>
              </div>


              <div className={styles.cost}>
                <p className='text text_type_digits-default'>{countsObject ? `${countsObject[ingredient._id]} x ${ingredient?.price} ` : '0'}</p>
                <CurrencyIcon type={'primary'} />
              </div>
            </div>
          ))
        }
      </div>
      <div className={styles.date_and_cost}>
        <p className='text text_type_main-default text_color_inactive'>
          {order
            ? <FormattedDate date={new Date(order.createdAt)} />
            : ''
          }
        </p>
        <div className={styles.total}>
          <p className='text text_type_digits-default'>{`${cost}`}</p>
          <CurrencyIcon type={'primary'} />
        </div>
      </div>
    </div>
  )
}

export default OrderWindow;

