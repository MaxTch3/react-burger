import {
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_RESET,
  GET_ORDER_SUCCESS,
  TGetOrderActions
} from "../actions/order"

type TInitialState = {
  orderNumber: number,
  orderRequest: boolean,
  orderFailed: boolean
}

const initialState: TInitialState = {
  orderNumber: 0,
  orderRequest: false,
  orderFailed: false
}

export const order = (state = initialState, action: TGetOrderActions) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state, orderRequest: true
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state, orderNumber: action.orderNumber, orderRequest: false
      }
    }
    case GET_ORDER_FAILED: {
      return {
        orderNumber: 0, orderRequest: false, orderFailed: true
      }
    }
    case GET_ORDER_RESET: {
      return initialState
    }

    default: { return state }
  }
}
