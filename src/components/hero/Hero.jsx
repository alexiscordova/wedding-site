import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

class Hero extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    groom: PropTypes.string,
    bride: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.string
  }

  static defaultProps = {
    groom: 'Dude',
    bride: 'Girl',
    location: 'Location',
    date: 'Date',
    icon: '♥'
  }

  render() {
    return (
      <div className="hero">
        <img className="u-img-responsive" src={this.props.image} />
        <div className="hero-metadata u-text-center">
          <h2>
            <span className="u-text-uppercase">{this.props.groom}</span>
            <span>{this.props.icon}</span>
            <span className="u-text-uppercase">{this.props.bride}</span>
          </h2>
          <p>{this.props.location}</p>
          <p>{this.props.date}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#f5f5f1" points="0,100 50,0 100,100" />
        </svg>
      </div>
    )
  }
}

export default Hero
