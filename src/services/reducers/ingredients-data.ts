import {
  GET_INGREDIENTS_DATA_REQUEST,
  GET_INGREDIENTS_DATA_SUCCESS,
  GET_INGREDIENTS_DATA_FAILED,
  TIngredientsDataActions
} from '../actions/ingredients-data'
import { TIngredient } from '../../utils/component-types'

type TInitialState = {
  data: TIngredient[];
  dataRequest: Boolean;
  dataFailed: Boolean
}
const initialState: TInitialState = {
  data: [],
  dataRequest: false,
  dataFailed: false,
}

export const ingredientsData = (state = initialState, action: TIngredientsDataActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_DATA_REQUEST: {
      return {
        ...state, dataRequest: true
      }
    }
    case GET_INGREDIENTS_DATA_SUCCESS: {
      return {
        ...state, data: action.data, dataRequest: false
      }
    }
    case GET_INGREDIENTS_DATA_FAILED: {
      return {
        data: [], dataRequest: false, dataFailed: true,
      }
    }

    default: { return state }
  }
}

