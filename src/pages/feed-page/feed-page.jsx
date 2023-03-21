import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { WS_CONNECTION_END, WS_CONNECTION_START } from '../../services/actions/ws-actions';
import styles from './feed-page.module.css'
import OrderCard from './order-card/order-card';

const FeedPage = () => {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(state => state.wsReducer)
  const ordersDone = useMemo(() => orders.filter((item) => (item.status === 'done')), [orders]);
  const ordersWork = useMemo(() => orders.filter((item) => (item.status === 'pending' || item.status === 'created')), [orders]);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => { dispatch({ type: WS_CONNECTION_END }) }
  }, [dispatch])

  // заказы за последние полчаса
  const filterToHour = (ordersDone) => {
    let date = (new Date()).getTime() - 0.5 * 60 * 60 * 1000;
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
      { total !== 0 &&
        <div className={styles.info_container}>
          <div className={styles.boards}>
            <div className={styles.board_done}>
              <h3 className='text text_type_main-medium pb-6'>Готовы:</h3>
              <div className={styles.work_box}>
                {filterToHour(ordersDone).map((item) => (
                  <p style={{ color: '#00cccc' }} className='text text_type_digits-default' key={uuidv4()}>{String(item.number)}</p>
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


























export const orderFeed2 = {
  "success": true,
  "orders":
    [
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9"
        ],
        "_id": "453174987593i",
        "status": "done",
        "number": 31345,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c6",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          '60d3b41abdacab0026a733ce',
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "453724e987593y",
        "status": "created",
        "number": 42345,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9"
        ],
        "_id": "453734987593k",
        "status": "pending",
        "number": 33345,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c6",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          '60d3b41abdacab0026a733ce',
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "45374e9487593l",
        "status": "done",
        "number": 43445,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9"
        ],
        "_id": "453749587593z",
        "status": "pending",
        "number": 335545,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c6",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          '60d3b41abdacab0026a733ce',
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733d0",
          "60d3b41abdacab0026a733d4"
        ],
        "_id": "45374e9876593c",
        "status": "done",
        "number": 46345,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9"
        ],
        "_id": "453749877593v",
        "status": "done",
        "number": 33945,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c6",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          '60d3b41abdacab0026a733ce',
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "45374e9879593m",
        "status": "created",
        "number": 4777345,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
    ],
  "total": 28752,
  "totalToday": 138
}
