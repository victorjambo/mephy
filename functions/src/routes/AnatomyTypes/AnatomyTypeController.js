const { AnatomyTypes } = require('../../db/models');
const Response = require('../../helpers/Response')

const msg = {
  notFound: 'Anatomy Type not found',
  create: 'Anatomy Type successfully created',
  updated: 'Anatomy Type successfully updated',
  delete: 'Anatomy Type successfully deleted',
  fetch: 'Anatomy Type successfully fetched',
}


class AnatomyTypeController extends Response {
  static async gets(_, res) {
    try {
      const products = await Products.findAll({
        order: [['createdAt', 'DESC']]
      });
      return super.success(res, msg.fetch, 200, products)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async get(req, res) {
    const { id } = req.params;
    try {
      const anatomyType = AnatomyTypes.findByPk(id)
      return super.success(res, msg.fetch, 200, anatomyType)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async create(req, res) {
    const { body } = req;
    try {
      const data = await AnatomyTypes.create(body);
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
      const [exitCode, [anatomyType]] = await AnatomyTypes.update(body, {
        returning: true,
        where: { id }
      });
      return exitCode
        ? super.success(res, message, 200, anatomyType)
        : super.error(res, notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const exitCode = await AnatomyTypes.destroy({
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

module.exports = AnatomyTypeController;
