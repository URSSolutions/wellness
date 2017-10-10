import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  feedbackCreated: {},
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

    default:
      return state
  }
}
