import { FC, useMemo, useState } from 'react';
import IngredientDetails from '../../../../components/ingredient-details/ingredient-details';
import Modal from '../../../../components/modal/modal';
import { GET_INGREDIENT_CURRENT_INFO, REMOVE_INGREDIENT_CURRENT_INFO } from '../../../../services/actions/ingredient-current-info';
import styles from './round-icon.module.css';
import { useDispatchApp, useSelectorApp } from '../../../../services/hooks';

export type TRoundIconProps = {
  id: string;
  count: number;
  index: number
}

const RoundIcon: FC<TRoundIconProps> = ({ id, count, index }) => {
  const ingredients = useSelectorApp(state => state.ingredientsData.data);
  const ingredient = useMemo(() => ingredients.find((item) => (item._id === id)), [ingredients, id]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatchApp();

  const onClick = () => {
    dispatch({ type: GET_INGREDIENT_CURRENT_INFO, item: ingredient });
    setIsOpen(true);
    window.history.pushState({ path: `/ingredients/${ingredient!._id}` }, '', `/ingredients/${ingredient!._id}`)
  };

  const onClose = () => {
    dispatch({ type: REMOVE_INGREDIENT_CURRENT_INFO });
    window.history.pushState({ path: `/feed` }, '', `/feed`)
  }

  return (
    <>
      {count > 0 && index === 5 &&
        <div className={styles.image_container} style={{zIndex: `${6 - index}`}} onClick={onClick}>
          <img className={styles.image} style={{opacity: 0.6}} src={ingredient?.image_mobile} alt={ingredient?.name} />
          <span className={'text text_type_main-default ' + styles.count}>{`+${count}`}</span>
        </div>}
      {count === 0 && index === 5 &&
        <div className={styles.image_container} style={{ zIndex: `${6 - index}` }} onClick={onClick}>
          <img className={styles.image} src={ingredient?.image_mobile} alt={ingredient?.name} />
        </div>}

      {index < 5 &&
        <div className={styles.image_container} style={{ zIndex: `${6 - index}` }} onClick={onClick}>
          <img className={styles.image} src={ingredient?.image_mobile} alt={ingredient?.name} />
        </div>}
      {isOpen &&
        <Modal setActive={setIsOpen} onClose={onClose} header={'Детали ингредиента'}>
          <IngredientDetails />
        </Modal>
      }
    </>
  )
}

export default RoundIcon;
