import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  error: '',
  feedbacks: [
    {
      profissionalName: 'Vagner',
      date: '10/10/2017',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq'
    }
  ]
}

export const feedback = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_FEEDBACKS_SUCCESS:
      return {
        ...state,
        feedbacks: [
          ...action.feedbacks
        ]
      }

    case TYPES.FETCH_FEEDBACKS_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
