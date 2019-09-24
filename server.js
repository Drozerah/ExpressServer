/**
 * Module dependencies
 */
const express = require('express')
const app = express() // instanciate Express Application
/**
* Lib modules
*/
const { logger } = require('./lib/logger')
/**
* Routes
*/
const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')

/* top middleware executed for every request to the app */
app.use((req, res, next) => {
  // write logs child process
  logger(req, 'tmp/http-logs.txt')
  next()
})

// index page
app.use('/', indexRouter)
// about page
app.use('/about', aboutRouter)

// catch error 404
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

// error handler
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

// export app
module.exports = app
