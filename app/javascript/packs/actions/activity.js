import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const fetchActivities = (userId, subscriptionId, dayId) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`api/users/${userId}/subscriptions/${subscriptionId}/days/${dayId}/activities`)
      .then((response) => dispatch(fetchActivitiesSuccess(response.data)))
      .catch((error) => dispatch(fetchActivitiesError(error)))
      .then(() => dispatch(hideSpinner()))
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

export const addActivity = (userId, subscriptionId, dayId, activity) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.post(`api/users/${userId}/subscriptions/${subscriptionId}/days/${dayId}/activities/`, activity)
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
