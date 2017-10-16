import * as TYPES from './types'
import API from '../services/api'

export const fetchEvents = () => {
  return (dispatch) => {
    return API.get('/api/professionals/events')
      .then((response) => {
        dispatch(fetchEventsSuccess(response.data.events))
      })
      .catch((error) => dispatch(fetchEventsError(error)))
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
