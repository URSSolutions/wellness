import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as professionalActions from '../actions/professional'
import * as activityActions from '../actions/activity'
import * as feedbackActions from '../actions/feedback'
import * as dayActions from '../actions/day'

import Header from './header'
import ActivityModal from '../components/activity-modal'
import LastFeedback from '../components/last-feedback'
import Activities from '../components/activities'

import { formatSimpleDate } from '../services/format-date'


class UserHome extends Component {
  constructor (props) {
    super(props)

    this.state = { event: undefined }

    this.handleFetchProfessional = this.handleFetchProfessional.bind(this)
    this.handleAddActivity = this.handleAddActivity.bind(this)
    this.handleFetchCurrentDay = this.handleFetchCurrentDay.bind(this)
  }

  componentDidMount () {
    this.props.fetchAuth()

    $('.modal').modal()
  }

  handleFetchProfessional () {
    const { fetchProfessional, events } = this.props

    fetchProfessional(events[0].id)
  }

  handleAddActivity (activity) {
    const { addActivity, fetchAuth, events } = this.props
    const event_id = events[0].id

    addActivity({ ...activity, event_id })
      .then(() => fetchAuth())
  }

  handleEvent (eventId) {
    const event = this.props.events.find((event) => event.id === eventId)
    const subscription = this.props.auth.subscriptions.find((subscription) => subscription.event_id === eventId)

    this.setState({ event, subscription })

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

        <section className='user-home'>
          <ActivityModal addActivity={ this.handleAddActivity } />

          <div className='user-home__general-info'>
            <div>
              <h2 className='user-home__name'> Olá, { props.auth.first_name } </h2>

              <h2 className='user-home__name'> Eventos: </h2>

              <p>Selecione o evento desejado: </p>

              {
                !!props.events.length &&
                props.events.map((event, index) =>
                  <button key={ index }
                    className='waves-effect waves-light btn blue lighten-1'
                    onClick={ () => this.handleEvent(event.id) }
                  >
                    { event.name }
                  </button>
                )
              }

              {
                !props.events.length &&
                <h2> Você não comprou nenhum evento ainda! </h2>
              }

              {
                state.event &&
                <div>
                  <h2> Evento: { state.event.name } </h2>
                  <p> Descrição: { state.event.description } </p>
                  <p> Data de início: { formatSimpleDate(state.event.inital_date) } </p>
                  <p> Data de término: { formatSimpleDate(state.event.final_date) } </p>
                </div>
              }
            </div>

            {
              !!props.feedbacks.length && !!props.events.length &&
              <LastFeedback
                professional={props.professional}
                feedbacks={ props.feedbacks }
                handleFetchProfessional={ this.handleFetchProfessional }
              />
            }
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
  fetchAuth: PropTypes.func.isRequired,
  fetchProfessional: PropTypes.func.isRequired,
  fetchCurrentDay: PropTypes.func.isRequired,
  addActivity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.currentUser,
    events: state.auth.currentUser.events,
    feedbacks: state.day.currentDay.feedbacks,
    activities: state.day.currentDay.activities,
    professional: state.professional.currentProfessional
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...authActions,
    ...professionalActions,
    ...activityActions,
    ...feedbackActions,
    ...dayActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
