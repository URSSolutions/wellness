import * as TYPES from '../actions/types'

export const events = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_EVENTS_SUCCESS:
      return action.events

    case TYPES.FETCH_EVENTS_ERROR:
      return []

    default:
      return state
  }
}
