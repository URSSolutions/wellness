import * as TYPES from '../actions/types'

export const feedback = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_FEEDBACKS_SUCCESS:
      return [ ...action.feedbacks ]

    case TYPES.FETCH_FEEDBACKS_ERROR:
      return []

    default:
      return state
  }
}
