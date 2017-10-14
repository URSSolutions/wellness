import React from 'react'

// const User = ({ user }) => {
//   return (
//     <h3> user.first_name </h3>
//   )
// }

const Event = ({ event }) => {
  return (
    <li>
      <h3> { event.name } </h3>

      {/* { users.map((user) => <User user={ user } />) } */}
    </li>
  )
}

const Events = ({ events }) => {
  return (
    <ul>
      { events.map((event, index) => <Event key={ index } event={ event } />) }
    </ul>
  )
}

export default Events
