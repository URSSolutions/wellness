import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  activityCreated: {},
  error: null
}

export const activity = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_ACTIVITY_SUCCESS:
      return {
        activityCreated: action.activityCreated,
        error: null
      }

    case TYPES.ADD_ACTIVITY_ERROR:
      return {
        activityCreated: {},
        error: action.error
      }

    default:
      return state
  }
}
