import React from 'react'
import Hero from 'Components/hero/Hero'
import Markdown from 'Components/markdown/Markdown'
import Editorial from 'Components/editorial/Editorial'
import Countdown from 'Components/countdown/Countdown'
import GoogleMap from 'Components/google-map/GoogleMap'
import config from 'Data/config'
import weddingEventDetails from 'Data/weddingDetailData'
import entreeDetails from 'Data/entreeDetailData'
import travelAndAccommodationsText from 'Data/travelAndAccommodations'
import welcomeText from 'Data/welcome'
import registryData from 'Data/registryData'

let eventDetails = () => {
    return (
      <address>
        <span className="u-text-bold">{config.venue.name} {config.venue.nameAdditional}</span>
        <span>{config.venue.address}</span>
        <span>{config.venue.city}, {config.venue.state}</span>
        <span>{config.venue.zip}</span>
      </address>
    )
  },

  entreeIntroduction = `The following are detailed descriptions of the dinner entrées. When filling out the response card, please make sure to write your initials next to the dish you wish to have. If you have any allergies, specific dietary restrictions, or general questions, please <a href="mailto:alexisandkrystle@icloud.com">let us know</a> and we will do our best to make accomodations.

  All entrées will be served with plated salad—arugala with fennel, cherry tomatoes, pine nuts, and shaved parmesan reggiano with a meyer lemon vinaigrette—as well as assorted Firebrand organic artisan breads.`

const Home = () => {
  return (
    <section className="content">
      <Hero
        image="http://i.alexiscordova.com/TeCLnYYXzs.jpg"
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

      <Editorial
        id="entree-details"
        heading="Entrée Details"
        headingClasses={['u-text-center']}
        classes={['editorial-content-centered']}
        layout="3-up"
        introduction={entreeIntroduction}
        content={entreeDetails}
      />

      <Markdown
        id="accomodations"
        heading="Travel and Accommodations"
        headingClasses={['u-text-center']}
        text={travelAndAccommodationsText}
      />

      <Editorial
        id="registry"
        heading="Gift Registry"
        headingClasses={['u-text-center']}
        classes={['editorial-content-centered']}
        layout="2-up"
        introduction="You can view our registries by clicking each of the store logos below, or by looking up Alexis Córdova or Krystle Mariano at your local store. You can also help us plan for our honeymoon with the Newlywed Fund."
        content={registryData}
      />

      <GoogleMap />
    </section>
  )
}

export default Home
