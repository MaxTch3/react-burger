import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import styles from './burger-constructor.module.css';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { getOrderData } from '../../services/actions/order.js';
import { ADD_INGREDIENT } from '../../services/actions/ingredientsConstructor';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) { dispatch({ type: ADD_INGREDIENT, item }) }
  });
  const [, dropTargetInEmptyBlock] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch({ type: ADD_INGREDIENT, item });
    }
  });

  const { bun, otherIngredients } = useSelector(state => state.ingredientsConstructor)
  const priceTotal = useMemo(() => (bun?.price * 2 + otherIngredients.map(item => item.price).reduce((prev, curr) => prev + curr, 0)), [otherIngredients, bun])

  const handleOrder = () => {
    const orderData = [bun._id].concat(otherIngredients.map((item) => item._id));
    dispatch(getOrderData(orderData));
    setIsOpen(true);
  }

  return (
    <>
      <section className='pt-25 pl-4'>
        {!bun && (otherIngredients.length === 0) &&
          <div className={styles.empty_block + ' text text_type_main-default'} ref={dropTargetInEmptyBlock}>Добавьте ингредиенты</div>
        }
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: 'calc(65vh - 56px)' }}
            ref={dropTarget}
          >
            {bun &&
              <div className='pl-8'>
                <ConstructorElement
                  type='top'
                  isLocked={true}
                  text={`${bun?.name || ''}\n(верх)`}
                  price={Number(bun?.price)}
                  thumbnail={String(bun?.image)}
                />
              </div>
            }
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
            {bun &&
              <div className='pl-8'>
                <ConstructorElement
                  type='bottom'
                  isLocked={true}
                  text={`${bun?.name || ''}\n(низ)`}
                  price={Number(bun?.price)}
                  thumbnail={String(bun?.image)}
                />
              </div>
            }
          </div>

          {bun &&
            <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }} className='pt-10 pr-4'>
              <p className='text text_type_digits-medium mr-2'>{String(priceTotal)}</p>
              <CurrencyIcon type='primary' />
              <Button htmlType='button' type='primary' size='large' extraClass='ml-10'
                onClick={handleOrder}>
                Оформить заказ
              </Button>
            </div>
          }
          {!bun && (otherIngredients.length !== 0) &&
            <div className={styles.empty_bun_block + ' text text_type_main-default mt-4'} ref={dropTargetInEmptyBlock}>Выберите булку</div>
          }
        </>
      </section>
      {isOpen &&
        <Modal active={isOpen} setActive={setIsOpen} header={''}>
          <OrderDetails />
        </Modal>}
    </>
  )
}

export default BurgerConstructor;
