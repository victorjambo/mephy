import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import testReducer from './testReducer';

export default combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  testReducer
});
