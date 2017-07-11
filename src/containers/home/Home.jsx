import React from 'react'
import Hero from 'Components/hero/Hero'

const Home = () => {
  return (
    <div className="row">
      <div className="column-small-12 no-gutters">
        <Hero
          image="http://placehold.it/960?text=Hero+Image"
          groom="Alexis"
          bride="Krystle"
          location="The Presidio"
          date="April 21, 2018"
        />
      </div>

      <div className="markdown column-small-12">
        <p>This will be the introduction paragraph where we thank people for coming to the site, describe what the site is for, and provide an email address for questions.</p>
      </div>

      <div className="editorial column-small-12">
        <h3>Event Details</h3>
        <p>This is where we will provide the ceremony and reception details, including date, times, and location. Since the ceremony and reception are at the same place, it might be best not to separate these, but instead follow it with “cocktails, dinner, and reception to follow.”</p>
      </div>

      <div className="editorial column-small-12">
        <h3>Registry</h3>
        <p>This is where we list where we are registered. We should make sure to use the links from theknot.com, so items are properly tracked.</p>
      </div>

      <div className="rsvp column-small-12">
        <h3>RSVP</h3>
        <p>Maybe we let people RSVP digitally? This would require a form and something to capture the data; Google Sheets perhaps. It may require people to input a code so we can limit how many people they can RSVP for, which might be overly complicated. We’ll see. </p>
      </div>

      <div className="map column-small-12 no-gutters">
        <img className="u-img-responsive" src="http://placehold.it/960x400?text=Google+Maps+API" />
      </div>
    </div>
  )
}

export default Home
