import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ event, user }) => {
  return (
    <li className='collection-item'>
      <Link to={`/app/events/${event.id}/users/${user.id}/feedback/new`} >
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
    <li>
      <ul className='collection with-header'>
        <li className='collection-header'><h4>{ event.name }</h4></li>

        { event.users.map((user, index) => <User key={ index } event={ event } user={ user } />) }
      </ul>
    </li>
  )
}

const Events = ({ events, auth }) => {
  return (
    <div>
      <h2 className='user-home__name'> Olá, { auth.first_name } </h2>

      <h2 className='user-home__name'> Eventos: </h2>

      <ul>
        { events.map((event, index) => <Event key={ index } event={ event } />) }
      </ul>
    </div>
  )
}

export default Events
