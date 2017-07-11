import React from 'react'
import Helmet from 'react-helmet'
import Postcard from 'Components/postcard/Postcard'

const SaveTheDateBodyText = `Hello and welcome! If you’re reading this, this means you received our Save the Date! This will be the go-to resource for all wedding-related details, and we’ll continue to update it as the date approaches. A formal invitation will follow soon, but until then if you have any questions, please [email us](mailto:alexisandkrystle@icloud.com).

To view the event details we have thus far, check out the details link below.

You are all very special to us, and your support means everything. We can’t wait to celebrate with each and every one of you next April in San Francisco!

Love,
Alexis Córdova and Krystle Mariano
`

const SaveTheDate = () => {
  return (
    <section className="content save-the-date">
      <Helmet>
        <title>Save the Date | Alexis and Krystle | April 21, 2018 | The Presidio of San Francisco</title>
        <meta name="description" content="Alexis and Krystle are getting married! Save the date: April 21, 2018" />
      </Helmet>

      <Postcard
        month="04"
        day="21"
        year="18"
        title="Alexis & Krystle"
        text={SaveTheDateBodyText}
        detailsText="View the Wedding Details"
      />
    </section>
  )
}

export default SaveTheDate
