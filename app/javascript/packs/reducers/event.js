import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  currentEvent: {},
  events: []
}

export const event = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_EVENT_SUCCESS:
      return {
        currentEvent: action.event,
        events: [
          ...state.events,
          action.event
        ]
      }

    case TYPES.FETCH_EVENT_ERROR:
      return {
        ...state,
        currentEvent: {}
      }

    case TYPES.RESET_EVENT:
      return {
        currentEvent: {},
        events: []
      }

    default:
      return state
  }
}
