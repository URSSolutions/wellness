import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as activityActions from '../actions/activity'
import * as feedbackActions from '../actions/feedback'

import ActivityModal from '../components/activity-modal'
import Feedbacks from '../components/feedbacks'
import Activities from '../components/activities'

import { formatSimpleDate } from '../services/format-date'

class UserHome extends Component {
  constructor (props) {
    super(props)

    this.handleAddActivity = this.handleAddActivity.bind(this)
  }

  componentDidMount () {
    this.fetchDayData(this.props.day.id)

    $('.modal').modal()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.day.id !== nextProps.day.id) {
      this.fetchDayData(nextProps.day.id)
    }
  }

  fetchDayData (dayId = this.props.day.id) {
    const { auth, subscription } = this.props

    this.props.fetchFeedbacks(auth.id, subscription.id, dayId)
    this.props.fetchActivities(auth.id, subscription.id, dayId)
  }

  handleAddActivity (activity) {
    const { addActivity, auth, day, subscription, eventId } = this.props

    addActivity(auth.id, subscription.id, day.id, { ...activity, event_id: eventId })
      .then(() => this.fetchDayData())
  }

  render () {
    const { state, props } = this

    return (
      <div>
        <ActivityModal addActivity={ this.handleAddActivity } />

        <section className='user-home'>
          <div className='card user-home__general-info'>
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
  eventId: PropTypes.number.isRequired,
  subscription: PropTypes.object.isRequired,
  feedbacks: PropTypes.array.isRequired,
  fetchActivities: PropTypes.func.isRequired,
  fetchFeedbacks: PropTypes.func.isRequired,
  activities: PropTypes.array,
  addActivity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    activities: state.activity.activities,
    feedbacks: state.feedback.feedbacks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...activityActions,
    ...feedbackActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
