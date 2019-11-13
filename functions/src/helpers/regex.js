const { REGEX } = require('./constants');

module.exports = (str, type) => REGEX[type].test(str);
