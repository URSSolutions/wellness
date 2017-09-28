import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  name: 'Felipeson',
  token: '123',
  event: {
    name: 'Emagrecendo em 30 dias'
  }
}

export const auth = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.DISPATCH_AUTH_LOGOUT_SUCCESS:
      return {}

    case TYPES.DISPATCH_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
