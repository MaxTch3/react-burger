import { AppDispatch, AppThunk } from "../types";
import { resetPassword } from "../../utils/user-api";

export const RESET_REQUEST: 'RESET_REQUEST' = 'RESET_REQUEST';
export const RESET_SUCCESS: 'RESET_SUCCESS' = 'RESET_SUCCESS';
export const RESET_FAILED: 'RESET_FAILED' = 'RESET_FAILED';

export interface IResetRequest {
  readonly type: typeof RESET_REQUEST;
}
export interface IResetSuccess {
  readonly type: typeof RESET_SUCCESS
}
export interface IResetFailed {
  readonly type: typeof RESET_FAILED;
}

export type TResetActions =
  IResetRequest
  | IResetSuccess
  | IResetFailed

const resetAction: AppThunk = (password: string, token: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: RESET_REQUEST
  });
  resetPassword(password, token)
    .then(res => {
      if (res && res.success) {
        dispatch({ type: RESET_SUCCESS });
      }
      else {
        dispatch({ type: RESET_FAILED })
      }
    })
    .catch(() => {
      dispatch({ type: RESET_FAILED })
    })
}


export default resetAction;
