import { TEST } from '../constants';

export const testFunc = message => ({
  type: TEST, message
});

export const testAction = () => dispatch => dispatch(testFunc('data'));
