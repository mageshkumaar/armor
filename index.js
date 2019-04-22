/**
* @author      Magesh Kumaar <mageshkumaar@outlook.com>
* @link        https://github.com/mageshkumaar/armor
* @license     https://opensource.org/licenses/BSD-3-Clause

* @version     1.0.0
*/

'use strict'

module.exports = (function () {
  var armor = {}
  
  armor.configure = function configureArmor (options) {
  }
  
  armor.middleware = function (req, res, next) {
    return next()
  }
  return armor
})()
