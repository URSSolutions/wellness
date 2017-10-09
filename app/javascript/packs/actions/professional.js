import * as TYPES from './types'
import API from '../services/api'

export const fetchProfessional = (id) => {
  return (dispatch) => {
    return API.get(`/api/events/${id}`)
      .then((response) => {
        dispatch(fetchProfessionalSuccess({ name: 'Jorge' }))
      })
      .catch((error) => dispatch(fetchProfessionalError(error)))
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
