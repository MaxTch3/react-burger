import { Middleware } from "redux";
import { getCookie } from "../../utils/cookie-functions";
import { IWsActions } from "../actions/ws-actions";
import { TOrderInfo } from "../types/types";

const socketMiddleware = (wsUrl: string, wsActions: IWsActions): Middleware => {
  return store => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit,
        wsInitOrders,
        onOpen,
        onOpenOrders,
        onError,
        onErrorOrders,
        onMessage,
        onMessageOrders,
        onClose,
        onCloseOrders } = wsActions;

      if (type === wsInit) { socket = new WebSocket(`${wsUrl}/all`) }
      else {
        const token = getCookie('token')
        if (type === wsInitOrders && token) {
          const accessToken = token.split('Bearer ')[1];
          socket = new WebSocket(`${wsUrl}?token=${accessToken}`)
        }
      };

      if (socket && type === wsInit) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (restParsedData.orders) {
            restParsedData.orders.sort(function (a: TOrderInfo, b: TOrderInfo) {
              return b.number - a.number
            });
            dispatch({ type: onMessage, payload: restParsedData });
          }
        };
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
      }

      if (socket && type === wsInitOrders) {
        socket.onopen = event => {
          dispatch({ type: onOpenOrders, payload: event });
        };
        socket.onerror = event => {
          dispatch({ type: onErrorOrders, payload: event });
        };
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (restParsedData.orders) {
            restParsedData.orders.sort(function (a: any, b: any) {
              return b.number - a.number
            });
            dispatch({ type: onMessageOrders, payload: restParsedData });
          }
        };
        socket.onclose = event => {
          dispatch({ type: onCloseOrders, payload: event });
        };

      }

      next(action);
    };
  };
};

export default socketMiddleware;

