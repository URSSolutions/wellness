import * as TYPES from './types'

export const showSpinner = () => {
  return {
    type: TYPES.SHOW_SPINNER
  }
}

export const hideSpinner = () => {
  return {
    type: TYPES.HIDE_SPINNER
  }
}
