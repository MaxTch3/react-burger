import { AppDispatch, AppThunk } from "../types";
import { getUserRequest } from "../../utils/user-api";
import { refreshTokenAction } from "./refresh-token";
import { IUser } from "../types/types";

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export interface IGetRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  user: IUser
}

export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
}

export type TGetUserActions =
  IGetRequest
  | IGetSuccess
  | IGetUserFailed;

const getUserAction: AppThunk = () => (dispatch: AppDispatch | AppThunk) => {
  dispatch({
    type: GET_USER_REQUEST
  });
  getUserRequest()
    .then(res => { dispatch({ type: GET_USER_SUCCESS, user: res.user }) })
    .catch(() => {
      const refreshToken = localStorage.getItem('jwt');
      if (refreshToken) {
        dispatch(refreshTokenAction());
        getUserRequest()
          .then((res) => {
            dispatch({ type: GET_USER_SUCCESS, user: res.user })
          })
      } else { dispatch({ type: GET_USER_FAILED }) }
    })
}

export default getUserAction;
