import models from '../../db/models';
import Response from '../../helpers/Response';

const notFound = 'Test not found';

class TestController extends Response {
  static async getTests(_, res) {
    try {
      const allAuestions = await models.Test.findAll({
        order: [['createdAt', 'DESC']]
      });
      return res.status(200).json({
        data: allAuestions,
        success: true,
        message: 'Successfully fetched Tests'
      });
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async getTest(req, res) {
    const { id } = req.params;
    try {
      const Test = await models.Test.findByPk(id);
      const message = 'Test Successfully fetched';
      return Test
        ? super.success(res, message, 200, Test)
        : super.error(res, notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async createTest(req, res) {
    const { body } = req;
    try {
      const Test = await models.Test.create(body);
      return res.status(201).json({
        data: Test,
        success: true,
        message: 'Test successfully created'
      });
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async updateTest(req, res) {
    const {
      body,
      params: { id }
    } = req;
    try {
      const [exitCode, [Test]] = await models.Test.update(body, {
        returning: true,
        where: { id }
      });
      const message = 'Test successfully updated';
      return exitCode
        ? super.success(res, message, 200, Test)
        : super.error(res, notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }

  static async deleteTest(req, res) {
    const { id } = req.params;
    try {
      const exitCode = await models.Test.destroy({
        where: { id }
      });
      const message = 'Test successfully deleted';
      return exitCode
        ? super.success(res, message, 200)
        : super.error(res, notFound, 404);
    } catch (error) {
      return super.error(res, super.envErrors(error), 500);
    }
  }
}

export default TestController;
