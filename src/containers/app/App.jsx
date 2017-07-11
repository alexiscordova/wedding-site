import React from 'react'
import GlobalHeader from 'Components/global-header/GlobalHeader'
import GlobalFooter from 'Components/global-footer/GlobalFooter'
import Home from 'Containers/home/Home'

const App = () => {
  return (
    <article className="react-root">
      <GlobalHeader />

      <main>
        <Home />
      </main>

      <GlobalFooter />
    </article>
  )
}

export default App