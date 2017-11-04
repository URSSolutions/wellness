import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { logger as loggerMiddleware } from 'redux-logger'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'

import Root from './components/root'
import { auth } from './reducers/auth'
import { event } from './reducers/event'
import { feedback } from './reducers/feedback'
import { activity } from './reducers/activity'
import { professional } from './reducers/professional'
import { spinner } from './reducers/spinner'
import { user } from './reducers/user'
import { day } from './reducers/day'

const reducers = combineReducers({
  auth,
  event,
  feedback,
  activity,
  professional,
  spinner,
  user,
  day
})

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

const store = createStore(reducers, {}, enhancer)

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root'),
)
