import { TOrderInfo } from "./order-current-info";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_CONNECTION_END: 'WS_CONNECTION_END' = 'WS_CONNECTION_END';

export const WS_CONNECTION_ORDERS_START: 'WS_CONNECTION_ORDERS_START' = 'WS_CONNECTION_ORDERS_START';
export const WS_CONNECTION_ORDERS_SUCCESS: 'WS_CONNECTION_ORDERS_SUCCESS' = 'WS_CONNECTION_ORDERS_SUCCESS';
export const WS_CONNECTION_ORDERS_ERROR: 'WS_CONNECTION_ORDERS_ERROR' = 'WS_CONNECTION_ORDERS_ERROR';
export const WS_GET_ORDERS_MESSAGE: 'WS_GET_ORDERS_MESSAGE' = 'WS_GET_ORDERS_MESSAGE';
export const WS_CONNECTION_ORDERS_CLOSED: 'WS_CONNECTION_ORDERS_CLOSED' = 'WS_CONNECTION_ORDERS_CLOSED';
export const WS_SEND_ORDERS_MESSAGE: 'WS_SEND_ORDERS_MESSAGE' = 'WS_SEND_ORDERS_MESSAGE';
export const WS_CONNECTION_ORDERS_END: 'WS_CONNECTION_ORDERS_END' = 'WS_CONNECTION_ORDERS_END';

export interface IPayload {
  orders: TOrderInfo[];
  total: number;
  totalToday: number;
}

export interface IConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  payload: IPayload;
}

export interface IConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface ISendMessage {
  readonly type: typeof WS_SEND_MESSAGE;
}

export interface IConnectionEnd {
  readonly type: typeof WS_CONNECTION_END;
}

export interface IConnectionOrdersStart {
  readonly type: typeof WS_CONNECTION_ORDERS_START;
}

export interface IConnectionOrdersSuccess {
  readonly type: typeof WS_CONNECTION_ORDERS_SUCCESS;
}

export interface IConnectionOrdersError {
  readonly type: typeof WS_CONNECTION_ORDERS_ERROR;
}

export interface IGetOrdersMessage {
  readonly type: typeof WS_GET_ORDERS_MESSAGE;
  payload: IPayload;
}

export interface IConnectionOrdersClosed {
  readonly type: typeof WS_CONNECTION_ORDERS_CLOSED;
}

export interface ISendOrdersMessage {
  readonly type: typeof WS_SEND_ORDERS_MESSAGE;
}

export interface IConnectionOrdersEnd {
  readonly type: typeof WS_CONNECTION_ORDERS_END;
}

export type TWsConnectActions =
  IConnectionStart
  | IConnectionSuccess
  | IConnectionError
  | IGetMessage
  | IConnectionClosed
  | ISendMessage
  | IConnectionEnd
  | IConnectionOrdersStart
  | IConnectionOrdersSuccess
  | IConnectionOrdersError
  | IGetOrdersMessage
  | IConnectionOrdersClosed
  | ISendOrdersMessage
  | IConnectionOrdersEnd;

export interface IWsActions {
  readonly wsInit: typeof WS_CONNECTION_START;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onMessage: typeof WS_GET_MESSAGE;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly wsSendMessage: typeof WS_SEND_MESSAGE;
  readonly wsClose: typeof WS_CONNECTION_END;
  readonly wsInitOrders: typeof WS_CONNECTION_ORDERS_START;
  readonly onOpenOrders: typeof WS_CONNECTION_ORDERS_SUCCESS;
  readonly onErrorOrders: typeof WS_CONNECTION_ORDERS_ERROR;
  readonly onMessageOrders: typeof WS_GET_ORDERS_MESSAGE;
  readonly onCloseOrders: typeof WS_CONNECTION_ORDERS_CLOSED;
  readonly wsSendMessageOrders: typeof WS_SEND_ORDERS_MESSAGE;
  readonly wsCloseOrders: typeof WS_CONNECTION_ORDERS_END;
}

export const wsActions: IWsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
  onClose: WS_CONNECTION_CLOSED,
  wsSendMessage: WS_SEND_MESSAGE,
  wsClose: WS_CONNECTION_END,
  wsInitOrders: WS_CONNECTION_ORDERS_START,
  onOpenOrders: WS_CONNECTION_ORDERS_SUCCESS,
  onErrorOrders: WS_CONNECTION_ORDERS_ERROR,
  onMessageOrders: WS_GET_ORDERS_MESSAGE,
  onCloseOrders: WS_CONNECTION_ORDERS_CLOSED,
  wsSendMessageOrders: WS_SEND_ORDERS_MESSAGE,
  wsCloseOrders: WS_CONNECTION_ORDERS_END
}

