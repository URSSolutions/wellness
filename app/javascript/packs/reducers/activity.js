import * as TYPES from '../actions/types'

export const activity = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_ACTIVITIES_SUCCESS:
      return [ ...action.activities ]

    case TYPES.FETCH_ACTIVITIES_ERROR:
      return []

    default:
      return state
  }
}
