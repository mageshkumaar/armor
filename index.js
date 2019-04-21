'use strict'

module.exports = kaavalan

/**
 * Create a middleware to parse request and check it's various
 * properties like parameters, type etc.,
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */

function kaavalan (options) {
  return function kaavalan (req, res, next) {
    return next()
  }
}
