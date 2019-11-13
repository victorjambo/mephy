import express from 'express';
import QuestionController from './TestController';
import middlewares from '../../middlewares';

const Router = express.Router();

const { Validator } = middlewares;

const attr = ['title', 'description'];

Router.get(
  '/questions',
  QuestionController.getQuestions
);

Router.get(
  '/questions/:id',
  Validator.validateId,
  QuestionController.getQuestion
);

Router.post(
  '/questions',
  Validator.validateReq(attr),
  QuestionController.createQuestion
);

Router.patch(
  '/questions/:id',
  Validator.validateId,
  Validator.validateUpdate(attr),
  QuestionController.updateQuestion
);

Router.delete(
  '/questions/:id',
  Validator.validateId,
  QuestionController.deleteQuestion
);

export default Router;
