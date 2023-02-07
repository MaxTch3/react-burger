import { postOrderData } from '../../utils/burgers-api.js';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const getOrderData = (orderData) => (dispatch) => {
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
