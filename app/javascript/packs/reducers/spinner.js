import * as TYPES from '../actions/types'

export const spinner = (state = 0, action) => {
  switch (action.type) {
    case TYPES.SHOW_SPINNER:
      return state + 1

    case TYPES.HIDE_SPINNER:
      return state - 1

    default:
      return state
  }
}
