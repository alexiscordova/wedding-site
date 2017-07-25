import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.scss'

class Countdown extends Component {
  static propTypes = {
    headline: PropTypes.string.isRequired,
    weddingDate: PropTypes.string.isRequired,
    headlineClasses: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    headlineClasses: null
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

    this._setCounter()
  }

  _setCounter() {
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
    } = this.state,
      headlineClasses = classNames('countdown-heading', this.props.headlineClasses)

    return (
      <section className="countdown">
        <div className="row u-container u-block-center">
          <div className="column-small-12">
            <h3 className={headlineClasses}>{this.props.headline}</h3>
          </div>
        </div>

        <div className="row countdown-container u-container u-block-center">
          <div className="column-small-3">
            <div className="days-container">
              <span className="time-remaining">{daysRemaining}</span>
              <span className="time-remaining-label">{daysRemainingLabel}</span>
            </div>
          </div>

          <div className="column-small-3">
            <div className="hours-container">
              <span className="time-remaining">{hoursRemaining}</span>
              <span className="time-remaining-label">{hoursRemainingLabel}</span>
            </div>
          </div>

          <div className="column-small-3">
            <div className="minutes-container">
              <span className="time-remaining">{minutesRemaining}</span>
              <span className="time-remaining-label">{minutesRemainingLabel}</span>
            </div>
          </div>

          <div className="column-small-3">
            <div className="seconds-container">
              <span className="time-remaining">{secondsRemaining}</span>
              <span className="time-remaining-label">{secondsRemainingLabel}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Countdown
