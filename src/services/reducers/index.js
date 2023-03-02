import { combineReducers } from 'redux';
import { ingredientsData } from './ingredients-data.js';
import { ingredientsConstructor } from './ingredients-constructor.js';
import { ingredientCurrentInfo } from './ingredient-current-info.js';
import { order } from './order.js';
import { registerReducer } from './user-reducers.js';

export const rootReducer = combineReducers({
  ingredientsData,
  ingredientsConstructor,
  ingredientCurrentInfo,
  order,
  registerReducer
});
