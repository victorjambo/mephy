/* eslint-disable consistent-return */
const rs = require('../helpers/Response');
const re = require('../helpers/regex');
const { VALIDATION_MSG } = require('../helpers/constants');

const statusCode = 400;

class Validator {
  static validateId(req, res, next) {
    const { params: { id } } = req;
    const msg = VALIDATION_MSG.invalidParam.format('id', id);
    if (!re(id, 'id')) {
      return rs.error(res, msg, statusCode);
    }
    next();
  }

  static validateReq(arr) {
    return (req, res, next) => {
      arr.forEach((item) => {
        req.checkBody(item, VALIDATION_MSG.required.format(item)).notEmpty();
      });
      const errors = req.validationErrors();
      if (!errors.isEmpty()) {
        return rs.error(res, errors, statusCode);
      }
      next();
    };
  }

  static validateUpdate(arr) {
    return (req, res, next) => {
      const { body } = req;
      const data = [];
      Object.keys(body).forEach((key) => {
        if (arr.includes(key)) {
          data.push(key);
        }
      });
      if (!data.length) {
        return rs.error(res, VALIDATION_MSG.emptyRequest, statusCode);
      }
      next();
    };
  }
}

module.exports = Validator;
