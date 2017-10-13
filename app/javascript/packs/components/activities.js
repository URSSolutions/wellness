import React from 'react'
import PropTypes from 'prop-types'

import ActivityCard from '../components/activity-card'

const Activities = ({ activities }) => {
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

      <a className="modal-trigger" href="#modal1">
        <span className="user-home__activity-add"> Enviar nova atividade </span>

        <div className="btn-floating btn-large waves-effect waves-light red">
           <i className="material-icons">add</i>
        </div>
      </a>

      <div className='user-home__activities'>
        { renderActivities() }
      </div>
    </div>
  )
}

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
}

export default Activities