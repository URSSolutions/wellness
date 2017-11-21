import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class CalendarDays extends Component {
  componentDidMount () {
    this.props.fetchDays(this.props.user.id, this.props.subscription.id)
      .then(() => this.props.handleDay(this.findCurrentDay()))
  }

  findCurrentDay () {
    const day = this.props.days.find((day) => moment(day[1]).format('L') === moment().format('L'))

    return { id: day[0], date: day[1] }
  }

  render () {
    return (
      <div> </div>
    )
  }
}

CalendarDays.propTypes = {
  handleDay: PropTypes.func.isRequired,
  fetchDays: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired
}

export default CalendarDays
