import { setCookie } from "../../utils/cookie-functions";
import { refreshTokenRequest, updateUserRequest } from "../../utils/user-api";
import { REFRESH_TOKEN_FAILED, REFRESH_TOKEN_SUCCESS } from "./refresh-token";

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

const updateUserAction = (name, email, password) => (dispatch) => {
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
