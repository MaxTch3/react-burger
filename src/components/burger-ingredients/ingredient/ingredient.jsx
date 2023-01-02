
import styles from './ingredient.module.css'

const Ingredient = (props) => {
   return (
      <div className={styles.ingredient_card}>
         <img className={"ml-4 mr-4 " + styles.ingredient_image} src={props.data.image} alt={props.data.name} />
         <div className={styles.ingredient_name}>{props.data.name}</div>
      </div>
   )
}

export default Ingredient;
