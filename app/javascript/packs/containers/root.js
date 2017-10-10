import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { verifyAuthType } from '../services/verify-auth-type'
import { Redirect } from 'react-router'

import App from './app'
import UserHome from './user-home'

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router>
        <div>
          <Route path='/' component={ App } />

          {
            verifyAuthType() &&
            <Route path='/' component={ UserHome } />
          }
        </div>
      </Router>
    </Provider>
  )
}

export default Root
