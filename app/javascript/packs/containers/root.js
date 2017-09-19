import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = () => {
  return (
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  )
}

export default App
