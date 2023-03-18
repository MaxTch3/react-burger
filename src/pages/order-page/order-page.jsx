import { useMemo } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { orderFeed } from '../feed-page/feed-page';
import styles from './order-page.module.css';

const OrderPage = () => {
  // const ingredientsData = useSelector((state) => state.ingredientsData.data);
  // const params = useParams();
  const order = useMemo(() => orderFeed.orders.find((item) => item._id === "453724e987593"), []);
  // const ingredients = useMemo(() =>
  //   ingredientsData.filter((item) => order?.ingredients.includes(item._id)), [orderFeed, ingredientsData]);

  return (
    <div className={styles.container}>
      <p>{`${order.number}`}</p>
    </div>
  )
};

export default OrderPage;
