/* eslint-disable no-undef */
const app = require('../server')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai
chai.use(chaiHttp)

describe('Server!', () => {
  it('.get(\'/\') responds with status 404', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
          expect(res.type).to.equal('text/plain')
          expect(res).to.have.status(404)
          expect(res.text).to.equal('404 - Not Found')
          done()
      })
  })
})
