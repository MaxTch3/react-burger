import {
  GET_ORDER_CURRENT_INFO,
  REMOVE_ORDER_CURRENT_INFO,
  TOrderInfo,
  TOrderCurrentInfoActons
} from "../actions/order-current-info"

type TInitialState = {
  order: TOrderInfo | null
}

const initialState: TInitialState = {
  order: null
}

export const orderCurrentInfo = (state = initialState, action: TOrderCurrentInfoActons) => {
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
