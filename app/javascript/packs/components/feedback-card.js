import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as professionalActions from '../actions/professional'

import { formatHoursDate } from '../services/format-date'

class FeedbackCard extends Component {
  componentDidMount () {
    this.props.fetchProfessional(this.props.eventId, this.props.feedback.professional_id)
  }

  render () {
    const { props } = this

    return (
      <div className='card small user-home__feedback-card'>
        <div className='card-content'>
          <h3> { `${props.professional.first_name} ${props.professional.last_name}` } </h3>
          <p> { props.professional.occupation } </p>

          <p className='user-home__feedback-date'> Horário: { formatHoursDate(props.feedback.created_at) } </p>

          <p> { props.feedback.description } </p>
        </div>
      </div>
    )
  }
}

FeedbackCard.propTypes = {
  feedback: PropTypes.object.isRequired,
  professional: PropTypes.object.isRequired,
  fetchProfessional: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    professional: state.professional.currentProfessional
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(professionalActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackCard)
