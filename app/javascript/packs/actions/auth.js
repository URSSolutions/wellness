import * as TYPES from './types'
import API from '../services/api'

export const fetchAuth = () => {
  return (dispatch) => {
    API.get('/api/self')
      .then((response) => {
        dispatch(fetchAuthSuccess(response.data))
      })
      .catch((error) => dispatch(fetchAuthError(error)))
  }
}

const fetchAuthSuccess = (auth) => {
  return {
    type: TYPES.FETCH_AUTH_SUCCESS,
    auth
  }
}

const fetchAuthError = (error) => {
  return {
    type: TYPES.FETCH_AUTH_ERROR,
    error
  }
}

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
