import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

class App extends Component {
  constructor (props) {
    super(props)

    this.dispatchLogout = this.dispatchLogout.bind(this)
  }

  dispatchLogout () {
    this.props.dispatchAuthLogout()
  }

  render () {
    return (
      <section>
        <button onClick={ this.dispatchLogout }> sair </button>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
