const http = require('http')
const request = require('supertest')
const kaavalan = require('..')

describe('kaavalan()', function () {
  before(function () {
    this.server = createServer()
  })

  it('should check server is created properly', function (done) {
    request(this.server)
      .post('/')
      .expect(200, '', done)
  })
})

/**
 *
 * @param {object} options
 */
function createServer (options) {
  var _kaavalan = kaavalan(options)
  return http.createServer(function (req, res) {
    _kaavalan(req, res, function (err) {
      res.statusCode = err ? (err.status || 500) : 200
      res.end(err ? err.message : JSON.stringify(req.body))
    })
  })
}
