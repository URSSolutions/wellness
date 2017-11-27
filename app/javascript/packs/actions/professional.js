import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchProfessional = (eventId, id) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`/api/events/${eventId}/professionals/${id}`)
      .then((response) => {
        dispatch(fetchProfessionalSuccess(response.data))
      })
      .catch((error) => dispatch(fetchProfessionalError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchProfessionalSuccess = (professional) => {
  return {
    type: TYPES.FETCH_PROFESSIONAL_SUCCESS,
    professional
  }
}

const fetchProfessionalError = (error) => {
  return {
    type: TYPES.FETCH_PROFESSIONAL_ERROR,
    error
  }
}
