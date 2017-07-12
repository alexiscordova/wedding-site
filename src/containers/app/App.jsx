import React from 'react'
import GlobalHeader from 'Components/global-header/GlobalHeader'
import GlobalFooter from 'Components/global-footer/GlobalFooter'
import Home from 'Containers/home/Home'
import 'picturefill'
import 'picturefill/dist/plugins/mutation/pf.mutation.js'

const App = () => {
  return (
    <article className="react-root">
      <GlobalHeader />

      <Home />

      <GlobalFooter />
    </article>
  )
}

export default App
