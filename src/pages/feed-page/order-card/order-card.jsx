import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css'

const OrderCard = () => {
  const dateFromServer = '2022-10-10T17:33:32.877Z'
  return (
    <div className={styles.order}>
      <div className={styles.header}>
        <p className='text text_type_digits-default' >#034535</p>
        <p className='text text_type_main-default text_color_inactive'>
          <FormattedDate date={new Date(dateFromServer)} />
        </p>
      </div>

      <p className='text text_type_main-medium'>Death Star Starship Main бургер</p>
      <div className={styles.image_box}>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
      </div>
    </div>
  )
}
export default OrderCard;
