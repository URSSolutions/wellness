import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ActivityCard from '../components/activity-card'

const Activities = ({ activities, toogleActivityModal }) => {
  const renderActivities = () => {
    if (activities.length) {
      return activities.map((activity, index) =>
        <ActivityCard key={ index } activity={ activity } />
      )
    }

    return <p> Nenhuma atividade cadastrada, adicione uma nova clicando no botão vermelho. </p>
  }

  return (
    <div className='user-home__activity-container'>
      <h2> Atividades: </h2>

      <button className='user-home__activity-button' onClick={ toogleActivityModal }>
        <span className="user-home__activity-add"> Enviar nova atividade </span>

        <div className="btn-floating btn-large waves-effect waves-light red">
           <i className="material-icons">add</i>
        </div>
      </button>

      <div className='user-home__activities'>
        { renderActivities() }
      </div>
    </div>
  )
}

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
  toogleActivityModal: PropTypes.func.isRequired
}

export default Activities
