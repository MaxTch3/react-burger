import { TIngredient } from "../types/types";

export const GET_INGREDIENT_CURRENT_INFO: 'GET_INGREDIENT_CURRENT_INFO' = 'GET_INGREDIENT_CURRENT_INFO';
export const REMOVE_INGREDIENT_CURRENT_INFO: 'REMOVE_INGREDIENT_CURRENT_INFO' = 'REMOVE_INGREDIENT_CURRENT_INFO';

export interface IGetIngredientCurrentInfo {
  readonly type: typeof GET_INGREDIENT_CURRENT_INFO;
  item: TIngredient
}

export interface IRemoveIngredientCurrentInfo {
  readonly type: typeof REMOVE_INGREDIENT_CURRENT_INFO;
}

export type TIngredientsCurrentInfoActions =
  IGetIngredientCurrentInfo
  | IRemoveIngredientCurrentInfo;
