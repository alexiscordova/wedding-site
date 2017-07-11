/* eslint-disable no-console */
const express = require('express')
const webpack = require('webpack')
const compression = require('compression')
const open = require('open')
const host = 'http://localhost'
const port = 3000
const app = express()
const environment = app.get('env')

if (environment === 'development') {
  const config = require('./webpack.config.dev')
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }))

  app.use(require('webpack-hot-middleware')(compiler))
} else if (environment === 'production') {
  app.use(compression())
  app.use(express.static('dist'))
} else {
  console.log('NODE_ENV not set!')
}

app.listen(port, error => {
  if (error) {
    console.log(error)
  } else {
    console.log(`Listening on ${host}:${port}…`)
    open(`${host}:${port}`)
  }
})

module.exports = app
