import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as feedbackActions from '../actions/feedback'
import * as activityActions from '../actions/activity'

import WeightChart from '../components/weight-chart'
import Header from './header'
import Activities from '../components/activities'
import FeedbackForm from '../components/feedback-form'
import UserCard from '../components/user-card'
import EventCard from '../components/event-card'

import { formatSimpleDate } from '../services/format-date'
import { translateGender } from '../services/translate-gender'

class NewFeedback extends Component {
  constructor (props) {
    super(props)

    this.state = { feedback: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleFeedbackSubmit = this.handleFeedbackSubmit.bind(this)
  }

  componentDidMount () {
    const { user, subscription, day } = this.props

    this.handleFetchFeedbacks(user.id, subscription.id, day.id)
    this.props.fetchActivities(user.id, subscription.id, day.id)
  }

  handleChange (event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  getFeedback (professionalId) {
    const feedback = this.props.feedbacks.find((feedback) => feedback.professional.id === professionalId)
    this.setState({ feedback })
  }

  handleFetchFeedbacks (userId, subscriptionId, dayId) {
    return this.props.fetchFeedbacks(userId, subscriptionId, dayId)
      .then(() => this.getFeedback(this.props.auth.id))
  }

  setIds () {
    const subscriptionId = this.props.subscription.id
    const { match: { params: { userId, dayId } } } = this.props
    const feedbackId = this.state.feedback ? this.state.feedback.id : ''
    const professional_id = this.props.auth.id

    return { userId, subscriptionId, feedbackId, dayId, professional_id }
  }

  handleFeedbackSubmit (isFeedbackNew, description) {
    if (isFeedbackNew) {
      return this.handleAddFeedback(description)
    }

    this.handleUpdateFeedback(description)
  }

  handleAddFeedback (description) {
    const { userId, subscriptionId, dayId, professional_id } = this.setIds()
    const data = { feedback: { description, professional_id } }

    this.props.addFeedback(userId, subscriptionId, dayId, data)
      .then(() => this.handleFetchFeedbacks(userId, subscriptionId, dayId))
  }

  handleUpdateFeedback (description) {
    const { userId, subscriptionId, feedbackId, dayId, professional_id } = this.setIds()
    const data = { feedback: { description, professional_id } }

    this.props.updateFeedback(userId, subscriptionId, dayId, feedbackId, data)
      .then(() => this.handleFetchFeedbacks(userId, subscriptionId, dayId))
  }

  render () {
    const { props, state } = this

    return (
      <section>
        <Header />

        <div className='user-home'>
          <div className='user-home__general-info'>
            <UserCard user={ props.user } />

            <EventCard event={ props.event } />

            {
              !!props.activities.length &&
              <li className='list-style-none'>
                <ul className='collection-item'>
                  <Activities activities={ props.activities } />
                </ul>
              </li>
            }
          </div>

          <WeightChart weights={ props.subscription.weights }/>

          <FeedbackForm
            feedback={ state.feedback }
            handleFeedbackSubmit={ this.handleFeedbackSubmit }
          />
        </div>
      </section>
    )
  }
}

NewFeedback.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  fetchActivities: PropTypes.func.isRequired,
  fetchFeedbacks: PropTypes.func.isRequired,
  addFeedback: PropTypes.func.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  feedbacks: PropTypes.array.isRequired,
  day: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedback)
