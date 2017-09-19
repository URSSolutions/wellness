import * as TYPES from '../actions/types'

export const auth = (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_AUTH:
      return {
        ...state,
        action.auth
      }

    default:
      return state
  }
}
