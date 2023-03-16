import styles from './feed-page.module.css'
import OrderCard from './order-card/order-card';

const FeedPage = () => {
  return (
    <main className={styles.main} >
      <div>
        <h2 className='text text_type_main-large pt-10'>Лента заказов</h2>
        <div className='pt-10'></div>
        <div className={styles.container + ' pl-1 pr-1'} >
          {orderFeed.map((order) => (
            <OrderCard order={order} key={order._id} />
          ))
          }
        </div>
      </div>
      <div style={{ width: '606px' }}></div>
    </main>
  )
}
export default FeedPage;

const orderFeed = [
    {
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ca",
        "60d3b41abdacab0026a733ca",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733c9"
      ],
      "_id": "45374987593",
      "status": "done",
      "number": 3345,
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
    "_id": "45374e987593",
    "status": "done",
    "number": 4345,
    "createdAt": "2021-06-23T14:43:22.587Z",
    "updatedAt": "2021-06-23T14:43:22.603Z"
  },
  ]
