import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS } from '../actions/user-actions'

const initialState = {
  user: { name: '', email: '' },
  registerRequest: false,
  registerSuccess: false,
  registerFailed: false
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state, registerRequest: true
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state, user: action.user, registerRequest: false
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state, registerRequest: false, registerFailed: true
      }
    }
    default: { return state }
  }
}
