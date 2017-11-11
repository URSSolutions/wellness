import React from 'react'
import PropTypes from 'prop-types'
import { formatSimpleDate } from '../services/format-date'

const EventCard = ({ event }) => {
  if (!event) return

  return (
    <div className='user-card collection'>
      <div className='collection-item'>
        <h2 className='user-card__title'> Evento: { event.name } </h2>

        <p className='user-card__paragraph__margin-top'>
          Descrição: { event.description }
        </p>

        <p className='user-card__paragraph'>
          Data de término: { formatSimpleDate(event.final_date) }
        </p>
      </div>
    </div>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
}

export default EventCard
