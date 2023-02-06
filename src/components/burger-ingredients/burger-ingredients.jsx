import React, { useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css'
import Ingredient from './ingredient/ingredient.jsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const BurgerIngredients = ({ setDataModal, dataModal }) => {
  const { data } = useSelector((state) => state.ingredientsData);
  const [current, setCurrent] = React.useState('bun');
  const bunData = useMemo(() => (data.filter((item) => item.type === 'bun')), [data]);
  const sauceData = useMemo(() => (data.filter((item) => item.type === 'sauce')), [data]);
  const mainData = useMemo(() => (data.filter((item) => item.type === 'main')), [data]);
  const bun = React.useRef();
  const sauce = React.useRef();
  const main = React.useRef();

  const viewBuns = () => bun.current.scrollIntoView({ behavior: 'smooth' });
  const viewSauce = () => sauce.current.scrollIntoView({ behavior: 'smooth' });
  const viewMain = () => main.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <h2 className='text text_type_main-large pt-10'>Соберите бургер</h2>
      <div className='pt-5' style={{ display: 'flex' }}>
        <Tab value='bun' active={current === 'bun'} onClick={() => { setCurrent('bun'); viewBuns() }}>
          Булки
        </Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={() => { setCurrent('sauce'); viewSauce() }}>
          Соусы
        </Tab>
        <Tab value='main' active={current === 'main'} onClick={() => { setCurrent('main'); viewMain() }}>
          Начинки
        </Tab>
      </div>
      <div className='pt-10'></div>
      <div className={styles.containerIngredients + ' pl-1 pr-1'}>
        <h3 ref={bun} className='text text_type_main-medium'>Булки</h3>
        <div className={styles.ingredients_section}>
          {
            bunData.map((item) =>
              <Ingredient key={item._id} item={item} setDataModal={setDataModal} dataModal={dataModal} />)
          }
        </div>
        <h3 ref={sauce} className='text text_type_main-medium mt-10'>Соусы</h3>
        <div className={styles.ingredients_section}>
          {
            sauceData.map((item) =>
              <Ingredient key={item._id} item={item} setDataModal={setDataModal} dataModal={dataModal} />)
          }
        </div>
        <h3 ref={main} className='text text_type_main-medium mt-10'>Начинки</h3>
        <div className={styles.ingredients_section}>
          {
            mainData.map((item) =>
              <Ingredient key={item._id} item={item} setDataModal={setDataModal} dataModal={dataModal} />)
          }
        </div>
      </div>
    </div>
  )
};

BurgerIngredients.propTypes = {
  setDataModal: PropTypes.func.isRequired,
  dataModal: PropTypes.string
}

export default BurgerIngredients;
