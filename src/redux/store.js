/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';


import rootReducer from './reducers';
import firebase from '../helpers/firebase';

const middlewares = [
  thunk.withExtraArgument({ getFirebase, getFirestore })
];
const devMiddleware = [logger, reduxImmutableStateInvariant()];

if (process.env === 'development') {
  middlewares.concat(devMiddleware);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
  )
);
