import React from 'react'
import './style.scss'

const GlobalHeader = () => {
  return (
    <header className="header">
      <div className="row u-container u-block-center header-wrapper">
        <div className="column-small-2 column-medium-3">
          <a href="#">
            <img className="header-logo u-img-responsive" src="http://placehold.it/85?text=Logo" />
          </a>
        </div>

        <div className="column-small-10 column-medium-offset-2 column-medium-7">
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
