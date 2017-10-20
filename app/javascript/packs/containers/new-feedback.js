import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as eventsActions from '../actions/events'
import * as feedbackActions from '../actions/feedback'

import Activities from '../components/activities'
import Header from './header'

class NewFeedback extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {},
      event: {},
      description: ''
    }

    this.setUser = this.setUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFeedbackSubmit = this.handleFeedbackSubmit.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  componentDidMount () {
    this.props.fetchAuth()

    this.props.fetchEvents()
    .then(() => this.setUser())
  }

  setUser () {
    const {
      getUser,
      getEvent,
      props: { events, match: { params } }
    } = this

    const event = getEvent(events, +params.eventId)
    const user = getUser(event, +params.userId)

    this.setState({ user, event })
  }

  getEvent (events, currentEventId) {
    return events.find((event) => event.id === currentEventId)
  }

  getUser (event, currentUserId) {
    return event.users.find((user) => user.id === currentUserId)
  }

  isEmpty (obj) {
    return Object.keys(obj).length
  }

  handleChange (event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleFeedbackSubmit () {
    const { description, user, event } = this.state

    this.props.addFeedback({
      feedback: {
        description,
        user_id: user.id,
        event_id: event.id,
      }
    })

    this.resetState()
  }

  resetState () {
    this.setState({ description: '' })
  }

  render () {
    const { state } = this
    return (
      <section>
        <Header />

        <div className='user-home'>
          <div className='user-home__general-info'>
            <ul className='collection'>
              {
                this.isEmpty(state.user) &&
                state.event.length &&

                <li className='collection-item avatar'>
                  <i className='material-icons circle'>person</i>

                  <span className='title'>{ `${state.user.first_name} ${state.user.last_name}` }</span>

                  <p>{ state.event.name }</p>
                </li>
              }

              {
                this.isEmpty(state.user) &&
                <li>
                  <ul className='collection-item'>
                    <Activities activities={ state.user.activities } />
                  </ul>
                </li>
              }
            </ul>
          </div>

          <div className='collection'>
            <div className='collection-item'>

              <h2 className='user-home__name'> Feedback </h2>

              <div className='input-field col s10'>
                <textarea
                  id='description'
                  name='description'
                  className='materialize-textarea'
                  data-length='240'
                  value={ state.description }
                  onChange={ this.handleChange }>
                </textarea>
                <label htmlFor='textarea1'>Textarea</label>
              </div>

              <div className='col s4'>
                <button className='btn waves-effect waves-light' onClick={ this.handleFeedbackSubmit }>
                  Enviar Feedback <i className='material-icons right'>send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

NewFeedback.propTypes = {
  auth: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  fetchAuth: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  addFeedback: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.currentProfessional,
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...authActions,
    ...eventsActions,
    ...feedbackActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedback)
