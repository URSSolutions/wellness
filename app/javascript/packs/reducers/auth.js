import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  currentUser: {
    events: [],
    feedbacks: [],
    activities: []
  },
  currentProfessional: {
    events: []
  },
  error: null
}

export const auth = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_AUTH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.user
      }

    case TYPES.FETCH_AUTH_PROFESSIONAL_SUCCESS:
      return {
        ...state,
        currentProfessional: action.professional
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
