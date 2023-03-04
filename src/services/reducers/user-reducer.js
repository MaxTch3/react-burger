import { FORGOT_FAILED, FORGOT_REQUEST, FORGOT_SUCCESS } from '../actions/forgot-password'
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/login-user'
import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from '../actions/register-user'

const initialState = {
  user: { name: '', email: '' },
  isAuthorization: false,
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  forgotRequest: false,
  forgotFailed: false,
  forgotCodeSend: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state, registerRequest: true, registerFailed: false
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isAuthorization: true,
        user: action.user,
        registerRequest: false,
        registerFailed: false
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state, registerRequest: false, registerFailed: true
      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state, loginRequest: true, loginFailed: false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthorization: true,
        user: action.user,
        loginRequest: false,
        loginFailed: false
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state, loginRequest: false, loginFailed: true
      }
    }

    case FORGOT_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
        forgotFailed: false,
        forgotCodeSend: false
      }
    }
    case FORGOT_SUCCESS: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: false,
        forgotCodeSend: true
      }
    }
    case FORGOT_FAILED: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: true,
        forgotCodeSend: false
      }
    }
    default: { return state }
  }
}
