import { combineReducers } from 'redux';
import { ingredientsData } from './ingredients-data.js';
import { ingredientsConstructor } from './ingredients-constructor.js';
import { ingredientCurrentInfo } from './ingredient-current-info.js';
import { order } from './order.js';
import { userReducer } from './user-reducer.js';
import { orderCurrentInfo } from './order-current-info.js';
import { wsReducer } from './ws-reducer.js'

export const rootReducer = combineReducers({
  ingredientsData,
  ingredientsConstructor,
  ingredientCurrentInfo,
  order,
  userReducer,
  orderCurrentInfo,
  wsReducer
});
