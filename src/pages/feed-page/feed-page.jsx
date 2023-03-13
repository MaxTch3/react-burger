import styles from './feed-page.module.css'
import OrderCard from './order-card/order-card';

const FeedPage = () => {
  return (
    <main className={styles.main} >
      <div>
        <h2 className='text text_type_main-large pt-10'>Лента заказов</h2>
        <div className='pt-10'></div>
        <div className={styles.container + ' pl-1 pr-1'} >
            <OrderCard/>
        </div>
      </div>
      <div style={{ width: '606px' }}></div>
    </main>
  )
}
export default FeedPage;
