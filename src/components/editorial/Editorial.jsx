import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { HtmlRenderer, Parser } from 'commonmark'
import './style.scss'

class Editorial extends Component {
  static propTypes = {
    heading: PropTypes.string,
    introduction: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    classes: PropTypes.arrayOf(PropTypes.string),
    layout: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    id: PropTypes.string,
    headingClasses: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    heading: null,
    introduction: null,
    classes: null,
    id: '',
    headingClasses: null
  }

  constructor(props) {
    super(props)

    const parser = new Parser(),
      renderer = new HtmlRenderer()

    if (typeof props.introduction === 'string') {
      this.markdown = renderer.render(parser.parse(props.introduction))
    }
  }

  editorialContent(item, index, columnClasses) {
    const { href, image, text } = item,
      contentClasses = classNames(columnClasses, 'editorial-content-item')

    return (
      <div className={contentClasses} key={index}>
        { href ? (
          <figure>
            <a className="editorial-link" href={href}>
              <img className="editorial-image" src={require(`Images/${image}`)} />
              { text && this.editorialMetadata(item) }
            </a>
          </figure>
        ) : (
          <figure>
            <img className="editorial-image" src={image} />
            { text && this.editorialMetadata(item) }
          </figure>
        )}
      </div>
    )
  }

  editorialMetadata(item) {
    const { title, text } = item

    return (
      <figcaption className="editorial-metadata">
        { title && <h4 className="editorial-metadata_title">{title}</h4> }
        <p className="editorial-metadata_text">{text}</p>
      </figcaption>
    )
  }

  render() {
    const {
      heading,
      introduction,
      layout,
      content,
      classes,
      id
    } = this.props,
      editorialClasses = classNames('editorial', classes),
      headingClasses = classNames('editorial-heading', this.props.headingClasses)

    return (
      <section className={editorialClasses} id={id}>
        { heading &&
          <div className="row editorial-information u-container u-block-center">
            <div className="column-small-12">
              <h3 className={headingClasses}>{heading}</h3>
            </div>
            { introduction &&
              <div className="column-small-12">
                { typeof introduction === 'function' && introduction() }
                { typeof introduction === 'string' &&
                  <div
                    dangerouslySetInnerHTML={{ __html: this.markdown }}
                  />
                }
              </div>
            }
          </div>
        }

        <div className="row editorial-content u-container u-block-center">
          { layout === '3-up' &&
            content.map((item, index) => {
              return this.editorialContent(item, index, 'column-small-12 column-medium-4')
            })
          }

          { layout === '2-up' &&
            content.map((item, index) => {
              return this.editorialContent(item, index, 'column-small-12 column-medium-6')
            })
          }
        </div>
      </section>
    )
  }
}

export default Editorial
