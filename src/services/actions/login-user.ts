import { AppDispatch, AppThunk } from "../types";
import { setCookie } from "../../utils/cookie-functions";
import { loginUser } from "../../utils/user-api";
import { IUser } from "../types/types";

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  user: IUser
}

export interface ILoginFailed{
  readonly type: typeof LOGIN_FAILED
}

export type TLoginActions =
  ILoginRequest
  | ILoginSuccess
  | ILoginFailed

const loginAction: AppThunk = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });
  loginUser(email, password)
    .then(res => {
      if (res && res.success) {
        setCookie('token', res.accessToken, { expires: 1200 });
        localStorage.setItem("jwt", res.refreshToken);
        dispatch({ type: LOGIN_SUCCESS, user: res.user })
      }
      else {
        dispatch({ type: LOGIN_FAILED })
      }
    })
    .catch(() => {
      dispatch({ type: LOGIN_FAILED })
    })
}

export default loginAction;
