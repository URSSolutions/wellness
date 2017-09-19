import * as TYPES from '../actions/types'

export const auth = (state = {}, action) => {
  switch (action.type) {
    case TYPES.DISPATCH_AUTH_LOGOUT_SUCCESS:
      return {}

    case TYPES.DISPATCH_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
