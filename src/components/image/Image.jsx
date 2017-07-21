import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Image = (props) => {
  const imageClasses = classNames(props.classes)

  return (
    <img
      className={imageClasses}
      src={props.image}
      srcSet={`${props.image}, ${props.imageRetina} 2x`}
      alt={props.alt}
    />
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  imageRetina: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string)
}

Image.defaultProps = {
  classes: null
}

export default Image
