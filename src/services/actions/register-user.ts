import { AppDispatch } from "../../components/app/App";
import { setCookie } from "../../utils/cookie-functions";
import { TUserAnswer, registerUser } from "../../utils/user-api";

export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_FAILED: 'REGISTER_FAILED' = 'REGISTER_FAILED';

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  user: TUserAnswer
}
export interface IRegisterFailed {
  readonly type: typeof REGISTER_FAILED;
}

export type TRegisterActions =
  IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailed

const registerAction = (email: string, password: string, name: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: REGISTER_REQUEST
  });
  registerUser(email, password, name)
    .then(res => {
      if (res && res.success) {
        setCookie('token', res.accessToken, { expires: 1200 });
        localStorage.setItem("jwt", res.refreshToken);
        dispatch({type: REGISTER_SUCCESS, user: res.user})
      }
      else {
        dispatch({ type: REGISTER_FAILED })
      }
    })
    .catch(() => {
      dispatch({ type: REGISTER_FAILED })
    })
}

export default registerAction;

