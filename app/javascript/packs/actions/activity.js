import * as TYPES from './types'
import API from '../services/api'

export const addActivity = (activity) => {
  return (dispatch) => {
    return API.post('/api/activities/', activity)
      .then((response) => dispatch(addActivitySuccess(response.data)))
      .catch((error) => dispatch(addActivityError(error)))
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
