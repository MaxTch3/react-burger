import { v4 as uuidv4 } from 'uuid';
import {
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT
} from '../actions/ingredients-constructor.js'

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
        const idIngredient = { ...action.item, id: uuidv4() }
        return {
          ...state, otherIngredients: [idIngredient, ...state.otherIngredients]
        }
      }
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state, otherIngredients: [...state.otherIngredients].filter((item) => item.id !== action.item.id)
      }
    }
    case MOVE_INGREDIENT: {
      const listItems = [...state.otherIngredients];
      listItems.splice(action.dragIndex, 0, listItems.splice(action.hoverIndex, 1)[0]);
      return {
        ...state, otherIngredients: listItems
      }
    }
    default: return state
  }
}
