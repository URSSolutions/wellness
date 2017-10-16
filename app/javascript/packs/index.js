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
import { events } from './reducers/events'
import { feedback } from './reducers/feedback'
import { activity } from './reducers/activity'
import { professional } from './reducers/professional'

const reducers = combineReducers({
  auth,
  events,
  feedback,
  activity,
  professional
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
