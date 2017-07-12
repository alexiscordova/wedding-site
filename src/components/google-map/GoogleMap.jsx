import React from 'react'

const GoogleMap = () => {
  return (
    <iframe
      className="map"
      width="100%"
      height="250"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed/v1/place?q=Golden%20Gate%20Club&key=AIzaSyDhgCvJjiUZCBP6rha_XyofHqDZVKpqYlE&zoom=16"
      allowFullScreen
    />
  )
}

export default GoogleMap
