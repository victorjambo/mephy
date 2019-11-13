const { Anatomies } = require('../../db/models');
const Response = require('../../helpers/Response')

const msg = {
  notFound: 'Anatomy not found',
  create: 'Anatomy successfully created',
  updated: 'Anatomy successfully updated',
  delete: 'Anatomy successfully deleted',
  fetch: 'Anatomy successfully fetched',
}


class AnatomyController extends Response {
  static async gets(_, res) {
    try {
      const anatomies = await Anatomies.findAll({
        order: [['createdAt', 'DESC']]
      });
      return super.success(res, msg.fetch, 200, anatomies)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async get(req, res) {
    const { id } = req.params;
    try {
      const anatomy = Anatomies.findByPk(id)
      return super.success(res, msg.fetch, 200, anatomy)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async create(req, res) {
    const { body } = req;
    try {
      const data = await Anatomies.create(body);
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
      const [exitCode, [anatomy]] = await Anatomies.update(body, {
        returning: true,
        where: { id }
      });
      return exitCode
        ? super.success(res, message, 200, anatomy)
        : super.error(res, notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const exitCode = await Anatomies.destroy({
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

module.exports = AnatomyController;
