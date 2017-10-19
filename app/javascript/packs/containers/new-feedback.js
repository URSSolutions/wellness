import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as eventsActions from '../actions/events'

import Activities from '../components/activities'
import Header from './header'

class NewFeedback extends Component {
  constructor (props) {
    super(props)

    this.state = { user: {}, event: {} }

    this.setUser = this.setUser.bind(this)
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

  render () {
    const { state } = this
    return (
      <section>
        <Header />

        <div className='user-home'>
          <div className='user-home__general-info'>
            <ul className="collection">
              {
                this.isEmpty(state.user) &&
                state.event.length &&

                <li className="collection-item avatar">
                  <i className="material-icons circle">person</i>

                  <span className="title">{ `${state.user.first_name} ${state.user.last_name}` }</span>

                  <p>{ state.event.name }</p>
                </li>
              }

              {
                this.isEmpty(state.user) &&
                <li>
                  <ul className="collection-item">
                    <Activities activities={ state.user.activities } toggleActivityInput={ false } />
                  </ul>
                </li>
              }
            </ul>
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
    ...eventsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedback)
