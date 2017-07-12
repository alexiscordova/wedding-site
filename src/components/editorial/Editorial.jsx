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
    } = this.props,
      editorialClasses = classNames('editorial', classes)

    return (
      <section className={editorialClasses}>
        { sectionTitle.length > 0 &&
          <div className="row u-container u-block-center">
            <div className="column-small-12">
              <h3 className="editorial-title">{this.props.sectionTitle}</h3>
            </div>
            { typeof introduction !== 'undefined' &&
              <div className="column-small-12">
                { typeof introduction === 'function' && introduction() }
                { typeof introduction === 'string' && <p>{introduction}</p> }
              </div>
            }
          </div>
        }

        <div className="row u-container u-block-center">
          { layout === '3-up' &&
            content.map((item, index) => {
              return (
                <div className="column-small-12 column-medium-4" key={index}>
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
      </section>
    )
  }
}

export default Editorial
