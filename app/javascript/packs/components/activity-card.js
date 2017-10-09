import React from 'react'
import PropTypes from 'prop-types'

const handlePhoto = (activity) => {
  const photos = {
    meal: activity.photo || 'http://www.fairfaxcounty.gov/news2/wp-content/uploads/2016/05/meal.jpg',
    physical: 'https://az616578.vo.msecnd.net/files/2016/03/01/635924574014208042697820024_Exercising.jpg'
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
