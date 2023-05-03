import { useState, useMemo, useCallback, FC } from 'react';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import { CurrencyIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import DraggableElement from './draggable-element/draggable-element';
import { getOrderData, GET_ORDER_RESET } from '../../services/actions/order';
import { ADD_INGREDIENT, MOVE_INGREDIENT, RESET_INGREDIENTS } from '../../services/actions/ingredients-constructor';
import styles from './burger-constructor.module.css';
import { useDispatch, useSelectorApp } from '../../services/hooks';

const BurgerConstructor: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { bun, otherIngredients } = useSelectorApp(state => state.ingredientsConstructor);
  const isAuthorization = useSelectorApp(state => state.userReducer.isAuthorization);
  const { orderNumber, orderRequest } = useSelectorApp((state) => state.order);

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch({ type: ADD_INGREDIENT, item })
    }
  });

  const [, dropTargetInEmptyBlock] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch({ type: ADD_INGREDIENT, item })
    }
  });

  const priceTotal = useMemo(() => (
    (bun ? bun.price * 2 : 0) + otherIngredients.map(item => item.price).reduce((prev, curr) => prev + curr, 0))
    , [otherIngredients, bun]);

  const handleOrder = () => {
    if (!isAuthorization) {
      navigate('/login')
    } else {
      const orderData = [bun!._id].concat(otherIngredients.map((item) => item._id)).concat([bun!._id]);
      dispatch(getOrderData(orderData));
      setIsOpen(true);
    }
  }

  const moveList = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch({ type: MOVE_INGREDIENT, dragIndex, hoverIndex })
    },
    [dispatch],
  );

  const onClose = () => {
    dispatch({ type: RESET_INGREDIENTS });
    dispatch({ type: GET_ORDER_RESET });
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
                otherIngredients.map((item, index) => (
                  <DraggableElement item={item} index={index} key={item.id} moveList={moveList} />
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
              <Button htmlType='button' type='primary' size='large' extraClass='ml-10' disabled={orderRequest}
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
      {isOpen && orderNumber > 0 &&
        <Modal setActive={setIsOpen} header={''} onClose={onClose}>
          <OrderDetails />
        </Modal>}
    </>
  )
}

export default BurgerConstructor;
