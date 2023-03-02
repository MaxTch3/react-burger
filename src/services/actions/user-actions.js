import { registerUser } from "../../utils/user-api";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const registerAction = (email, password, name) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST
  });
  registerUser(email, password, name)
    .then(res => {
      if (res && res.success) {
        setCookie('token', res.accessToken, { expires: 1200 });
        localStorage.setItem("jwt", res.refreshToken);
        dispatch({
          type: REGISTER_SUCCESS,
          user: res.user
        })
      }
      else {
        dispatch({
          type: REGISTER_FAILED
        })
      }
    })
    .catch(() => {
      dispatch({
        type: REGISTER_FAILED
      })
    })
}

