const { Users } = require('../../db/models');
const Response = require('../../helpers/Response')

const msg = {
  notFound: 'User not found',
  create: 'User successfully created',
  updated: 'User successfully updated',
  delete: 'User successfully deleted',
  fetch: 'User successfully fetched',
}


class UserController extends Response {
  static async gets(_, res) {
    try {
      return await Users.getAll()
        .then(data => {
          return super.success(res, msg.fetch, 200, data);
        })
        .catch(err => errorResponse(res, err))
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async get(req, res) {
    const { id } = req.params;
    try {
      return await Users.getOne(id)
        .then(data => {
          if (!data.length) {
            return super.error(res, msg.notFound, 404);
          }
          return super.success(res, msg.fetch, 200, data);
        })
        .catch(err => super.error(res, err, 400));
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async create(req, res) {
    const { body } = req;
    try {
      const data = await Users.create(body);
      return res.status(201).json({
        data,
        success: true,
        message: msg.create
      });
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async update(req, res) {
    const {
      body,
      params: { id }
    } = req;
    try {
      const data = await Users.update(id, body);
      return data.length
        ? super.success(res, msg.updated, 200, data)
        : super.error(res, msg.notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const exitCode = await Users.delete(id);
      return exitCode
        ? super.success(res, msg.delete, 200)
        : super.error(res, msg.notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

}

module.exports = UserController;
