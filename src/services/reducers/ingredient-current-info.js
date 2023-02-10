import {
  GET_INGREDIENT_CURRENT_INFO,
  REMOVE_INGREDIENT_CURRENT_INFO
} from '../actions/ingredient-current-info.js'

const initialState = {
  item: null
}

export const ingredientCurrentInfo = (state = initialState, action) => {
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
