import { removeCookie } from "../../utils/cookie-functions";
import { logoutUserRequest } from "../../utils/user-api";

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

const logoutUserAction = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  logoutUserRequest()
    .then(res => {
      if (res && res.success) {
        removeCookie('token');
        localStorage.removeItem('jwt');
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
