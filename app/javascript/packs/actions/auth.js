import * as TYPES from './types'
import API from '../services/api'

export const dispatchAuthLogout = () => {
  return (dispatch) => {
    API.delete('/users/sign_out')
      .then(() => dispatch(dispatchAuthLogoutSuccess()))
      .catch((error) => dispatch(dispatchAuthLogoutError(error)))
  }
}

const dispatchAuthLogoutSuccess = () => {
  return {
    type: TYPES.DISPATCH_AUTH_LOGOUT_SUCCESS
  }
}

const dispatchAuthLogoutError = (error) => {
  return {
    type: TYPES.DISPATCH_AUTH_LOGOUT_ERROR,
    error
  }
}
