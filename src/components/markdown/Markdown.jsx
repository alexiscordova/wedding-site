import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HtmlRenderer, Parser } from 'commonmark'

class Markdown extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string
  }

  static defaultProps = {
    id: ''
  }

  constructor(props) {
    super(props)

    const parser = new Parser()
    const renderer = new HtmlRenderer({
      softbreak: '<br />'
    })

    this.markdown = renderer.render(parser.parse(this.props.text))
  }

  render() {
    return (
      <section className="markdown" id={this.props.id}>
        <div className="row u-container u-block-center">
          <div className="column-small-12">
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
