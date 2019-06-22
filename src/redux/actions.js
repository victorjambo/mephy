export const healthcheck = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.get({ collection: 'healthcheck' });
};

export const getServices = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.get({ collection: 'services' });
};

export const getService = id => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.get({ collection: 'services', doc: id });
};

export const getProducts = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.get({ collection: 'products' });
};

export const getProduct = id => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.get({ collection: 'products', doc: id });
};
