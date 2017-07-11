import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HtmlRenderer, Parser } from 'commonmark'

class Markdown extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
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
      <div
        className="markdown column-small-12"
        dangerouslySetInnerHTML={{ __html: this.markdown }}
      />
    )
  }
}

export default Markdown
