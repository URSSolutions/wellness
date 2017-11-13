import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as authActions from '../../actions/auth'
import * as eventsActions from '../../actions/event'
import * as userActions from '../../actions/user'

import CalendarDays from '../calendar-days'
import NewFeedback from '../new-feedback'

class ProfessionalDetail extends Component {
  constructor () {
    super()

    this.state = { day: '', subscription: '' }

    this.handleDay = this.handleDay.bind(this)
  }

  componentDidMount () {
    const { eventId, userId } = this.props.match.params

    this.props.fetchAuth()

    this.props.fetchEvent(eventId)

    this.props.fetchUser(userId)
      .then(() => this.setState({ subscription: this.getSubscription(+eventId) }))
  }

  componentWillUnmount () {
    this.props.resetEvent()
  }

  getSubscription (eventId) {
    return this.props.user.subscriptions.find((subscription) => subscription.event_id === eventId)
  }

  handleDay (day) {
    this.setState({ day })
  }

  render () {
    const { props, state } = this

    return (
      <div>
        <CalendarDays
          user={ props.user }
          subscription={ state.subscription }
          handleDay={ this.handleDay }
        />

        {
          state.subscription &&
          state.day &&
          <NewFeedback
            auth={ props.auth }
            user={ props.user }
            event={ props.event }
            subscription={ state.subscription }
            day={ state.day }
          />
        }
      </div>
    )
  }
}

ProfessionalDetail.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  fetchAuth: PropTypes.func.isRequired,
  fetchEvent: PropTypes.func.isRequired,
  resetEvent: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.currentProfessional,
    event: state.event.currentEvent,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...authActions,
    ...eventsActions,
    ...userActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalDetail)