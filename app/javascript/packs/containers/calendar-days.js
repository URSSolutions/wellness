import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import 'react-dates/initialize'

moment.locale('pt-br')

class CalendarDays extends Component {
  constructor (props) {
    super(props)

    this.state = { date: moment() }

    this.isOutsideRange = this.isOutsideRange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  componentDidMount () {
    this.props.fetchDays(this.props.user.id, this.props.subscription.id)
      .then(() => this.props.handleDay(this.findCurrentDay()))
  }

  findCurrentDay (currentDay = moment()) {
    const day = this.findDay(currentDay)

    this.setState({ date: moment(day[1]) })

    return { id: day[0], date: day[1] }
  }

  handleDateChange (date) {
    this.props.handleDay(this.findCurrentDay(date))
  }

  isOutsideRange (currentDay) {
    const day = this.findDay(currentDay)

    if (day && day.length) {
      return false
    }

    return true
  }

  findDay (currentDay) {
    return this.props.days.find((day) => moment(day[1]).format('L') === currentDay.format('L'))
  }

  render () {
    return (
      <div className="user-home component-item">
        {
          this.props.days.length &&
          <div className='date-picker-wrapper'>
            <h2 className='user-home__name data-title padding-bottom-double'> Selecione algum dia: </h2>

            <div className="data-container">
              <SingleDatePicker
                focused
                date={ this.state.date }
                onDateChange={ this.handleDateChange }
                onFocusChange={ () => {} }
                isOutsideRange={ this.isOutsideRange }
                numberOfMonths={ 1 }
                hideKeyboardShortcutsPanel
                displayFormat={ () => moment.localeData('pt-br').longDateFormat('L') }
                monthFormat='MMMM YYYY'
                readOnly
              />
            </div>
          </div>
        }
      </div>
    )
  }
}

CalendarDays.propTypes = {
  handleDay: PropTypes.func.isRequired,
  fetchDays: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired
}

export default CalendarDays
