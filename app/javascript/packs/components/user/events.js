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
      <div>
        <h2 className='user-home__name'> Eventos: </h2>

        <p> Selecione o evento desejado: </p>

        {
          !!props.events.length &&
          props.events.map((event, index) =>
            <button key={ index }
              className='waves-effect waves-light btn blue lighten-1'
              onClick={ () => this.handleEvent(event.id) }
            >
              { event.name }
            </button>
          )
        }

        {
          !props.events.length &&
          <h2> Você não comprou nenhum evento ainda! </h2>
        }

        {
          this.state.event &&
          <div>
            <h2> Evento: { state.event.name } </h2>
            <p> Descrição: { state.event.description } </p>
            <p> Data de início: { formatSimpleDate(state.event.inital_date) } </p>
            <p> Data de término: { formatSimpleDate(state.event.final_date) } </p>
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
