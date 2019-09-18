/**
 * Module dependencies
 */
const express = require('express')
/**
* NPM modules 
*/
const chalk = require('chalk')

const app = express()

app.set('port', process.env.port || 3000)

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

app.listen(app.get('port'), () => {
    const msg = `Express started on http://localhost:${app.get('port')}
press Ctrl-c to terminate`
console.log(chalk.green(msg))
})

// export app
module.exports = app