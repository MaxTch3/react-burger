import { FORGOT_FAILED, FORGOT_REQUEST, FORGOT_SUCCESS } from '../actions/forgot-password'
import { GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actions/get-user'
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/login-user'
import { LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/logout-user'
import { REFRESH_TOKEN_FAILED, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS } from '../actions/refresh-token'
import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from '../actions/register-user'
import { RESET_FAILED, RESET_REQUEST, RESET_SUCCESS } from '../actions/reset-password'
import { UPDATE_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../actions/update-user'

const initialState = {
  user: { name: '', email: '' },
  isAuthorization: false,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  forgotRequest: false,
  forgotFailed: false,
  forgotCodeSend: false,

  resetRequest: false,
  resetFailed: false,
  resetSucces: false,

  getUserRequest: false,
  getUserFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,

  logoutUserRequest: false,
  logoutUserFailed: false
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

    case RESET_REQUEST: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        resetSucces: false
      }
    }
    case RESET_SUCCESS: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: false,
        resetSuccess: true
      }
    }
    case RESET_FAILED: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: true,
        resetSucces: false
      }
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        getUserRequest: false,
        getUserFailed: false,
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
      }
    }

    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false,
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        updateUserRequest: false,
        updateUserFailed: false,
      }
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true,
      }
    }

    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenFailed: false,
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: false,
      }
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: true,
      }
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutUserRequest: true,
        logoutUserFailed: false,
      }
    }
    case LOGOUT_SUCCESS: {
      return initialState
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutUserRequest: false,
        logoutUserFailed: true,
      }
    }

    default: { return state }
  }
}
