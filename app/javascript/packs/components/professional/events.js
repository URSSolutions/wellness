import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ event, user }) => {
  return (
    <li className='collection-item'>
      <Link to={`/app/events/${event.id}/users/${user.id}/`} >
        { `${user.first_name} ${user.last_name}` }

        <span className='secondary-content'>
          <i className='material-icons'>feedback</i>
        </span>

      </Link>
    </li>
  )
}

const Event = ({ event }) => {
  return (
    <li className="professional-events__list__item">
      <ul className='card collection with-header'>
        <li className='collection-header'><h4>{ event.name }</h4></li>

        { event.users.map((user, index) => <User key={ index } event={ event } user={ user } />) }
      </ul>
    </li>
  )
}

const ProfessionalEvents = ({ events, auth }) => {
  return (
    <div className="card professional-events">
      <h2 className='user-home__name'> Olá, { auth.first_name } </h2>

      <h2 className='user-home__name'> Eventos: </h2>

      <div>
        <ul className="professional-events__list">
          { events.map((event, index) => <Event key={ index } event={ event } />) }
        </ul>
      </div>
    </div>
  )
}

export default ProfessionalEvents
