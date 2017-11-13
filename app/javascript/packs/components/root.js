import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'
import ProfessionalDetail from '../containers/professional/detail'
import Container from '../containers/container'

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router>
        <div>
          <Route exact path='/app' component={ Container(App) } />
          <Route path='/app/events/:eventId/users/:userId/' component={ Container(ProfessionalDetail) } />
        </div>
      </Router>
    </Provider>
  )
}

export default Root
