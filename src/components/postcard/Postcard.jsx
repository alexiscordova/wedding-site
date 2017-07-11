import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { HtmlRenderer, Parser } from 'commonmark'
import './Postcard.scss'

class Postcard extends Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    detailsText: PropTypes.string
  }

  static defaultProps = {
    text: 'Lorem ipsum',
    detailsText: 'View the Details'
  }

  constructor(props) {
    super(props)

    this.state = {
      isPostcardFlipped: false
    }

    const parser = new Parser()
    const renderer = new HtmlRenderer({
      softbreak: '<br />'
    })

    this.markdown = renderer.render(parser.parse(this.props.text))

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPostcardFlipped: true })
    }, 2000)
  }

  handleClick() {
    this.setState({
      isPostcardFlipped: !this.state.isPostcardFlipped
    })
  }

  render() {
    const { month, day, year } = this.props
    const postcardClasses = classNames('postcard', {
      'flipped': this.state.isPostcardFlipped
    })

    return (
      <div className="row">
        <div className="column-small-12">
          <div className="flip-container">
            <div className={postcardClasses} onClick={this.handleClick}>
              <figure className="postcard-front">
                <div className="postcard-wrapper">
                  <div className="postcard-date">
                    <span className="postcard-month">{month}</span>
                    <span className="postcard-day">{day}</span>
                    <span className="postcard-year">{year}</span>
                  </div>
                  <ul className="postcard-info list-unstyled list-inline">
                    <li>Alexis & Krystle</li>
                    <li className="is-hidden-small">April 21st, 2018</li>
                    <li>Presidio of San Francisco</li>
                  </ul>
                </div>
              </figure>
              <figure className="postcard-back">
                <div className="postcard-wrapper">
                  <h1 className="postcard-title text-center text-uppercase">{this.props.title}</h1>
                  <div
                    className="postcard-text-wrapper"
                    onClick={e => {
                      e.stopPropagation()
                    }}
                    dangerouslySetInnerHTML={{ __html: this.markdown }}
                  />
                  <p className="text-center postcard-details">
                    <Link to="/details">{this.props.detailsText}</Link>
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Postcard
