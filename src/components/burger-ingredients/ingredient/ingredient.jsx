import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';

const Ingredient = (props) => {
   return (
      <div className={styles.ingredient_card + ' pl-3 pr-3'}>
         <img className={"ml-4 mr-4 " + styles.ingredient_image} src={props.data.image} alt={props.data.name} />
         <div className={styles.ingredient__price + ' pt-1'}>
            <p className="text text_type_digits-default">{props.data.price}</p>
            <CurrencyIcon type="primary" />
         </div>
         <div style={{textAlign: 'center'}} className="text text_type_main-default pt-1">{props.data.name}</div>
      </div>
   )
}

export default Ingredient;
