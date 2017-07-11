import React from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import App from 'Containers/app/App'
import Home from 'Containers/home/Home'
import SaveTheDate from 'Containers/save-the-date/SaveTheDate'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SaveTheDate} />
        <App>
          <Route path="/details" component={Home} />
        </App>
      </Switch>
    </HashRouter>
  )
}

export default Routes
