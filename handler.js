'use strict';
const { hello } = require("./controller/hello")


module.exports.hello = async event => {
  return hello(event);
}
