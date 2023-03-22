import { getCookie } from "../../utils/cookie-functions";

const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onError, onMessage, onClose, wsSendMessage, wsInitOrders, wsClose } = wsActions;

      if (type === wsInit) { socket = new WebSocket(`${wsUrl}/all`) }
      else {
        if (type === wsInitOrders) {
          const accessToken = getCookie('token').split('Bearer ')[1];
          socket = new WebSocket(`${wsUrl}?token=${accessToken}`)
        }

      };

      if (type === wsClose && socket) {
        socket.close(1000, 'Закрытие страницы')
      }

      if (socket) {
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
          dispatch({ type: onMessage, payload: restParsedData });
        };
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        // if (type === wsSendMessage) {
        //   const accessToken = getCookie('token').split('Bearer ')[1];
        //   const message = { ...payload, token: accessToken };
        //   socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    };
  };
};

export default socketMiddleware;

