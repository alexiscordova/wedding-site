import React from 'react'
import Hero from 'Components/hero/Hero'
import Markdown from 'Components/markdown/Markdown'
import Editorial from 'Components/editorial/Editorial'
import Countdown from 'Components/countdown/Countdown'
import GoogleMap from 'Components/google-map/GoogleMap'
import config from 'Data/config'
import weddingEventDetails from 'Data/weddingDetailData'
import travelAndAccomodationsText from 'Data/travelAndAccomodations'
import welcomeText from 'Data/welcome'
import registryData from 'Data/registryData'

let eventDetails = () => {
  return (
    <address>
      {config.venue.name}<br />
      {config.venue.address}<br />
      {config.venue.city}, {config.venue.state}<br />
      {config.venue.zip}
    </address>
  )
}

const Home = () => {
  return (
    <main>
      <div className="row">
        <div className="column-small-12 no-gutters">
          <Hero
            image="http://placehold.it/960x750?text=Hero+Image"
            groom={config.groom.firstName}
            bride={config.bride.firstName}
            location="The Presidio"
            date={config.weddingDate}
          />
        </div>
      </div>

      <div className="row">
        <div className="column-small-12">
          <Markdown
            text={welcomeText}
          />
        </div>
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

      <Countdown
        title="Countdown"
        weddingDate="04/21/2018 4:30 PM"
      />

      <div className="row">
        <div className="column-small-12">
          <Markdown
            text={travelAndAccomodationsText}
          />
        </div>
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

      <div className="row">
        <div className="column-small-12 no-gutters">
          <GoogleMap />
        </div>
      </div>
    </main>
  )
}

export default Home
