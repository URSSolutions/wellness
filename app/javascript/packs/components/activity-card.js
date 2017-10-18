import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../services/format-date'

const handlePhoto = (activity) => {
  const photos = {
    meal: activity.photo || '/assets/meal-ad180f8a15f51e68bccb4eb4438b5e8c891405b60b3bb40dc6992b9fc44c45d6.jpg',
    physical: '/assets/physical-3a131f2ea49f01c63207474461c187251ead55580f4ce11918adcafef1f38305.jpg',
    weight: '/assets/weight-5045f1e89e28f3d8eda8ce902c3db1d47543c8a40033e8c856c64fb9e39bfed4.jpg'
  }

  return photos[activity.category]
}

const handleCategory = (activity) => {
  const names = {
    meal: 'Refeição',
    physical: 'Exercício físico',
    weight: 'Peso'
  }

  return names[activity.category]
}

const ActivityCard = ({ activity }) => {
  return (
    <div className='card small user-home__activity-card'>
      <div className='card-image'>
        <img src={ handlePhoto(activity) } />

        <div className='user-home__activity-title-container'>
          <h3 className='card-title user-home__activity-card-title'>
            { activity.name || 'Pesagem' }
          </h3>
        </div>
      </div>

      <div className='card-content'>
        <p> { handleCategory(activity) } </p>

        <p> { formatDate(activity.created_at) } </p>

        <p> { activity.description } </p>
      </div>
    </div>
  )
}

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired
}

export default ActivityCard
