import React from 'react'
import PropTypes from 'prop-types'
import GlobalHeader from 'Components/global-header/GlobalHeader'
import GlobalFooter from 'Components/global-footer/GlobalFooter'

const App = ({ children }) => {
  return (
    <article className="react-root">
      <GlobalHeader />

      <main>
        {children}
      </main>

      <GlobalFooter />
    </article>
  )
}

App.propTypes = {
  children: PropTypes.any.isRequired
}

export default App
