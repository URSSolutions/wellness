import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FeedbackCard from '../components/feedback-card'

class LastFeedback extends Component {
  constructor (props) {
    super(props)

    this.renderFeedback = this.renderFeedback.bind(this)
  }

  componentDidMount () {
    this.props.handleFetchProfessional()
  }

  renderFeedback () {
    const { feedbacks, professional } = this.props

    if (feedbacks.length) {
      return <FeedbackCard professional={ professional } feedback={ feedbacks[feedbacks.length - 1] } />
    }

    return <p> Você não tem nenhum feedback ainda! </p>
  }

  render () {
    return (
      <div className='user-home__feedback-container'>

        <h2> Última notificação: </h2>

        { this.renderFeedback() }
      </div>
    )
  }
}

LastFeedback.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  professional: PropTypes.object.isRequired,
  handleFetchProfessional: PropTypes.func.isRequired
}

export default LastFeedback
