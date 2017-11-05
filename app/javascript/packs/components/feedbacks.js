import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FeedbackCard from '../components/feedback-card'

const Feedbacks = (props) => {
  const renderFeedback = () => {
    const { feedbacks } = this.props

    if (feedbacks.length) {
      feedbacks.map((feedback, index) =>
        <FeedbackCard
          key={ index }
          feedback={ feedback }
        />
      )
    }

    return <p> Você não tem nenhum feedback ainda! </p>
  }

  return (
    <div className='user-home__feedback-container'>

      <h2> Última notificação: </h2>

      { renderFeedback() }
    </div>
  )
}

Feedbacks.propTypes = {
  feedbacks: PropTypes.array.isRequired
}

export default Feedbacks
