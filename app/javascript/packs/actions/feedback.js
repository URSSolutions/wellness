import * as TYPES from './types'
import API from '../services/api'

export const fetchFeedbacks = (id) => {
  return (dispatch) => {
    API.get(`/api/feedbacks/${id}`)
      .then(() => dispatch(fetchFeedbacksSuccess()))
      .catch((error) => dispatch(fetchFeedbacksError(error)))
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
