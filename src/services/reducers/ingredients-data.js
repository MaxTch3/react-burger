import {
   GET_INGREDIENTS_DATA_REQUEST,
   GET_INGREDIENTS_DATA_SUCCESS,
   GET_INGREDIENTS_DATA_FAILED
} from '../actions/ingredients-data.js'

const initialState = {
   data: [],
   dataRequest: false,
   dataFailed: false,
}

export const ingredientsData = (state = initialState, action) => {
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
            ...state, dataRequest: false, dataFailed: true
         }
      }

      default: { return state }
   }
}


