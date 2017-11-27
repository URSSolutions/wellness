import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as authActions from '../../actions/auth'
import * as eventsActions from '../../actions/event'
import * as dayActions from '../../actions/day'

import CalendarDays from '../calendar-days'
import UserHome from '../user-home'
import Header from '../header'
import UserEvents from '../../components/user/events'


class UserDetail extends Component {
  constructor () {
    super()

    this.state = { day: '', subscription: '' }

    this.handleDay = this.handleDay.bind(this)
    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount () {
    this.props.fetchAuth()
  }

  handleEvent (eventId) {
    const subscription = this.props.auth.subscriptions.find((subscription) => subscription.event_id === eventId)

    this.setState({ eventId, subscription })
  }


  handleDay (day) {
    this.setState({ day })
  }

  render () {
    const { props, state } = this

    return (
      <div>
        <Header />

        <div className="component-container">
          <UserEvents
            events={ props.events }
            handleEvent={ this.handleEvent }
            auth={ props.auth }
            day={ state.day }
          />

          {
            state.subscription &&
            props.auth &&
            <CalendarDays
              user={ props.auth }
              subscription={ state.subscription }
              days={ props.days }
              handleDay={ this.handleDay }
              fetchDays={ this.props.fetchDays }
            />
          }

          {
            state.subscription &&
            state.day &&
            state.eventId &&
            <UserHome
              auth={ props.auth }
              user={ props.user }
              eventId={ state.eventId }
              subscription={ state.subscription }
              day={ state.day }
            />
          }
        </div>
      </div>
    )
  }
}

UserDetail.propTypes = {
  auth: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  fetchAuth: PropTypes.func.isRequired,
  fetchDays: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.currentUser,
    events: state.auth.currentUser.events,
    days: state.day.days
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...authActions,
    ...eventsActions,
    ...dayActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)
