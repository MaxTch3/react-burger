import { ThunkAction } from "redux-thunk";
import { store } from "./store";
import { Action, ActionCreator } from "redux";
import { TForgotActions } from "./actions/forgot-password";
import { TGetUserActions } from "./actions/get-user";
import { TIngredientsDataActions } from "./actions/ingredients-data";
import { TLoginActions } from "./actions/login-user";
import { TLogoutActions } from "./actions/logout-user";
import { TGetOrderActions } from "./actions/order";
import { TRefreshTokenActions } from "./actions/refresh-token";
import { TRegisterActions } from "./actions/register-user";
import { TResetActions } from "./actions/reset-password";
import { TUpdateUserActions } from "./actions/update-user";
import { TWsConnectActions } from "./actions/ws-actions";

type TApplicationActions =
  TForgotActions
  | TGetUserActions
  | TIngredientsDataActions
  | TLoginActions
  | TLogoutActions
  | TGetOrderActions
  | TRefreshTokenActions
  | TRegisterActions
  | TResetActions
  | TUpdateUserActions
  | TWsConnectActions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;
