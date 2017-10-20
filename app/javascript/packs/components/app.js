import React, { Component } from 'react'

import { verifyAuthType } from '../services/verify-auth-type'

import UserHome from '../containers/user-home'
import ProfessionalHome from '../containers/professional-home'

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
    return (
      <section>
        {
          this.state.userVerified && this.handleUserType()
        }
      </section>
    )
  }
}

export default App
