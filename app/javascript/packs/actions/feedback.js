import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const addFeedback = (userId, subscriptionId, dayId = 1, feedback) => {
  return (dispatch) => {
    dispatch(showSpinner())

    API.post(`api/users/${userId}/subscriptions/${subscriptionId}/days/${dayId}/feedbacks`, feedback)
      .then((response) => dispatch(addFeedbackSuccess(response.data)))
      .catch((error) => dispatch(addFeedbackError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const addFeedbackSuccess = (feedbackCreated) => {
  return {
    type: TYPES.ADD_FEEDBACK_SUCCESS,
    feedbackCreated
  }
}

const addFeedbackError = (error) => {
  return {
    type: TYPES.ADD_FEEDBACK_ERROR,
    error
  }
}

export const updateFeedback = (userId, subscriptionId, dayId = 1, feedback) => {
  return (dispatch) => {
    dispatch(showSpinner())

    API.put(`api/users/${userId}/subscriptions/${subscriptionId}/days/${dayId}/feedbacks`, feedback)
      .then((response) => dispatch(updateFeedbackSuccess(response.data)))
      .catch((error) => dispatch(updateFeedbackError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const updateFeedbackSuccess = (feedbackUpdated) => {
  return {
    type: TYPES.UPDATE_FEEDBACK_SUCCESS,
    feedbackUpdated
  }
}

const updateFeedbackError = (error) => {
  return {
    type: TYPES.UPDATE_FEEDBACK_ERROR,
    error
  }
}

export const fetchFeedbacks = (userId, subscriptionId, dayId = 1) => {
  return (dispatch) => {
    dispatch(showSpinner())

    return API.get(`api/users/${userId}/subscriptions/${subscriptionId}/days/${dayId}/feedbacks`)
      .then((response) => dispatch(fetchFeedbacksSuccess(response.data)))
      .catch((error) => dispatch(fetchFeedbacksError(error)))
      .then(() => dispatch(hideSpinner()))
  }
}

const fetchFeedbacksSuccess = (feedbacks) => {
  return {
    type: TYPES.FETCH_FEEDBACKS_SUCCESS,
    feedbacks
  }
}

const fetchFeedbacksError = (error) => {
  return {
    type: TYPES.FETCH_FEEDBACKS_ERROR,
    error
  }
}
