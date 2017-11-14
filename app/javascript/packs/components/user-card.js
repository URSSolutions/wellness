import React from 'react'
import PropTypes from 'prop-types'
import { formatSimpleDate } from '../services/format-date'
import { translateGender } from '../services/translate-gender'

const UserCard = ({ user }) => {
  return (
    <div className='card user-card collection'>
      <div className='user-card__container collection-item'>
        <h2 className='user-card__title'>{ `${user.first_name} ${ user.last_name }` }</h2>

        <p className='user-card__paragraph__margin-top'> Sexo: { translateGender(user.gender) } </p>
        <p className='user-card__paragraph'> Data de nascimento: { formatSimpleDate(user.initial_date) } </p>
        <p className='user-card__paragraph'> Altura: { user.height } </p>
        <p className='user-card__paragraph'> Peso: { user.weight } </p>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserCard
