import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as professionalActions from '../actions/professional'

import FeedbackCard from '../components/feedback-card'
import { professional } from '../reducers/professional';

class Feedbacks extends Component {
  componentDidMount() {
    this.props.fetchProfessionals(this.props.eventId)
  }

  findProfessional (professionalId) {
   return this.props.professionals.find((professional) => professional.id === professionalId)
  }

  renderFeedback () {
    if (this.props.feedbacks.length) {
      return this.props.feedbacks.map((feedback, index) =>
        <FeedbackCard
          key={ index }
          feedback={ feedback }
          professional={ this.findProfessional(feedback.professional_id) }
        />
      )
    }

    return <p> Você não tem nenhum feedback ainda! </p>
  }

  render () {
    return (
      <div className='user-home__activity-container'>
  
        <h2 className='user-home__name'> Feedbacks: </h2>
  
        { this.renderFeedback() }
      </div>
    )
  }
}

Feedbacks.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  professionals: PropTypes.array.isRequired,
  fetchProfessionals: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    professionals: state.professional.professionals
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(professionalActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks)

