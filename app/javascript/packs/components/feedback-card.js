import React from 'react'
import PropTypes from 'prop-types'

import { formatHoursDate } from '../services/format-date'

const FeedbackCard = ({ professional, feedback }) => {
  return (
    <div className='card small user-home__feedback-card'>
      <div className='card-content'>
        <h3> { `${professional.first_name} ${professional.last_name}` } </h3>
        <p> { professional.occupation } </p>

        <p className='user-home__feedback-date'> Horário: { formatHoursDate(feedback.created_at) } </p>

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