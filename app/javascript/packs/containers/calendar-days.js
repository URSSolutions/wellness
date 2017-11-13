import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
// import BigCalendar from 'react-big-calendar'

class CalendarDays extends Component {
  componentDidMount () {
    //fetch days
    // .then() => {}
         this.findCurrentDay(this.findCurrentDay())
  }

  findCurrentDay () {
    // this.props.days
    const days = [ { id: 1, date: '11/13/2017' }, { id: 2, date: '11/14/2017' }]
    const day = days.find((day) => day.date === moment().format('L'))

    this.props.handleDay(day)
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default CalendarDays
