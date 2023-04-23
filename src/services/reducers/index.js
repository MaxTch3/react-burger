import { combineReducers } from 'redux';
import { ingredientsData } from './ingredients-data';
import { ingredientsConstructor } from './ingredients-constructor';
import { ingredientCurrentInfo } from './ingredient-current-info';
import { order } from './order';
import { userReducer } from './user-reducer';
import { orderCurrentInfo } from './order-current-info';
import { wsReducer } from './ws-reducer';
import { wsReducerOrders } from './auth-ws-reducer'

export const rootReducer = combineReducers({
  ingredientsData,
  ingredientsConstructor,
  ingredientCurrentInfo,
  order,
  userReducer,
  orderCurrentInfo,
  wsReducer,
  wsReducerOrders
});
