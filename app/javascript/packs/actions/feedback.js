import * as TYPES from './types'
import API from '../services/api'

export const addFeedback = (id) => {
  return (dispatch) => {
    API.get(`/api/feedbacks/${id}`)
      .then((response) => dispatch(addFeedbackSuccess(response.data)))
      .catch((error) => dispatch(addFeedbackError(error)))
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
