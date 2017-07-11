import React from 'react'
import './style.scss'

const GlobalHeader = () => {
  return (
    <header className="row">
      <div className="header-logo column-small-2 column-medium-3">
        <img src="http://placehold.it/85?text=Logo" />
      </div>
      <nav className="header-navigation column-small-10 column-medium-offset-2 column-medium-7">
        <ul className="u-list-unstyled" role="navigation">
          <li>
            <a className="nav-link" href="#our-story">Our Story</a>
          </li>
          <li>
            <a className="nav-link" href="#event-details">Event Details</a>
          </li>
          <li>
            <a className="nav-link" href="#registry">Registry</a>
          </li>
          <li>
            <a className="nav-link" href="#rsvp">RSVP</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default GlobalHeader
