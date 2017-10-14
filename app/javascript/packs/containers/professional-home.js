import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

import Events from '../components/events'

class ProfessionalHome extends Component {
  componentDidMount () {
    this.props.fetchAuth()
  }

  render () {
    const { state, props } = this

    return (
      <section className='user-home'>
        <div className='user-home__general-info'>
          <div>
            <h2 className='user-home__name'> Olá, { props.auth.first_name } </h2>

            <h2 className='user-home__name'> Eventos: </h2>
            {
              props.events.length &&
              <Events events={ props.events } />
            }
          </div>
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
    events: state.auth.currentProfessional.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalHome)
