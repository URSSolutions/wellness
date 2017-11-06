import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchCurrentDay = (userId, subscriptionId, dayId) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`/api/users/${userId}/subscriptions/${subscriptionId}/current_day`)
      .then((response) => {
        if (response.data) {
          return dispatch(fetchCurrentDaySuccess(response.data))
        }

        dispatch(fetchCurrentDayError(response.data))
      })
      .catch((error) => dispatch(fetchCurrentDayError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchCurrentDaySuccess = (currentDay) => {
  return {
    type: TYPES.FETCH_CURRENT_DAY_SUCCESS,
    currentDay
  }
}

const fetchCurrentDayError = (error) => {
  return {
    type: TYPES.FETCH_CURRENT_DAY_ERROR,
    error
  }
}
