import * as TYPES from '../actions/types'

export const feedback = (state = {}, action) => {
  switch (action.type) {
    case TYPES.ADD_FEEDBACK_SUCCESS:
      return action.feedbackCreated

    case TYPES.ADD_FEEDBACK_ERROR:
      return {}

    default:
      return state
  }
}
