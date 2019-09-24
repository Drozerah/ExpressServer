/**
* Express Modules
*/
const express = require('express')
const router = express.Router()

/* Get about page */
router.get('/', (req, res, next) => {
  res.send('The is the about page')
})

module.exports = router
