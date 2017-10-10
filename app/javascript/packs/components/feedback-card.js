import React from 'react'
import PropTypes from 'prop-types'

const FeedbackCard = ({ feedback, professional }) => {
  return (
    <div className='card small user-home__feedback-card'>
      <div className='card-content'>
        <h3> { professional.name } </h3>

        <p className='user-home__feedback-date'> { feedback.created_at } </p>

        <p> { feedback.description } </p>
      </div>
    </div>
  )
}

FeedbackCard.propTypes = {
  feedback: PropTypes.object.isRequired,
  professional: PropTypes.object.isRequired,
}

export default FeedbackCard
