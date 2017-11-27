import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchProfessionals = (eventId) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`/api/events/${eventId}/professionals/`)
      .then((response) => {
        dispatch(fetchProfessionalsSuccess(response.data))
      })
      .catch((error) => dispatch(fetchProfessionalsError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchProfessionalsSuccess = (professionals) => {
  return {
    type: TYPES.FETCH_PROFESSIONALS_SUCCESS,
    professionals
  }
}

const fetchProfessionalsError = (error) => {
  return {
    type: TYPES.FETCH_PROFESSIONALS_ERROR,
    error
  }
}
