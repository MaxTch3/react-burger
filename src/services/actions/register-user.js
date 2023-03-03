import { setCookie } from "../../utils/cookie-functions";
import { registerUser } from "../../utils/user-api";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';



const registerAction = (email, password, name) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST
  });
  registerUser(email, password, name)
    .then(res => {
      if (res && res.success) {
        setCookie('token', res.accessToken, { expires: 1200 });
        localStorage.setItem("jwt", res.refreshToken);
        dispatch({type: REGISTER_SUCCESS,user: res.user})
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

