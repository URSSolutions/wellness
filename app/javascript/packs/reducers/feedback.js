import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  feedbackCreated: {},
  feedbackUpdated: {},
  feedbacks: [],
  error: null
}

export const feedback = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_FEEDBACK_SUCCESS:
      return {
        feedbackCreated: action.feedbackCreated,
        error: null
      }

    case TYPES.ADD_FEEDBACK_ERROR:
      return {
        feedbackCreated: {},
        error: action.error
      }

    case TYPES.UPDATE_FEEDBACK_SUCCESS:
      return {
        feedbackUpdated: action.feedbackUpdated,
        error: null
      }

    case TYPES.UPDATE_FEEDBACK_ERROR:
      return {
        feedbackUpdated: {},
        error: action.error
      }

    case TYPES.FETCH_FEEDBACKS_SUCCESS:
      return {
        feedbacks: action.feedbacks,
        error: action.error
      }

    case TYPES.FETCH_FEEDBACKS_ERROR:
      return {
        feedbacks: [],
        error: action.error
      }

    default:
      return state
  }
}
