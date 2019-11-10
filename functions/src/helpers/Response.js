const serverError = 'Server Error';

class Response {
  static error(res, error, statusCode) {
    return res.status(statusCode).json({
      success: false,
      error
    });
  }

  static success(res, message, statusCode, data) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static envErrors(error) {
    return process.env.NODE_ENV === 'production' ? serverError : error;
  }
}


exports.errorResponse = (res, error) => {
  return res.send({
    message: 'error',
    error
  })
}

module.exports = Response;
