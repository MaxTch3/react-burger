import { FC, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { WS_CONNECTION_END, WS_CONNECTION_START } from '../../services/actions/ws-actions';
import styles from './feed-page.module.css'
import OrderCard from './order-card/order-card';
import { useDispatch, useSelectorApp } from '../../services/hooks';
import { TOrderInfo } from '../../services/types/types';

const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelectorApp(state => state.wsReducer)
  const ordersDone = useMemo(() => orders.filter((item) => (item.status === 'done')), [orders]);
  const ordersWork = useMemo(() => orders.filter((item) => (item.status === 'pending' || item.status === 'created')), [orders]);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => { dispatch({ type: WS_CONNECTION_END }) }
  }, [dispatch])

  // заказы за последний час
  const filterToHour = (ordersDone: TOrderInfo[]) => {
    let date = (new Date()).getTime() - 1 * 60 * 60 * 1000;
    let dayTransactions = ordersDone.filter((item) => (new Date(item.updatedAt)).getTime() >= date);
    return dayTransactions;
  }

  return (
    <main className={styles.main} >
      <div>
        <h2 className='text text_type_main-large pt-10'>Лента заказов</h2>
        <div className='pt-5'></div>
        <div className={styles.container + ' pl-1 pr-1'} >
          {orders.map((order) => (
            <OrderCard order={order} key={uuidv4()} pathOrder={'/feed'} />
          ))
          }
        </div>
      </div>
      {total !== 0 &&
        <div className={styles.info_container}>
          <div className={styles.boards}>
            <div className={styles.board_done}>
              <h3 className='text text_type_main-medium pb-6'>Готовы:</h3>
              <div className={styles.work_box}>
                {filterToHour(ordersDone).map((item) => (
                  <p style={{ color: '#00cccc' }}
                    className={filterToHour(ordersDone).length > 30 ? 'text text_type_digits-small' : 'text text_type_digits-default'} key={uuidv4()}>{String(item.number)}</p>
                ))}
              </div>
            </div>
            <div className={styles.board_work}>
              <h3 className='text text_type_main-medium pb-6'>В работе:</h3>
              <div className={styles.work_box}>
                {ordersWork.map((item) => (
                  <p className='text text_type_digits-default' key={uuidv4()}>{String(item.number)}</p>
                ))}
              </div>

            </div>
          </div>
          <p className='text text_type_main-medium pt-15'>Выполнено за все время:</p>
          <p className={'text text_type_digits-large ' + styles.total_count}>{new Intl.NumberFormat('ru-RU').format(total)}</p>
          <p className='text text_type_main-medium pt-15'>Выполнено за сегодня:</p>
          <p className={'text text_type_digits-large ' + styles.total_count}>{new Intl.NumberFormat('ru-RU').format(totalToday)}</p>
        </div>}

    </main>
  )
};

export default FeedPage;

