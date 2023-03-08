import { removeCookie } from "../../utils/cookie-functions";
import { logoutUserRequest } from "../../utils/user-api";

export const LOGOUT_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const LOGOUT_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const LOGOUT_FAILED = 'REFRESH_TOKEN_FAILED';

const logoutUserAction = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  logoutUserRequest()
    .then(res => {
      if (res && res.success) {
        localStorage.removeItem('jwt');
        removeCookie('token');
        dispatch({ type: LOGOUT_SUCCESS })
      }
      else {
        dispatch({ type: LOGOUT_FAILED })
      }
    })
    .catch(() => {
      dispatch({ type: LOGOUT_FAILED })
    })
}

export default logoutUserAction;
