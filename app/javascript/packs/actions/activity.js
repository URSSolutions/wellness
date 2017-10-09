import * as TYPES from './types'
import API from '../services/api'

export const fetchActivities = (id) => {
  return (dispatch) => {
    API.get(`/api/activities/${id}`)
      .then(() => dispatch(fetchActivitiesSuccess()))
      .catch((error) => dispatch(fetchActivitiesError(error)))
  }
}

const fetchActivitiesSuccess = (activities) => {
  return {
    type: TYPES.FETCH_ACTIVITIES_SUCCESS,
    activities
  }
}

const fetchActivitiesError = (error) => {
  return {
    type: TYPES.FETCH_ACTIVITIES_ERROR,
    error
  }
}
