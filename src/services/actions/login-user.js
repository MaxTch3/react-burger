import { setCookie } from "../../utils/cookie-functions";
import { loginUser } from "../../utils/user-api";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';



const loginAction = (email, password) => (dispatch) => {
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
