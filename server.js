/**
 * Module dependencies
 */
const express = require('express')

const app = express()

/**
* Routes
*/
const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')

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
