import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../services/format-date'

const FeedbackCard = ({ feedback }) => {
  return (
    <div className='card small user-home__feedback-card'>
      <div className='card-content'>
        <h3> { `${feedback.professional.first_name} ${feedback.professional.last_name}` } </h3>
        <p> { feedback.professional.occupation } </p>

        <p className='user-home__feedback-date'> { formatDate(feedback.created_at) } </p>

        <p> { feedback.description } </p>
      </div>
    </div>
  )
}

FeedbackCard.propTypes = {
  feedback: PropTypes.object.isRequired,
  professional: PropTypes.object.isRequired
}

export default FeedbackCard
