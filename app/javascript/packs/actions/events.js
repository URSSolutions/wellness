import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchEvent = (id) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`/api/events/${id}`)
      .then((response) => {
        dispatch(fetchEventsSuccess(response.data))
      })
      .catch((error) => dispatch(fetchEventsError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchEventsSuccess = (event) => {
  return {
    type: TYPES.FETCH_EVENTS_SUCCESS,
    event
  }
}

const fetchEventsError = (error) => {
  return {
    type: TYPES.FETCH_EVENTS_ERROR,
    error
  }
}
