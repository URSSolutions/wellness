import React from 'react'
import PropTypes from 'prop-types'

const handlePhoto = (activity) => {
  const photos = {
    meal: activity.photo || '/assets/meal-ad180f8a15f51e68bccb4eb4438b5e8c891405b60b3bb40dc6992b9fc44c45d6.jpg',
    physical: '/assets/physical-3a131f2ea49f01c63207474461c187251ead55580f4ce11918adcafef1f38305.jpg'
  }

  return photos[activity.category]
}

const ActivityCard = ({ activity }) => {
  return (
    <div className='card small user-home__activity-card'>
      <div className='card-image'>
        <img src={ handlePhoto(activity) } />
        <div className='user-home__activity-title-container'>
          <h3 className='card-title user-home__activity-card-title'>
            { activity.name }
          </h3>
        </div>
      </div>

      <div className='card-content'>
        <p> { activity.category } </p>

        <p> { activity.created_at } </p>

        <p> { activity.description } </p>
      </div>
    </div>
  )
}

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired
}

export default ActivityCard
