import { AppDispatch, AppThunk } from "../types";
import { setCookie } from "../../utils/cookie-functions";
import { refreshTokenRequest } from "../../utils/user-api";

export const REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST' = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS' = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED: 'REFRESH_TOKEN_FAILED' = 'REFRESH_TOKEN_FAILED';

export interface IRefreshTokenRequest {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}
export interface IRefreshTokenSuccess {
  readonly type: typeof REFRESH_TOKEN_SUCCESS
}
export interface IRefreshTokenFailed {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export type TRefreshTokenActions =
  IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenFailed

export const refreshTokenAction: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({ type: REFRESH_TOKEN_REQUEST });
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
    .catch(() => {
      dispatch({ type: REFRESH_TOKEN_FAILED })
    })
}

//export default refreshTokenAction;
