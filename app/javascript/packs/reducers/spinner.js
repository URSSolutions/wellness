import * as TYPES from '../actions/types'

export const spinner = (state = false, action) => {
  switch (action.type) {
    case TYPES.SHOW_SPINNER:
      return true

    case TYPES.HIDE_SPINNER:
      return false

    default:
      return state
  }
}
