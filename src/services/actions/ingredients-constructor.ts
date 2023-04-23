import { TIngredient } from "../../utils/component-types";
import { TIngredientConstructor } from "../reducers/ingredients-constructor";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT: 'REMOVE_INGREDIENT' = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';
export const RESET_INGREDIENTS: 'RESET_INGREDIENTS' = 'RESET_INGREDIENTS';


export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  item: TIngredient
}

export interface IRemoveIngredient {
  readonly type: typeof REMOVE_INGREDIENT;
  item: TIngredientConstructor
}

export interface IMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT;
  item: TIngredientConstructor,
  dragIndex: number,
  hoverIndex: number
}

export interface IResetIngredient {
  readonly type: typeof RESET_INGREDIENTS;
}

export type TIngredientsConstructorActions =
  IAddIngredient
  | IRemoveIngredient
  | IMoveIngredient
  | IResetIngredient;

