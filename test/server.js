const chai      = require('chai')
    , should    = chai.should()
    , expect    = chai.expect()
    , app       = require('../index.js')
    , request   = require('supertest')

describe('API', () => {

  it('should return a 200 response', done => {
    request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

})