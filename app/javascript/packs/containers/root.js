import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'

const Root = ({ store, history }) => {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path='/' component={ App } />
      </Router>
    </Provider>
  )
}

export default App
