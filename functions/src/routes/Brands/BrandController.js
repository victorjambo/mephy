const { Brands } = require('../../db/models');
const Response = require('../../helpers/Response')

const msg = {
  notFound: 'Brand not found',
  create: 'Brand successfully created',
  updated: 'Brand successfully updated',
  delete: 'Brand successfully deleted',
  fetch: 'Brand successfully fetched',
}


class BrandController extends Response {
  static async gets(_, res) {
    try {
      const brands = await Brands.findAll({
        order: [['createdAt', 'DESC']]
      });
      return super.success(res, msg.fetch, 200, brands)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async get(req, res) {
    const { id } = req.params;
    try {
      const brand = Brands.findByPk(id)
      return super.success(res, msg.fetch, 200, brand)
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async create(req, res) {
    const { body } = req;
    try {
      const data = await Brands.create(body);
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
      const [exitCode, [brand]] = await Brands.update(body, {
        returning: true,
        where: { id }
      });
      return exitCode
        ? super.success(res, message, 200, brand)
        : super.error(res, notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const exitCode = await Products.destroy({
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

module.exports = BrandController;
