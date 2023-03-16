import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './round-icon.module.css';

const RoundIcon = ({ id, count, index }) => {
  const ingredients = useSelector(state => state.ingredientsData.data);
  const ingredient = useMemo(() => ingredients.find((item) => (item._id === id)), [ingredients]);
  return (
    <>
      {count > 0 && index === 5 &&
        <div className={styles.image_container} style={{zIndex: `${6 - index}`}}>
          <img className={styles.image} style={{opacity: 0.6}} src={ingredient?.image_mobile} alt={ingredient?.name} />
          <span className={'text text_type_main-default ' + styles.count}>{`+${count}`}</span>
        </div>}
      {count === 0 && index === 5 &&
        <div className={styles.image_container} style={{ zIndex: `${6 - index}` }}>
          <img className={styles.image} src={ingredient?.image_mobile} alt={ingredient?.name} />
        </div>}

      {index < 5 &&
        <div className={styles.image_container} style={{ zIndex: `${6 - index}` }}>
          <img className={styles.image} src={ingredient?.image_mobile} alt={ingredient?.name} />
        </div>}
    </>
  )
}
export default RoundIcon;
