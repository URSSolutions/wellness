import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

import ReportModal from '../components/report-modal'

class UserHome extends Component {
  constructor (props) {
    super(props)

    this.state = { reportModal: false }

    this.toggleModal = this.toggleModal.bind(this)
    this.renderNotification = this.renderNotification.bind(this)
  }

  toggleModal () {
    this.setState({ reportModal: !this.state.reportModal })
  }

  renderNotification () {
    const { feedback } = this.props

    if (feedback.error) {
      return <p> { feedback.error } </p>
    }

    if (feedback.feedbacks.length) {
      return this.createNotificationCard(feedback.feedbacks[length-1])
    }
  }

  createNotificationCard () {
    return (
      <div>

      </div>
    )
  }

  render () {
    const { state, props } = this

    return (
      <section className='user-home'>
        {
          state.reportModal &&
          <ReportModal handleClose={ this.toggleModal } />
        }

        <h2 className='user-home__name'> Olá, { props.auth.name } </h2>

        {
          props.auth.event.name &&
          <h3 className='user-home__event-name' > { props.auth.event.name } </h3>
        }

        {
          this.renderNotification()
        }

        <button onClick={ this.toggleModal }> Reportar o status de hoje </button>

        {
          state.reportModal &&
          <ReportModal handleClose={ this.toggleModal } />
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    feedback: state.feedback
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
