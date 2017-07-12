import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

class Countdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    weddingDate: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      daysRemaining: 0,
      daysRemainingLabel: '',
      hoursRemaining: 0,
      hoursRemainingLabel: '',
      minutesRemaining: 0,
      minutesRemainingLabel: '',
      secondsRemaining: 0,
      secondsRemainingLabel: ''
    }

    this.setCounter()
  }

  setCounter() {
    let timer = setInterval(() => {
      let second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        now = new Date(),
        endDate = new Date(this.props.weddingDate),
        timeRemaining = endDate - now,
        _daysRemaining = Math.floor(timeRemaining / day),
        daysRemainingText = (day === 1) ? 'Day' : 'Days',
        _hoursRemaining = Math.floor((timeRemaining % day) / hour),
        hoursRemainingText = (_hoursRemaining === 1) ? 'Hour' : 'Hours',
        _minutesRemaining = Math.floor((timeRemaining % hour) / minute),
        minutesRemainingText = (_minutesRemaining === 1) ? 'Minute' : 'Minutes',
        _secondsRemaining = Math.floor((timeRemaining % minute) / second),
        secondsRemainingText = (_secondsRemaining === 1) ? 'Second' : 'Seconds'

      if (timeRemaining > 0) {
        this.setState({
          daysRemaining: _daysRemaining,
          daysRemainingLabel: daysRemainingText,
          hoursRemaining: _hoursRemaining,
          hoursRemainingLabel: hoursRemainingText,
          minutesRemaining: _minutesRemaining,
          minutesRemainingLabel: minutesRemainingText,
          secondsRemaining: _secondsRemaining,
          secondsRemainingLabel: secondsRemainingText
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }

  render() {
    const {
      daysRemaining,
      daysRemainingLabel,
      hoursRemaining,
      hoursRemainingLabel,
      minutesRemaining,
      minutesRemainingLabel,
      secondsRemaining,
      secondsRemainingLabel
    } = this.state

    return (
      <div className="countdown">
        <h3>{this.props.title}</h3>
        <div className="time-remaining">
          <div className="days-remaining">
            <span>{daysRemaining}</span>
            <span>{daysRemainingLabel}</span>
          </div>
          <div className="hours-remaining">
            <span>{hoursRemaining}</span>
            <span>{hoursRemainingLabel}</span>
          </div>
          <div className="minutes-remaining">
            <span>{minutesRemaining}</span>
            <span>{minutesRemainingLabel}</span>
          </div>
          <div className="seconds-remaining">
            <span>{secondsRemaining}</span>
            <span>{secondsRemainingLabel}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Countdown
