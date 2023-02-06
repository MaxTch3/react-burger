import { combineReducers } from 'redux';
import { ingredientsData } from './ingredientsData.js';
import { ingredientsConstructor } from './ingredientsConstructor.js';
import { ingredientCurrentInfo } from './ingredientCurrentInfo.js';
import { order } from './order.js';

export const rootReducer = combineReducers({ ingredientsData, ingredientsConstructor, ingredientCurrentInfo, order });
