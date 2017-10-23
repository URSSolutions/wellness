import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchAuth = () => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get('/api/self')
      .then((response) => {
        if (response.data.class_name === 'User') {
          return dispatch(fetchUserSuccess(response.data))
        }

        dispatch(fetchProfessionalSuccess(response.data))
      })
      .catch((error) => dispatch(fetchAuthError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchUserSuccess = (user) => {
  return {
    type: TYPES.FETCH_AUTH_USER_SUCCESS,
    user
  }
}

const fetchProfessionalSuccess = (professional) => {
  return {
    type: TYPES.FETCH_AUTH_PROFESSIONAL_SUCCESS,
    professional
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
    dispatch(showSpinner())

    API.delete('/users/sign_out')
      .then(() => window.location.replace('/'))
      .then(() => dispatch(dispatchAuthLogoutSuccess()))
      .catch((error) => dispatch(dispatchAuthLogoutError(error)))
      .then(() => dispatch(hideSpinner()))
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
