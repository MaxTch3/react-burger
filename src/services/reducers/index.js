import { combineReducers } from 'redux';
import { ingredientsData } from './ingredients-data.js';
import { ingredientsConstructor } from './ingredients-constructor.js';
import { ingredientCurrentInfo } from './ingredient-current-info.js';
import { order } from './order.js';
import { userReducer } from './user-reducer.js';

export const rootReducer = combineReducers({
  ingredientsData,
  ingredientsConstructor,
  ingredientCurrentInfo,
  order,
  userReducer
});
