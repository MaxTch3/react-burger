import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { orderFeed2 } from '../feed-page/feed-page';
import styles from './order-page.module.css';

const OrderPage = () => {
  const ingredientsData = useSelector((state) => state.ingredientsData.data);
  const params = useParams();
  const order = useMemo(() => orderFeed2.orders.find((item) => item._id === params.id), [params.id]);

  const status =
    order.status === 'done' ? 'Выполнен'
      : order.status === 'created' ? 'Создан'
        : order.status === 'pending' ? 'В работе' : '';

  const ingredientsUniq = useMemo(() => {
    return Array.from(new Set(
      ingredientsData.filter((item) => order.ingredients.includes(item._id))
    ));
  }, [ingredientsData, order]);

  const countsObject = useMemo(() => {
    const counts = order.ingredients.reduce((acc, i) => {
      if (acc.hasOwnProperty(i)) {
        acc[i] += 1;
      } else {
        acc[i] = 1;
      }
      return acc;
    }, {});
    counts[order.ingredients[0]] = 2;
    return counts
  }, [order])

  const cost = useMemo(() => {
    let totalCost = 0;
    order.ingredients.forEach((id) => {
      const ingredient = ingredientsUniq.find((item) => (item._id === id));
      if (ingredient?.type === 'bun') {
        totalCost += ingredient?.price * 2;
      } else {
        totalCost += ingredient?.price;
      }
    });
    return totalCost

  }, [ingredientsUniq, order])

  return (
    <div className={styles.container}>
      <p className='text text_type_digits-default'
        style={{ height: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{`#${order.number}`}</p>
      <p className='text text_type_main-medium pt-5'>Black Hole Singularity острый бургер</p>
      <p className='text text_type_main-default pt-2' style={order.status === 'done' ? { color: '#00CCCC' } : {}}>{status}</p>
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
                <p className='text text_type_digits-default'>{`${countsObject[ingredient._id]} x ${ingredient?.price} `}</p>
                <CurrencyIcon />
              </div>
            </div>
          ))
        }
      </div>
      <div className={styles.date_and_cost}>
        <p className='text text_type_main-default text_color_inactive'>
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
        <div className={styles.total}>
          <p className='text text_type_digits-default'>{`${cost}`}</p>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  )
};

export default OrderPage;
