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
      <section className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <div className="hero-metadata u-text-center">
          <h2>
            <span className="hero-metadata_intro">The Wedding Celebration of</span>
            <span className="hero-metadata_name u-text-uppercase">{this.props.groom}</span>
            <span className="hero-metadata_icon icon-heart">{this.props.icon}</span>
            <span className="hero-metadata_name u-text-uppercase">{this.props.bride}</span>
          </h2>
          <p className="hero-metadata_text hero-metadata_location u-text-uppercase">{this.props.location}</p>
          <p className="hero-metadata_text hero-metadata_date">{this.props.date}</p>
        </div>
        <svg className="hero-skew" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#f5f5f1" points="0, 100 50, 0 100, 100"></polygon>
        </svg>

      </section>
    )
  }
}

export default Hero
