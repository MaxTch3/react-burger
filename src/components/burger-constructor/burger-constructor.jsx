import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  CurrencyIcon,
  DragIcon,
  ConstructorElement,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { IngredientsContext } from '../../services/ingredientsContext';

const BurgerConstructor = ({ openModal, setModal }) => {
  const data = useContext(IngredientsContext);

  const buns = data.filter((item) => item.type === 'bun');
  const bun = buns[0];
  const otherIngredients = data.filter((item) => item.type !== 'bun').slice(1, 5);
  const priceTotal = bun?.price * 2 + otherIngredients.map(item => item.price).reduce((prev, curr) => prev + curr, 0);



  return (
    <section className='pt-25 pl-4'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: 'calc(65vh - 56px)' }}>
        <div className='pl-8'>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={`${bun?.name || ''}\n` + '(верх)'}
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
            text={`${bun?.name || ''}\n` + '(низ)'}
            price={Number(bun?.price)}
            thumbnail={String(bun?.image)}
          />
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
      }} className='pt-10 pr-4'>
        <p className='text text_type_digits-medium mr-2'>{String(priceTotal)}</p>
        <CurrencyIcon type='primary' />
        <Button htmlType='button' type='primary' size='large' extraClass='ml-10'
          onClick={() => { setModal(2); openModal() }}>
          Оформить заказ
        </Button>
      </div>

    </section>
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
}

export default BurgerConstructor;
