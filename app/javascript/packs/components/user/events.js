import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { formatSimpleDate } from '../../services/format-date'

class UserEvents extends Component {
  constructor (props) {
    super(props)

    this.state = { event: undefined }
  }

  handleEvent (eventId)  {
    this.setState({ event: this.props.events.find((event) => event.id === eventId) })

    this.props.handleEvent(eventId)
  }

  render () {
    const { state, props } = this

    return (
      <div className='user-home'>
        <div className='component-item'>
          <h2 className='user-home__name'> Eventos: </h2>
      
          <div className="user-home__events-list">
            {
              !!props.events.length &&
              props.events.map((event, index) =>
                <button key={ index }
                  className='user-home__event-button waves-effect waves-light btn blue lighten-1'
                  onClick={ () => this.handleEvent(event.id) }>
                  { event.name }
                </button>)
            }
          </div>
        </div>

        {
          !props.events.length &&
          <h2> Você não comprou nenhum evento ainda! </h2>
        }

        {
          this.state.event &&
          <div className='card margin-top-triple'>
            <div className='card-content'>
              <h2 className='user-card__title'> Evento: { state.event.name } </h2>
              <p className='user-home__event-attribute'> Descrição: { state.event.description } </p>
              <p className='user-home__event-attribute'> Data de início: { formatSimpleDate(state.event.inital_date) } </p>
              <p className='user-home__event-attribute'> Data de término: { formatSimpleDate(state.event.final_date) } </p>
            </div>
          </div>
        }
      </div>
    )
  }
}

UserEvents.propTypes = {
  events: PropTypes.array.isRequired,
  handleEvent: PropTypes.func.isRequired
}

export default UserEvents
