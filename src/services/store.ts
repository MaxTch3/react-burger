
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import socketMiddleware from './middleware/socket-middleware';
import { wsActions } from './actions/ws-actions';

const wsUrl = 'wss://norma.nomoreparties.space/orders';
declare const window: any;

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)))
);
