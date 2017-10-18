import React, { Component } from 'react'

import { verifyAuthType } from '../services/verify-auth-type'

import Spinner from 'react-spinkit'
import Header from '../components/header'
import UserHome from './user-home'
import ProfessionalHome from './professional-home'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { userVerified: false, isUser: false }

    this.handleUserType = this.handleUserType.bind(this)
  }

  componentDidMount () {
    verifyAuthType()
      .then((isUser) => this.setState({ userVerified: true, isUser }))
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
        <Header />

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

export default App
