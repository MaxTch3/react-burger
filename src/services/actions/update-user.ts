import { AppDispatch, AppThunk } from "../types";
import { setCookie } from "../../utils/cookie-functions";
import { refreshTokenRequest, updateUserRequest } from "../../utils/user-api";
import { IUser } from "./get-user";
import { REFRESH_TOKEN_FAILED, REFRESH_TOKEN_SUCCESS } from "./refresh-token";

export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED';

export interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS;
  user: IUser
}
export interface IUpdateUserFailed {
  readonly type: typeof UPDATE_USER_FAILED;
}

export type TUpdateUserActions =
  IUpdateUserRequest
  | IUpdateUserSuccess
  | IUpdateUserFailed

const updateUserAction: AppThunk = (name: string, email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: UPDATE_USER_REQUEST
  });
  updateUserRequest(name, email, password)
    .then(res => { dispatch({ type: UPDATE_USER_SUCCESS, user: res.user }) })
    .catch(() => {
      const refreshToken = localStorage.getItem('jwt');
      if (refreshToken) {
        refreshTokenRequest()
          .then(res => {
            if (res && res.success) {
              setCookie('token', res.accessToken, { expires: 1200 });
              localStorage.setItem("jwt", res.refreshToken);
              dispatch({ type: REFRESH_TOKEN_SUCCESS })
            }
            else {
              dispatch({ type: REFRESH_TOKEN_FAILED })
            }
          })
          .then(() => {
            updateUserRequest(name, email, password)
              .then((res) => {
                dispatch({ type: UPDATE_USER_SUCCESS, user: res.user })
              })
          })
      } else { dispatch({ type: UPDATE_USER_FAILED }) }
    })
}

export default updateUserAction;
