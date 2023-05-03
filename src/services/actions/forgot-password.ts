import { AppDispatch, AppThunk } from "../types";
import { forgotPassword } from "../../utils/user-api";

export const FORGOT_REQUEST: 'FORGOT_REQUEST' = 'FORGOT_REQUEST';
export const FORGOT_SUCCESS: 'FORGOT_SUCCESS' = 'FORGOT_SUCCESS';
export const FORGOT_FAILED: 'FORGOT_FAILED' = 'FORGOT_FAILED';

export interface IForgotRequest {
  readonly type: typeof FORGOT_REQUEST;
}

export interface IForgotSuccess {
  readonly type: typeof FORGOT_SUCCESS;
}

export interface IForgotFailed {
  readonly type: typeof FORGOT_FAILED;
}

export type TForgotActions =
  IForgotRequest
  | IForgotSuccess
  | IForgotFailed;


const forgotAction: AppThunk = (email: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: FORGOT_REQUEST
  });
  forgotPassword(email)
    .then(res => {
      if (res && res.success) {
        dispatch({ type: FORGOT_SUCCESS });
      }
      else {
        dispatch({ type: FORGOT_FAILED })
      }
    })
    .catch(() => {
      dispatch({ type: FORGOT_FAILED })
    })
}

export default forgotAction;
