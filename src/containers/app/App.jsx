import React, { Component } from 'react'
import ReactGA from 'react-ga'
import GlobalHeader from 'Components/global-header/GlobalHeader'
import GlobalFooter from 'Components/global-footer/GlobalFooter'
import Home from 'Containers/home/Home'
import 'picturefill'
import 'picturefill/dist/plugins/mutation/pf.mutation.js'

ReactGA.initialize('UA-347921-7')

class App extends Component {
  constructor(props) {
    super(props)

    ReactGA.set({
      page: window.location.href
    })

    ReactGA.pageview(window.location.href)
  }
  render() {
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
}

export default App
