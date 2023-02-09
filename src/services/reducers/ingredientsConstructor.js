import { ADD_INGREDIENT } from "../actions/ingredientsConstructor.js"
const initialState = {
  bun: null,
  otherIngredients: []
}

export const ingredientsConstructor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.item.type === 'bun') {
        return {
          ...state, bun: action.item
        }
      } else {
        return {
          ...state, otherIngredients: [action.item, ...state.otherIngredients]
        }
      }
    }
    default: return state
  }
}
