import * as TYPES from '../actions/types'

export const user = (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_USER_SUCCESS:
      return action.user

    case TYPES.FETCH_USER_ERROR:
      return {}

    default:
      return state
  }
}
