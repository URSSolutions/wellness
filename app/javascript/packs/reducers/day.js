import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  currentDay: {
    feedbacks: [],
    activities: []
  },
  error: null
}

export const day = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_CURRENT_DAY_SUCCESS:
      return {
        currentDay: action.currentDay,
        error: null
      }

    case TYPES.FETCH_CURRENT_DAY_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
