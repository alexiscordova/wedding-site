import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { HtmlRenderer, Parser } from 'commonmark'
import './style.scss'

class Markdown extends Component {
  static propTypes = {
    heading: PropTypes.string,
    headingClasses: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    id: '',
    heading: null,
    headingClasses: null
  }

  constructor(props) {
    super(props)

    const parser = new Parser(),
      renderer = new HtmlRenderer()

    this.markdown = renderer.render(parser.parse(this.props.text))
  }

  render() {
    const headingClasses = classNames('markdown-heading', this.props.headingClasses)

    return (
      <section className="markdown" id={this.props.id}>
        <div className="row u-container u-block-center">
          <div className="column-small-12">
            { this.props.heading && <h3 className={headingClasses}>{this.props.heading}</h3> }
            <div
              dangerouslySetInnerHTML={{ __html: this.markdown }}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Markdown
