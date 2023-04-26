import OrderCard from "../../feed-page/order-card/order-card";
import { v4 as uuidv4 } from 'uuid';
import styles from './user-orders-page.module.css';
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { WS_CONNECTION_ORDERS_END, WS_CONNECTION_ORDERS_START } from "../../../services/actions/ws-actions";
import { useSelectorApp } from "../../../components/burger-constructor/burger-constructor";
import { useDispatchApp } from "../../../components/app/App";
import getUserAction from "../../../services/actions/get-user";


const UserOrdersPage = () => {
  const dispatch = useDispatchApp();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/profile/orders') {
      dispatch({ type: WS_CONNECTION_ORDERS_START })
    }
    return () => {
      dispatch({ type: WS_CONNECTION_ORDERS_END })
    }
  }, [dispatch, location.pathname])

  const orders = useSelectorApp(state => state.wsReducerOrders.orders);
  const orderSort = useMemo(() => orders.sort(function (a, b) {
    return b.number - a.number
  }), [orders])
  return (
    <div>
      <div className='pt-5'></div>
      <div className={styles.container + ' pl-1 pr-1'} >
        {orderSort.map((order) => (
          <OrderCard order={order} key={uuidv4()} onStatus={true} pathOrder={'/profile/orders'} />
        ))
        }
      </div>
    </div>
  )
}

export default UserOrdersPage;