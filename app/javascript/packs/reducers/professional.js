import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  currentProfessional: {},
  error: null
}

export const professional = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_PROFESSIONAL_SUCCESS:
      return {
        ...state,
        currentProfessional: action.professional
      }

    case TYPES.FETCH_PROFESSIONAL_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
