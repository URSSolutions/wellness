import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as eventsActions from '../actions/events'

import Header from '../components/header'
import Activities from '../components/activities'

class NewFeedback extends Component {
  componentDidMount () {
    this.props.fetchAuth()
    this.props.fetchEvents()
  }

  dispatchLogout () {
    this.props.dispatchAuthLogout()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.events.length > 0
  }

  componentWillUpdate(nextProps, nextState) {
    this.state.
  }

  getEventId() {
    return 1
  }

  getUserId() {
    return 1
  }

  getUser() {
    const event = this.getEvent()
    if (event.id) {
      return event.users.find((user) => user.id == this.getUserId())
    }

    return {}
  }

  getEvent() {
    if (this.props.events.length > 0) {
      return this.props.events.find((event) => event.id == this.getEventId())
    }

    return {}
  }

  render () {
    return (
      <section>
        <Header dispatchLogout={ this.dispatchLogout }/>
        <div className='user-home'>
          <div className='user-home__general-info'>
            <ul className="collection">
              <li className="collection-item avatar">
                <i className="material-icons circle">person</i>
                <span className="title">{ `${this.getUser().first_name} ${this.getUser().last_name}` }</span>
                <p>{ this.getEvent().name }</p>
              </li>

              {
                this.getUser().id &&
                <li>
                  <ul className="collection-item">
                    <Activities activities={ this.getUser().activities } toggleActivityInput={ false } />
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
