import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as professionalActions from '../actions/professional'
import * as activityActions from '../actions/activity'

import Header from './header'
import ActivityModal from '../components/activity-modal'
import LastFeedback from '../components/last-feedback'
import Activities from '../components/activities'

class UserHome extends Component {
  constructor (props) {
    super(props)

    this.handleFetchProfessional = this.handleFetchProfessional.bind(this)
    this.handleAddActivity = this.handleAddActivity.bind(this)
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

              <h2 className='user-home__name'> Evento: </h2>

              {
                props.events.length &&
                <h2 className='user-home__event-name' > { props.events[0].name } </h2>
              }
            </div>

            {
              props.feedbacks && props.events.length &&
              <LastFeedback
                professional={props.professional}
                feedbacks={ props.feedbacks }
                handleFetchProfessional={ this.handleFetchProfessional }
              />
            }
          </div>

          {
            props.activities &&
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
  addActivity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.currentUser,
    events: state.auth.currentUser.events,
    feedbacks: state.auth.currentUser.feedbacks,
    activities: state.auth.currentUser.activities,
    professional: state.professional.currentProfessional
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...authActions,
    ...professionalActions,
    ...activityActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
