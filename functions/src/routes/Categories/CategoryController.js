const { Categories } = require('../../models');
const Response = require('../../helpers/Response')

const msg = {
  notFound: 'Category not found',
  create: 'Category successfully created',
  updated: 'Category successfully updated',
  delete: 'Category successfully deleted',
  fetch: 'Category successfully fetched',
}


class CategoryController extends Response {
  static async gets(_, res) {
    try {
      return await Categories.getAll()
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
      return await Categories.getOne(id)
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
      const data = await Categories.create(body);
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
      const data = await Categories.update(id, body);
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
      const exitCode = await Categories.delete(id);
      return exitCode
        ? super.success(res, msg.delete, 200)
        : super.error(res, msg.notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

}

module.exports = CategoryController;
