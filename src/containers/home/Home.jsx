import React from 'react'
import Hero from 'Components/hero/Hero'
import Markdown from 'Components/markdown/Markdown'
import Editorial from 'Components/editorial/Editorial'

const welcomeText = `Hello and welcome! If you’re reading this, this means you received our Save the Date! This will be the go-to resource for all wedding-related details, and we’ll continue to update it as the date approaches. A formal invitation will follow soon, but until then if you have any questions, please [email us](mailto:alexisandkrystle@icloud.com).

You are all very special to us, and your support means everything. We can’t wait to celebrate with each and every one of you next April in San Francisco!

Love,
Alexis Córdova and Krystle Mariano
`

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

      <div className="row">
        <div className="column-small-12">
          <Editorial
            sectionTitle="Wedding Details"
            layout="3-up"
            introduction={eventDetails}
            content={weddingEventDetails}
          />
        </div>
      </div>

      <div className="editorial column-small-12">
        <h3>Event Details</h3>
        <p>This is where we will provide the ceremony and reception details, including date, times, and location. Since the ceremony and reception are at the same place, it might be best not to separate these, but instead follow it with “cocktails, dinner, and reception to follow.”</p>
      </div>

      <div className="editorial column-small-12">
        <h3>Registry</h3>
        <p>This is where we list where we are registered. We should make sure to use the links from theknot.com, so items are properly tracked.</p>
      </div>

      <div className="row">
        <div className="editorial column-small-12">
          <Editorial
            sectionTitle="Gift Registry"
            layout="3-up"
            introduction="Hi"
            content={registryData}
          />
        </div>
      </div>

      <div className="map column-small-12 no-gutters">
        <img className="u-img-responsive" src="http://placehold.it/960x400?text=Google+Maps+API" />
      </div>
    </div>
  )
}

export default Home
