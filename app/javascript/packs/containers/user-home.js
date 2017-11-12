import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as activityActions from '../actions/activity'
import * as feedbackActions from '../actions/feedback'
import * as dayActions from '../actions/day'

import Header from './header'
import ActivityModal from '../components/activity-modal'
import Feedbacks from '../components/feedbacks'
import Activities from '../components/activities'
import UserEvents from '../components/user/events'

class UserHome extends Component {
  constructor (props) {
    super(props)

    this.handleAddActivity = this.handleAddActivity.bind(this)
    this.handleFetchCurrentDay = this.handleFetchCurrentDay.bind(this)
    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount () {
    this.props.fetchAuth()

    $('.modal').modal()
  }

  handleAddActivity (activity) {
    const { addActivity, auth, currentDay } = this.props
    const { eventId, subscription } = this.state

    addActivity(auth.id, subscription.id, currentDay.id, { ...activity, event_id: eventId })
      .then(() => this.handleFetchCurrentDay(subscription))
  }

  handleEvent (eventId) {
    const subscription = this.props.auth.subscriptions.find((subscription) => subscription.event_id === eventId)

    this.setState({ eventId, subscription })

    this.handleFetchCurrentDay(subscription)
  }

  handleFetchCurrentDay (subscription) {
    this.props.fetchCurrentDay(this.props.auth.id, subscription.id)
  }

  render () {
    const { state, props } = this

    return (
      <div>
        <Header />

        <ActivityModal addActivity={ this.handleAddActivity } />

        <section className='user-home'>
          <div className='user-home__general-info'>
            <div>
              <h2 className='user-home__name'> Olá, { props.auth.first_name } </h2>

              <UserEvents
                events={ props.events }
                handleEvent={ this.handleEvent }
              />
            </div>

            <Feedbacks feedbacks={ props.feedbacks } />
          </div>

          {
            !!props.activities &&
            <Activities
              activities={ props.activities }
              toggleActivityInput
            />
          }
        </section>
      </div>
    )
  }
}

UserHome.propTypes = {
  auth: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  feedbacks: PropTypes.array.isRequired,
  activities: PropTypes.array.isRequired,
  currentDay: PropTypes.object.isRequired,
  fetchAuth: PropTypes.func.isRequired,
  fetchCurrentDay: PropTypes.func.isRequired,
  addActivity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.currentUser,
    events: state.auth.currentUser.events,
    feedbacks: state.day.currentDay.feedbacks,
    activities: state.day.currentDay.activities,
    currentDay: state.day.currentDay
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...authActions,
    ...activityActions,
    ...feedbackActions,
    ...dayActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
