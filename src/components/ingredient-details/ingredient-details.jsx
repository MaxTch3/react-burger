import React from "react";
import styles from './ingredient-details.module.css';

const IngredientDetails = ({ itemId, data }) => {

   const itemData = data.find(el => el._id === itemId);
   return (
      <div className={styles.container + ' pl-10 pr-10'}>
         <div className='pl-5 pr-5'>
            <img src={itemData.image_large} alt={itemData.name} />
         </div>

      </div>
   )
}

export default IngredientDetails;