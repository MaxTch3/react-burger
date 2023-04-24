import React, { useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css'
import Ingredient from './ingredient/ingredient';
//import { useSelector } from 'react-redux';
import { useSelectorApp } from '../burger-constructor/burger-constructor';

type TCounters = {
  [id: string]: number
}

type TRef = {
  current: any
}

const BurgerIngredients = () => {
  const { data, dataFailed } = useSelectorApp((state) => state.ingredientsData);
  const [current, setCurrent] = React.useState('bun');
  const { bun, otherIngredients } = useSelectorApp((state) => state.ingredientsConstructor);

  const bunData = useMemo(() => (data.filter((item) => item.type === 'bun')), [data]);
  const sauceData = useMemo(() => (data.filter((item) => item.type === 'sauce')), [data]);
  const mainData = useMemo(() => (data.filter((item) => item.type === 'main')), [data]);

  const counters = useMemo(() => {
    const repetitions: TCounters = {};
    if (bun) repetitions[bun._id] = 2;
    otherIngredients.forEach((otherIngredient) => {
      if (!repetitions[otherIngredient._id]) { repetitions[otherIngredient._id] = 0 };
      repetitions[otherIngredient._id] += 1
    });
    return repetitions;
  }, [bun, otherIngredients]);


  const scrollPoints = () => {
    const bunsPoint = (document.getElementById('buns-box') as HTMLElement).getBoundingClientRect().top;
    const bunsHeight = (document.getElementById('buns-box') as HTMLElement).getBoundingClientRect().height;
    const saucesPoint = (document.getElementById('sauces-box') as HTMLElement).getBoundingClientRect().top;
    const mainPoint = (document.getElementById('main-box') as HTMLElement).getBoundingClientRect().top;
    const startPoint = (document.getElementById('start-box') as HTMLElement).getBoundingClientRect().top;

    if (Math.abs(startPoint - bunsPoint) < Math.abs(startPoint - saucesPoint)) {
      setCurrent('bun')
    } else if (Math.abs(startPoint - saucesPoint - bunsHeight) < Math.abs(startPoint - mainPoint)) {
      setCurrent('sauce')
    } else {
      setCurrent('main')
    }
  }

  const bunRef: TRef = React.useRef<HTMLDivElement>();
  const sauceRef: TRef = React.useRef<HTMLDivElement>();
  const mainRef: TRef = React.useRef<HTMLDivElement>();

  const viewBuns = () => {
    if (bunRef.current) { bunRef.current.scrollIntoView({ behavior: 'smooth' }) }
  };
  const viewSauce = () => {
    if (sauceRef.current) { sauceRef.current.scrollIntoView({ behavior: 'smooth' }) }
  };
  const viewMain = () => {
    if (mainRef.current) { mainRef.current.scrollIntoView({ behavior: 'smooth' }) }
  };

  return (
    <div>
      <h2 className='text text_type_main-large pt-10'>Соберите бургер</h2>
      <div className='pt-5' style={{ display: 'flex' }} id='start-box'>
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
      <div className={styles.containerIngredients + ' pl-1 pr-1'} onScroll={scrollPoints}>

        {dataFailed && <div className='text text_type_main-default mt-10' style={{ textAlign: 'center' }}>
          Произошла ошибка загрузки данных с сервера.
        </div>
        }

        {!dataFailed && data.length !== 0 &&
          <>
            <h3 className='text text_type_main-medium'>Булки</h3>
            <div ref={bunRef} className={styles.ingredients_section} id='buns-box'>
              {
                bunData.map((item) =>
                  <Ingredient key={item._id} item={item} count={counters[item._id]} />)
              }
            </div>
            <h3 className='text text_type_main-medium mt-10'>Соусы</h3>
            <div ref={sauceRef} className={styles.ingredients_section} id='sauces-box'>
              {
                sauceData.map((item) =>
                  <Ingredient key={item._id} item={item} count={counters[item._id]} />)
              }
            </div>
            <h3 className='text text_type_main-medium mt-10'>Начинки</h3>
            <div ref={mainRef} className={styles.ingredients_section} id='main-box'>
              {
                mainData.map((item) =>
                  <Ingredient key={item._id} item={item} count={counters[item._id]} />)
              }
            </div>
          </>
        }
      </div>
    </div>
  )
};

export default BurgerIngredients;
