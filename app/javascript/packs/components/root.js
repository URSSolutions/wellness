import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'
import NewFeedback from '../containers/new-feedback'

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router>
        <div>
          <Route exact path='/app' component={ App } />
          <Route path='/app/events/:eventId/users/:userId/feedback/new' component={ NewFeedback } />
        </div>
      </Router>
    </Provider>
  )
}

export default Root
