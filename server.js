/**
 * Module dependencies
 */
const express = require('express')

const app = express()

// custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

// export app
module.exports = app
