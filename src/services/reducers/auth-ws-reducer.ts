import { TOrderInfo } from '../actions/order-current-info';
import {
  WS_CONNECTION_ORDERS_SUCCESS,
  WS_CONNECTION_ORDERS_ERROR,
  WS_CONNECTION_ORDERS_CLOSED,
  WS_GET_ORDERS_MESSAGE,
  WS_CONNECTION_ORDERS_END,
  TWsConnectActions
} from '../actions/ws-actions';

type TInitialState = {
  orders: TOrderInfo[];
  total: number;
  totalToday: number;
  wsConnected: boolean
};

const initialState: TInitialState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false
};

export const wsReducerOrders = (state = initialState, action: TWsConnectActions) => {

  switch (action.type) {

    case WS_CONNECTION_ORDERS_SUCCESS:
      return {
        ...state,
        wsConnected: true
      };

    case WS_CONNECTION_ORDERS_ERROR:
      return {
        ...state,
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false
      };

    case WS_CONNECTION_ORDERS_CLOSED:
      return {
        ...state,
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false
      };

    case WS_CONNECTION_ORDERS_END:
      return {
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false
      };

    case WS_GET_ORDERS_MESSAGE:
      return {

        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default: return state;
  }
};
