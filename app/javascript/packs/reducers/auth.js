import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  currentAuth: {
    events: [],
    feedbacks: [],
    activities: []
  },
  error: null
}

export const auth = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_AUTH_SUCCESS:
      return {
        ...state,
        currentAuth: action.auth
      }

    case TYPES.FETCH_AUTH_ERROR:
      return {
        ...state,
        error: action.error
      }

    case TYPES.DISPATCH_AUTH_LOGOUT_SUCCESS:
      return DEFAULT_STATE

    case TYPES.DISPATCH_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
