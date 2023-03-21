import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import { v4 as uuidv4 } from 'uuid';
import RoundIcon from './round-icon/round-icon';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ORDER_CURRENT_INFO, REMOVE_ORDER_CURRENT_INFO } from '../../../services/actions/order-current-info';
import Modal from '../../../components/modal/modal';
import OrderWindow from '../../../components/order-window/order-window';

const OrderCard = ({ order, onStatus, pathOrder }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredientsData.data);

  const onClick = () => {
    dispatch({ type: GET_ORDER_CURRENT_INFO, order });
    setIsOpen(true);
    window.history.pushState({ path: `${pathOrder}/${order._id}` }, '', `${pathOrder}/${order._id}`)
  };

  const onClose = () => {
    dispatch({ type: REMOVE_ORDER_CURRENT_INFO });
    window.history.pushState({ path: `${pathOrder}` }, '', `${pathOrder}`)
  }

  const uniqueList = useMemo(() => Array.from(
    new Set(order.ingredients)), [order])

  const ingredientsToDraw = useMemo(() => uniqueList.slice(0, 6)
    , [uniqueList]);

  const count = useMemo(() =>
    uniqueList.length > 6 ? (uniqueList.length - 6) : 0
    , [uniqueList]);

  const cost = useMemo(() => {
    let totalCost = 0;
    order.ingredients.forEach((id) => {
      const ingredient = ingredients.find((item) => (item._id === id));
        totalCost += ingredient?.price;
    });
    return totalCost
  }, [ingredients, order]);

  const status =
    order.status === 'done' ? 'Выполнен'
      : order.status === 'created' ? 'Создан'
        : order.status === 'pending' ? 'Готовится' : '';

  return (
    <>
      <div className={styles.order}>
        <div className='pb-6' onClick={onClick}>
          <div className={styles.header}>
            <p className='text text_type_digits-default' >{`#${order.number}`}</p>
            <p className='text text_type_main-default text_color_inactive'>
              <FormattedDate date={new Date(order.createdAt)} />
            </p>
          </div>
          <p className='text text_type_main-medium pt-6 pl-6 pr-6'>{order.name}</p>
          {onStatus &&
            <p className='text text_type_main-default pt-2 pl-6' style={order.status === 'done' ? { color: '#00CCCC' } : {}}>{status}</p>
          }
        </div>

        <div className={styles.images_and_cost}>
          <div className={styles.image_box}>
            {
              ingredientsToDraw.map((ingredientId, index) => (
                <RoundIcon key={uuidv4()} id={ingredientId} count={count} index={index} />
              ))
            }
          </div>
          <div className={styles.cost} onClick={onClick}>
            <p className='text text_type_digits-default'>{`${cost}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
      {
        isOpen &&
        <Modal setActive={setIsOpen} onClose={onClose} header={`#${order.number}`} textStyle={'text text_type_digits-default'}>
          <OrderWindow />
        </Modal>
      }
    </>
  )
};

export default OrderCard;
