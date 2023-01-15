import {string, number, shape, arrayOf} from 'prop-types';

export const ingredientType = shape({
  _id: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  proteins: number.isRequired,
  fat: number.isRequired,
  carbohydrates: number.isRequired,
  calories: number.isRequired,
  price: number.isRequired,
  image: string.isRequired,
  image_mobile: string.isRequired,
  image_large: string.isRequired,
  __v: number.isRequired,
}).isRequired;

export const ingredientsType = arrayOf(ingredientType).isRequired;
