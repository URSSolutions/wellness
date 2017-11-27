import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  professionals: [],
  error: null
}

export const professional = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_PROFESSIONALS_SUCCESS:
      return {
        ...state,
        professionals: action.professionals
      }

    case TYPES.FETCH_PROFESSIONALS_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
