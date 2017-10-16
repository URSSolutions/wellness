import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as eventsActions from '../actions/events'

import Events from '../components/events'

class ProfessionalHome extends Component {
  componentDidMount () {
    this.props.fetchAuth()
    this.props.fetchEvents()
  }

  render () {
    const { state, props } = this

    return (
      <section className='user-home'>
        <div className='user-home__general-info'>
          {
            props.events.length &&
            <Events events={ props.events } auth={ props.auth }/>
          }
        </div>
      </section>
    )
  }
}

ProfessionalHome.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalHome)
