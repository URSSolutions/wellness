import * as TYPES from './types'
import API from '../services/api'
import { showSpinner, hideSpinner } from './spinner'

export const addFeedback = (feedback) => {
  return (dispatch) => {
    dispatch(showSpinner())

    API.post('/api/feedbacks/', feedback)
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
