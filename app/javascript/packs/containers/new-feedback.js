import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as eventsActions from '../actions/event'
import * as feedbackActions from '../actions/feedback'
import * as userActions from '../actions/user'

import WeightChart from '../components/weight-chart'
import Header from './header'
import Activities from '../components/activities'
import FeedbackForm from '../components/feedback-form'

import { formatSimpleDate } from '../services/format-date'
import { translateGender } from '../services/translate-gender'

class NewFeedback extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {},
      event: {},
      description: '',
      feedback: {},
      subscription: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFeedbackSubmit = this.handleFeedbackSubmit.bind(this)
  }

  componentDidMount () {
    const { eventId, userId, dayId } = this.props.match.params

    this.props.fetchAuth()

    this.props.fetchEvent(eventId)

    this.props.fetchUser(userId)
      .then(() => {
        const subscription = this.getSubscription(+eventId)

        this.setState( { subscription })

        this.props.fetchFeedbacks(userId, subscription.id, dayId)
          .then(() => this.getFeedback(this.props.auth.id))
      })
  }

  getSubscription (eventId) {
    return this.props.user.subscriptions.find((subscription) => subscription.event_id === eventId)
  }

  getFeedback (professionalId) {
    const feedback = this.props.feedbacks.find((feedback) => feedback.professional_id === professionalId)

    this.setState({ feedback })
  }

  isEmpty (obj) {
    return Object.keys(obj).length
  }

  handleChange (event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleFeedbackSubmit (isFeedbackNew, description) {
    if (isFeedbackNew) {
      return this.handleAddFeedback(description)
    }

    this.handleUpdateFeedback(description)
  }

  setIds () {
    const subscriptionId = this.state.subscription.id
    const { match: { params: { userId, dayId } } } = this.props
    const feedbackId = this.state.feedback.id
    const professional_id = this.props.auth.id

    return { userId, subscriptionId, feedbackId, dayId, professional_id }
  }

  handleAddFeedback (description) {
    const { userId, subscriptionId, dayId, professional_id } = this.setIds()
    const data = { feedback: { description, professional_id } }

    this.props.addFeedback(userId, subscriptionId, dayId, data)
      .then(() => alert('Feedback criado!'))
  }

  handleUpdateFeedback (description) {
    const { userId, subscriptionId, feedbackId, dayId, professional_id } = this.setIds()
    const data = { feedback: { description, professional_id } }

    this.props.updateFeedback(userId, subscriptionId, dayId, feedbackId, data)
      .then(() => alert('Feedback atualizado!'))
  }

  render () {
    const { props, state } = this

    return (
      <section>
        <Header />

        <div className='user-home'>
          <div className='user-home__general-info'>
            {
              this.isEmpty(props.user) &&
              <div className='collection'>
                <div className='collection-item'>
                  <h2 className='title'>Usuário: { `${props.user.first_name} ${ props.user.last_name }` }</h2>

                  <p className='margin-top-triple'> Sexo: { translateGender(props.user.gender) } </p>
                  <p> Data de nascimento: { formatSimpleDate(props.user.initial_date) } </p>
                  <p> Altura: { props.user.height } </p>
                  <p> Peso: { props.user.weight } </p>
                </div>
              </div>
            }

            {
              props.event &&
              <div className='collection'>
                <div className='collection-item'>
                  <h2> Evento: { props.event.name } </h2>

                  <p className='margin-top-triple'>
                    Data de início: { formatSimpleDate(props.event.initial_date) }
                  </p>

                  <p> Data de término: { formatSimpleDate(props.event.final_date) } </p>
                </div>
              </div>
            }

            {/* {
              this.isEmpty(props.user) &&
              <li>
                <ul className='collection-item'>
                  <Activities activities={ props.user.activities } />
                </ul>
              </li>
            } */}
          </div>

          <WeightChart weights={ state.subscription.weights }/>

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
  fetchAuth: PropTypes.func.isRequired,
  fetchEvent: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  fetchFeedbacks: PropTypes.func.isRequired,
  addFeedback: PropTypes.func.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  feedbacks: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.currentProfessional,
    event: state.event.currentEvent,
    user: state.user,
    feedbacks: state.feedback.feedbacks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...authActions,
    ...eventsActions,
    ...userActions,
    ...feedbackActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedback)
