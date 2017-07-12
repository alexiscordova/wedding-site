import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Editorial extends Component {
  static propTypes = {
    sectionTitle: PropTypes.string,
    introduction: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    classes: PropTypes.string,
    layout: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired
  }

  static defaultProps = {
    sectionTitle: '',
    introduction: undefined,
    classes: null
  }

  editorialMetadata(item) {
    return (
      <figcaption className="editorial-metadata">
        { item.title && <h4 className="editorial-metadata_title">{item.title}</h4> }
        <p className="editorial-metadata_text">{item.text}</p>
      </figcaption>
    )
  }

  render() {
    const {
      sectionTitle,
      introduction,
      layout,
      content,
      classes
    } = this.props

    const editorialClasses = classNames('editorial', classes)

    return (
      <div className={editorialClasses}>
        { sectionTitle.length > 0 &&
          <div className="row">
            <div className="column-small-12 no-gutters">
              <h3 className="editorial-title">{this.props.sectionTitle}</h3>
            </div>
            { typeof introduction !== 'undefined' &&
              <div className="column-small-12 no-gutters">
                { typeof introduction === 'function' && introduction() }
                { typeof introduction === 'string' && <p>introduction</p> }
              </div>
            }
          </div>
        }

        <div className="row">
          { layout === '3-up' &&
            content.map((item, index) => {
              return (
                <div className="column-small-12 column-medium-4 no-gutters" key={index}>
                  <figure>
                    <a href={item.link}>
                      <img className="editorial-image" src={item.image} />
                      { item.text && this.editorialMetadata(item) }
                    </a>
                  </figure>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Editorial
