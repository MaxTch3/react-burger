import {
  GET_ORDER_CURRENT_INFO,
  REMOVE_ORDER_CURRENT_INFO
} from "../actions/order-current-info"


const initialState = {
  order: null
}

export const orderCurrentInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_CURRENT_INFO: {
      return {
        ...state, order: action.order
      }
    }
    case REMOVE_ORDER_CURRENT_INFO: {
      return {
        ...state, order: null
      }
    }
    default: return state
  }
}
