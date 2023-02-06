import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { postOrderData } from '../../utils/burgers-api';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useSelector } from 'react-redux';

const BurgerConstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSelector((state) => state.ingredientsData);
  const [orderNumber, setOrderNumber] = useState(null);
  const buns = useMemo(() => (data.filter((item) => item.type === 'bun')), [data]);
  const bun = buns[1];
  const otherIngredients = useMemo(() => (data.filter((item) => item.type !== 'bun').slice(1, 5)), [data]);
  const priceTotal = useMemo(() => (bun?.price * 2 + otherIngredients.map(item => item.price).reduce((prev, curr) => prev + curr, 0)), [otherIngredients, bun])

  const handleOrder = () => {
    const orderData = [bun._id].concat(otherIngredients.map((item) => item._id));
    postOrderData(orderData)
      .then((data) => {
        setOrderNumber(data.order.number);
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  return (
    <>
      <section className='pt-25 pl-4'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: 'calc(65vh - 56px)' }}>
          <div className='pl-8'>
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun?.name || ''}\n(верх)`}
              price={Number(bun?.price)}
              thumbnail={String(bun?.image)}
            />
          </div>
          <div className={styles.sauce_and_main + ' pr-4'}>
            {
              otherIngredients.map((item) => (
                <div style={{ display: 'flex', alignItems: 'center' }} key={uuidv4()}>
                  <DragIcon type='primary' />
                  <ConstructorElement
                    text={String(item?.name)}
                    price={Number(item?.price)}
                    thumbnail={String(item?.image)}
                    extraClass='ml-2'
                  />
                </div>
              ))
            }
          </div>
          <div className='pl-8'>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${bun?.name || ''}\n(низ)`}
              price={Number(bun?.price)}
              thumbnail={String(bun?.image)}
            />
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center'
        }}
          className='pt-10 pr-4'>
          <p className='text text_type_digits-medium mr-2'>{String(priceTotal)}</p>
          <CurrencyIcon type='primary' />
          <Button htmlType='button' type='primary' size='large' extraClass='ml-10'
            onClick={handleOrder}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {isOpen &&
        <Modal active={isOpen} setActive={setIsOpen} header={''}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>}
    </>
  )
}

export default BurgerConstructor;
