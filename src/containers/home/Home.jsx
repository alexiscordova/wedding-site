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
      {config.venue.name} {config.venue.nameAdditional}<br />
      {config.venue.address}<br />
      {config.venue.city}, {config.venue.state}<br />
      {config.venue.zip}
    </address>
  )
}

const Home = () => {
  return (
    <section className="content">
      <Hero
        image="http://lorempixel.com/960/800/nature/4"
        groom={config.groom.firstName}
        bride={config.bride.firstName}
        location={config.venue.name}
        date={config.weddingDate}
        icon="💘"
      />

      <Markdown
        text={welcomeText}
      />

      <Editorial
        id="event-details"
        heading="Wedding Details"
        headingClasses={['u-text-center']}
        classes={['editorial-content-centered']}
        layout="3-up"
        introduction={eventDetails}
        content={weddingEventDetails}
      />

      <Countdown
        headline="Countdown"
        headlineClasses={['u-text-center']}
        weddingDate="04/21/2018 4:30 PM"
      />

      <Markdown
        id="accomodations"
        heading="Travel and Accomodations"
        headingClasses={['u-text-center']}
        text={travelAndAccomodationsText}
      />

      <Editorial
        id="registry"
        heading="Gift Registry"
        headingClasses={['u-text-center']}
        layout="2-up"
        introduction="You can view our registries by clicking each of the store logos below, or by looking up Alexis Córdova or Krystle Mariano at your local store. You can also help us plan for our honeymoon with the Newlywed Fund."
        content={registryData}
      />

      <GoogleMap />
    </section>
  )
}

export default Home
