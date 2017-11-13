import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchUser = (id) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`api/users/${id}`)
      .then((response) => {
        dispatch(fetchUserSuccess(response.data))
      })
      .catch((error) => dispatch(fetchUserError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchUserSuccess = (user) => {
  return {
    type: TYPES.FETCH_USER_SUCCESS,
    user
  }
}

const fetchUserError = (error) => {
  return {
    type: TYPES.FETCH_USER_ERROR,
    error
  }
}
