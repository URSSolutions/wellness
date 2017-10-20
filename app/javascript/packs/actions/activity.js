import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const addActivity = (activity) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.post('/api/activities/', activity)
      .then((response) => dispatch(addActivitySuccess(response.data)))
      .catch((error) => dispatch(addActivityError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const addActivitySuccess = (activityCreated) => {
  return {
    type: TYPES.ADD_ACTIVITY_SUCCESS,
    activityCreated
  }
}

const addActivityError = (error) => {
  return {
    type: TYPES.ADD_ACTIVITY_ERROR,
    error
  }
}
