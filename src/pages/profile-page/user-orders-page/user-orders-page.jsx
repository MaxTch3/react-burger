import { orderFeed } from "../../feed-page/feed-page";
import OrderCard from "../../feed-page/order-card/order-card";
import { v4 as uuidv4 } from 'uuid';
import styles from './user-orders-page.module.css';


const UserOrdersPage = () => {
  return (
    <div>
      <div className='pt-5'></div>
      <div className={styles.container + ' pl-1 pr-1'} >
        {orderFeed.orders.map((order) => (
          <OrderCard order={order} key={uuidv4()} onStatus={true} pathOrder={'/profile/orders'} />
        ))
        }
      </div>
    </div>
  )
}

export default UserOrdersPage;
