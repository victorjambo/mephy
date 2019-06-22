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

export const createNewsletter = email => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('newsletters').add({
    email,
    createdAt: new Date()
  }).then((res) => {
    console.log(res);
    // dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
  }).catch((err) => {
    console.log(err);
    // dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
  });
};

export const createContactUs = data => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('contactUs').add({
    ...data,
    createdAt: new Date()
  }).then((res) => {
    console.log(res);
    // dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
  }).catch((err) => {
    console.log(err);
    // dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
  });
};
