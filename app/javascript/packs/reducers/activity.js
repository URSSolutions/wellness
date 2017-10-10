import * as TYPES from '../actions/types'

export const activity = (state = {}, action) => {
  switch (action.type) {
    case TYPES.ADD_ACTIVITY_SUCCESS:
      return action.activityCreated

    case TYPES.ADD_ACTIVITY_ERROR:
      return {}

    default:
      return state
  }
}
