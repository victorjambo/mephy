/* eslint-disable no-extend-native */
String.prototype.format = function() {
  let i = 0;
  const args = arguments;
  return this.replace(/{}/g, () => args[i++]);
};

exports.APPOINTMENT = 'APPOINTMENT'
exports.CONTACT_US = 'CONTACT_US'
exports.NEWSLETTER = 'NEWSLETTER'
exports.REGEX = {
  id: /^[-a-zA-Z0-9_]+$/
};
exports.VALIDATION_MSG = {
  required: '{} is required',
  invalidParam: 'invalid param {}: {}',
  emptyRequest: 'Request is empty',
  invalidToken: 'Authorization failed due to: {}',
  noToken: 'Bad request. Header does not contain an authorization token.'
}
