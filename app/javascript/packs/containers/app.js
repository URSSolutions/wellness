import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

import Header from '../components/header'

class App extends Component {
  constructor (props) {
    super(props)

    this.dispatchLogout = this.dispatchLogout.bind(this)
  }

  dispatchLogout () {
    this.props.dispatchAuthLogout()
  }

  render () {
    const { state } = this
    return (
      <section>
        <Header dispatchLogout={ this.dispatchLogout } />
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
