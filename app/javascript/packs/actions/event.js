import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchEvent = (id) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`/api/events/${id}`)
      .then((response) => {
        dispatch(fetchEventSuccess(response.data))
      })
      .catch((error) => dispatch(fetchEventError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchEventSuccess = (event) => {
  return {
    type: TYPES.FETCH_EVENT_SUCCESS,
    event
  }
}

const fetchEventError = (error) => {
  return {
    type: TYPES.FETCH_EVENT_ERROR,
    error
  }
}

export const resetEvent = () => {
  return (dispatch) => {
    dispatch(resetEventSuccess())
  }
}

const resetEventSuccess = () => {
  return {
    type: TYPES.RESET_EVENT
  }
}
