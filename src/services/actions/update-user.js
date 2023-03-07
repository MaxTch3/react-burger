import { updateUserRequest } from "../../utils/user-api";
import refreshTokenAction from "./refresh-token";

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
        dispatch(refreshTokenAction());
        updateUserRequest(name, email, password)
          .then((res) => {
            dispatch({ type: UPDATE_USER_SUCCESS, user: res.user })
          })
      } else { dispatch({ type: UPDATE_USER_FAILED }) }
    })
}

export default updateUserAction;
