import {
  GET_INGREDIENT_CURRENT_INFO,
  REMOVE_INGREDIENT_CURRENT_INFO,
  TIngredientsCurrentInfoActions
} from '../actions/ingredient-current-info'
import { TIngredient } from '../types/types'

type TInitialState = {
  item: TIngredient | null
}

const initialState: TInitialState = {
  item: null
}

export const ingredientCurrentInfo = (state = initialState, action: TIngredientsCurrentInfoActions) => {
  switch (action.type) {
    case GET_INGREDIENT_CURRENT_INFO: {
      return {
        ...state, item: action.item
      }
    }
    case REMOVE_INGREDIENT_CURRENT_INFO: {
      return {
        ...state, item: null
      }
    }
    default: return state
  }
}
