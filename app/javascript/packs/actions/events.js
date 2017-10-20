import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchEvents = () => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get('/api/professionals/events')
      .then((response) => {
        dispatch(fetchEventsSuccess(response.data.events))
      })
      .catch((error) => dispatch(fetchEventsError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchEventsSuccess = (events) => {
  return {
    type: TYPES.FETCH_EVENTS_SUCCESS,
    events
  }
}

const fetchEventsError = (error) => {
  return {
    type: TYPES.FETCH_EVENTS_ERROR,
    error
  }
}
