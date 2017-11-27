import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FeedbackCard from '../components/feedback-card'

const Feedbacks = ({ feedbacks, eventId }) => {
  const renderFeedback = () => {
    if (feedbacks.length) {
      return feedbacks.map((feedback, index) =>
        <FeedbackCard
          key={ index }
          feedback={ feedback }
          eventId={ eventId }
        />
      )
    }

    return <p> Você não tem nenhum feedback ainda! </p>
  }

  return (
    <div className='user-home__activity-container'>

      <h2 className='user-home__name'> Feedbacks: </h2>

      { renderFeedback() }
    </div>
  )
}

Feedbacks.propTypes = {
  feedbacks: PropTypes.array.isRequired
}

export default Feedbacks
