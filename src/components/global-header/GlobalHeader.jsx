import React from 'react'
import './style.scss'

const GlobalHeader = () => {
  return (
    <header className="header">
      <div className="row u-container u-block-center header-wrapper">
        <div className="column-small-2 column-medium-1">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 46 44"
              className="header-logo"
            >
              <path d="M25.828 15.757C24.804 15.757 23.826 16.063 23 16.632 22.174 16.063 21.196 15.757 20.172 15.757 18.836 15.757 17.58 16.277 16.636 17.222 14.687 19.171 14.687 22.343 16.636 24.293L22.293 29.949C22.488 30.144 22.744 30.242 23 30.242 23.256 30.242 23.512 30.144 23.707 29.949L29.364 24.293C31.313 22.343 31.313 19.171 29.364 17.222 28.42 16.277 27.164 15.757 25.828 15.757zM23 6C23.552 6 24 5.552 24 5L24 1C24 .448 23.552 0 23 0 22.448 0 22 .448 22 1L22 5C22 5.552 22.448 6 23 6zM23 38C22.448 38 22 38.447 22 39L22 43C22 43.553 22.448 44 23 44 23.552 44 24 43.553 24 43L24 39C24 38.447 23.552 38 23 38zM5 22L1 22C.448 22 0 22.448 0 23 0 23.552.448 24 1 24L5 24C5.552 24 6 23.552 6 23 6 22.448 5.552 22 5 22zM45 22L41 22C40.447 22 40 22.448 40 23 40 23.552 40.447 24 41 24L45 24C45.553 24 46 23.552 46 23 46 22.448 45.553 22 45 22zM37.85 6.736L35.021 9.564C34.63 9.954 34.63 10.587 35.021 10.978 35.216 11.173 35.472 11.271 35.728 11.271 35.984 11.271 36.24 11.173 36.435 10.978L39.264 8.15C39.655 7.76 39.655 7.127 39.264 6.736 38.873 6.345 38.24 6.346 37.85 6.736zM10.979 33.606L8.151 36.435C7.76 36.826 7.76 37.458 8.151 37.849 8.346 38.044 8.602 38.142 8.858 38.142 9.114 38.142 9.37 38.044 9.565 37.849L12.393 35.02C12.784 34.629 12.784 33.997 12.393 33.606 12.002 33.215 11.369 33.216 10.979 33.606zM10.272 11.271C10.528 11.271 10.784 11.173 10.979 10.978 11.37 10.587 11.37 9.954 10.979 9.564L8.15 6.736C7.759 6.345 7.127 6.345 6.736 6.736 6.345 7.127 6.345 7.76 6.736 8.15L9.565 10.978C9.76 11.174 10.016 11.271 10.272 11.271zM36.435 35.021C36.044 34.63 35.412 34.63 35.021 35.021 34.63 35.412 34.63 36.044 35.021 36.435L37.85 39.264C38.045 39.459 38.301 39.557 38.557 39.557 38.813 39.557 39.069 39.459 39.264 39.264 39.655 38.873 39.655 38.241 39.264 37.85L36.435 35.021z" />
            </svg>
          </a>
        </div>

        <div className="column-small-10 column-medium-offset-5 column-medium-6">
          <nav className="header-navigation">
            <ul className="u-list-unstyled" role="navigation">
              <li className="header-navigation_item">
                <a className="header-navigation_link" href="#event-details"><span className="u-is-hidden-small">Event </span>Details</a>
              </li>
              <li className="header-navigation_item">
                <a className="header-navigation_link" href="#accomodations">Accomodations</a>
              </li>
              <li className="header-navigation_item">
                <a className="header-navigation_link" href="#registry">Registry</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default GlobalHeader
