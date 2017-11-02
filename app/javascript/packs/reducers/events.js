import * as TYPES from '../actions/types'

export const events = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_EVENTS_SUCCESS:
      return [
        ...state,
        action.event
      ]

    case TYPES.FETCH_EVENTS_ERROR:
      return [ ...state ]

    default:
      return state
  }
}
