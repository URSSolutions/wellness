import * as TYPES from './types'
import API from '../services/api'

export const addActivity = () => {
  return (dispatch) => {
    API.post('/api/activities/')
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
