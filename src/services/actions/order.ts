import { AppDispatch, AppThunk } from "../types";
import { postOrderData } from '../../utils/burgers-api';
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const GET_ORDER_RESET: 'GET_ORDER_RESET' = 'GET_ORDER_RESET';

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderSuccess{
  readonly type: typeof GET_ORDER_SUCCESS;
  orderNumber: number
}
export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}
export interface IGetOrderReset {
  readonly type: typeof GET_ORDER_RESET;
}

export type TGetOrderActions =
  IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderFailed
  | IGetOrderReset

export const getOrderData: AppThunk = (orderData: string[]) => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST
  });
  postOrderData(orderData)
    .then(res => {
      (res && res.success)
        ? dispatch({
          type: GET_ORDER_SUCCESS,
          orderNumber: res.order.number
        })
        : dispatch({
          type: GET_ORDER_FAILED
        })
    })
    .catch(() => {
      dispatch({
        type: GET_ORDER_FAILED
      })
    })
}
