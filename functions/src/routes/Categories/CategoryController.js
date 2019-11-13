const { Categories } = require('../../db/models');
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
      const categories = await Categories.findAll({
        order: [['createdAt', 'DESC']]
      });
      return super.success(res, msg.fetch, 200, categories)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async get(req, res) {
    const { id } = req.params;
    try {
      const category = Categories.findByPk(id)
      return super.success(res, msg.fetch, 200, category)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async create(req, res) {
    const { body } = req;
    try {
      const data = await Categories.create(body);
      return super.success(res, msg.create, 201, data)
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
      const [exitCode, [category]] = await Categories.update(body, {
        returning: true,
        where: { id }
      });
      return exitCode
        ? super.success(res, message, 200, category)
        : super.error(res, notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const exitCode = await Categories.destroy({
        where: { id }
      });
      return exitCode
        ? super.success(res, msg.delete, 200)
        : super.error(res, msg.notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

}

module.exports = CategoryController;
