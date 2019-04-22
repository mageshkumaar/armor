/**
* @author      Magesh Kumaar <mageshkumaar@outlook.com>
* @link        https://github.com/mageshkumaar/armor
* @license     https://opensource.org/licenses/BSD-3-Clause

* @version     1.0.0
*/

'use strict'

// Public exports
module.exports = (function () {
  var configure = function configureArmor (options) {
    // Middleware for express
    return function (req, res, next) {
      validate(req, function () {
        return next()
      }, function () {

      })
    }
  }

  return {
    configure
  }
})()

function validate (req, success, failure) {
  var valid = true
  if (valid) {
    success()
  } else {
    failure()
  }
}
