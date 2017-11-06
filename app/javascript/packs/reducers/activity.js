import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  activityCreated: {},
  activities: [],
  error: null
}

export const activity = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_ACTIVITIES_SUCCESS:
      return {
        activities: action.activities,
        error: null
      }

    case TYPES.FETCH_ACTIVITIES_ERROR:
      return {
        activities: [],
        error: action.error
      }

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
