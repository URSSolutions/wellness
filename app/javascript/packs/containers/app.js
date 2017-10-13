import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

import { verifyAuthType } from '../services/verify-auth-type'

import Spinner from 'react-spinkit'
import Header from '../components/header'
import UserHome from './user-home'
import ProfessionalHome from './professional-home'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { userVerified: false, isUser: false }

    this.dispatchLogout = this.dispatchLogout.bind(this)
    this.handleUserType = this.handleUserType.bind(this)
  }

  componentDidMount () {
    verifyAuthType()
      .then((isUser) => this.setState({ userVerified: true, isUser }))
  }

  dispatchLogout () {
    this.props.dispatchAuthLogout()
  }

  handleUserType () {
    if (this.state.isUser) {
      return <UserHome />
    }

    return <ProfessionalHome />
  }

  render () {
    const { state } = this
    return (
      <section>
        <Header dispatchLogout={ this.dispatchLogout } />

        {
          state.userVerified && this.handleUserType()
        }

        {
          !state.userVerified &&
          <div className='spinner-container'>
            <Spinner name='folding-cube' />
          </div>
        }
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
