import { forgotPassword } from "../../utils/user-api";

export const FORGOT_REQUEST = 'FORGOT_REQUEST';
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS';
export const FORGOT_FAILED = 'FORGOT_FAILED';

const forgotAction = (email) => (dispatch) => {
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
