import { TEST, GET_DATA } from '../constants';
import initialState from '../initialState';


const testReducer = (state = initialState.message, action) => {
  switch (action.type) {
  case TEST:
    return {
      ...state,
      message: action.message
    };
  case GET_DATA:
    return {
      ...state,
      products: action.payload
    };
  default:
    return state;
  }
};

export default testReducer;
