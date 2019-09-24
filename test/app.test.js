const server = require('../server')
const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = chai
chai.use(chaiHttp)

describe('Express Server', () => {
  /**
  * GET / => status 200
  */
  const _200 = 200
  it(`should respond with status ${_200} at GET '/' `, (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(_200)
        //expect(res.type).to.equal('text/html')
        //expect(res.text).to.equal('Hello World!')
        done()
      })
  })
  /**
  * GET /about => status 200
  */
  it(`should respond with status ${_200} at GET '/about' `, (done) => {
    chai
      .request(server)
      .get('/about')
      .end((err, res) => {
        expect(res).to.have.status(_200)
        done()
      })
  })
  /**
  * GET /undefined-route => status 404
  */
  const _404 = 404
  it(`should respond with status ${_404} at GET '/undefined-route'`, (done) => {
    chai
      .request(server)
      .get('/undefined-route')
      .end((err, res) => {
        expect(res).to.have.status(_404)
        done()
      })
  })
})
