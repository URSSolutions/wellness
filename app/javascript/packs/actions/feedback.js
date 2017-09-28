import * as TYPES from './types'
import API from '../services/api'

export const fetchFeedbacks = () => {
  return (dispatch) => {
    API.get('/users/sign_out')
      .then(() => dispatch(fetchFeedbackSuccess()))
      .catch((error) => dispatch(fetchFeedbackError(error)))
  }
}

const fetchFeedbackSuccess = (feedbacks) => {
  return {
    type: TYPES.FETCH_FEEDBACKS_SUCCESS,
    feedbacks
  }
}

const fetchFeedbackError = (error) => {
  return {
    type: TYPES.FETCH_FEEDBACKS_ERROR,
    error
  }
}
