import * as TYPES from '../actions/types'

const DEFAULT_STATE = {
  error: '',
  activities: [
    {
      id: 1,
      date: '10/10/2017',
      type: 'meal',
      description: 'Lorem ipsum dolor sit amoreboris nisi ut aliq',
      src: 'https://www.baistzviyosef.com/wp-content/uploads/2015/10/meal.jpg'
    },
    {
      id: 2,
      date: '10/10/2017',
      type: 'exercise',
      description: 'Lorem ipsum dolor sit amoreboris nisi ut aliq',
      src: ''
    }
  ]
}

export const activity = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: [
          ...action.activities
        ]
      }

    case TYPES.FETCH_ACTIVITIES_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
