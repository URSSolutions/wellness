// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

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

import Root from './containers/root'

const reducers = combineReducers({
  {}
})

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

const store = createStore(reducers, {}, enhancer)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <Root />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
