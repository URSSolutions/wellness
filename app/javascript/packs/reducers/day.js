import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  currentDay: {
    feedbacks: [],
    activities: []
  },
  days: [],
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

    case TYPES.FETCH_DAYS_SUCCESS:
      return {
        ...state,
        days: action.days,
        error: null
      }

    case TYPES.FETCH_DAYS_ERROR:
      return {
        ...state,
        days: [],
        error: action.error
      }

    default:
      return state
  }
}
