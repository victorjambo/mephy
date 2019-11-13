const models = require('../../db/models');
const Response = require('../../helpers/Response')

const msg = {
  notFound: 'Product not found',
  create: 'Product successfully created',
  updated: 'Product successfully updated',
  delete: 'Product successfully deleted',
  fetch: 'Product successfully fetched',
}


class ProductController extends Response {
  static async gets(_, res) {
    try {
      const products = await models.Products.findAll({
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
      const product = await models.Products.findOne({
        where: { id }
      });
      return product
        ? super.success(res, msg.fetch, 200, product)
        : super.error(res, msg.notFound, 404);
    } catch (error) {
      console.log({error})
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async create(req, res) {
    const { body } = req;
    try {
      const data = await models.Products.create(body);
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
      const [exitCode, [product]] = await models.Products.update(body, {
        returning: true,
        where: { id }
      });
      return exitCode
        ? super.success(res, msg.updated, 200, product)
        : super.error(res, msg.notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const exitCode = await models.Products.destroy({
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

module.exports = ProductController;
