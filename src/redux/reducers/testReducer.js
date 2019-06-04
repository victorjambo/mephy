import { TEST } from '../constants';
import initialState from '../initialState';


const testReducer = (state = initialState.message, action) => {
  switch (action.type) {
  case TEST:
    return {
      ...state,
      message: action.message
    };
  default:
    return state;
  }
};

export default testReducer;
