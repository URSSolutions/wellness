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
        feedbacks: [],
        feedbackUpdated: {},
        error: null,
        feedbackCreated: action.feedbackCreated
      }

    case TYPES.ADD_FEEDBACK_ERROR:
      return {
        ...state,
        feedbackCreated: {},
        error: action.error
      }

    case TYPES.UPDATE_FEEDBACK_SUCCESS:
      return {
        feedbacks: [],
        feedbackUpdated: {},
        error: null,
        feedbackUpdated: action.feedbackUpdated
      }

    case TYPES.UPDATE_FEEDBACK_ERROR:
      return {
        ...state,
        feedbackUpdated: {},
        error: action.error
      }

    case TYPES.FETCH_FEEDBACKS_SUCCESS:
      return {
        feedbackCreated: {},
        feedbackUpdated: {},
        feedbacks: action.feedbacks,
        error: action.error
      }

    case TYPES.FETCH_FEEDBACKS_ERROR:
      return {
        feedbackCreated: {},
        feedbackUpdated: {},
        feedbacks: [],
        error: action.error
      }

    default:
      return state
  }
}
