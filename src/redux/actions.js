import { toast } from 'react-toastify';

const error = () => toast.warn('There was an error submitting the email. Try reloading the page');


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
  })
    .then(() => toast.success('Thank you for subscribing to our newsletters'))
    .catch(() => error());
};

export const createContactUs = data => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('contactUs').add({
    ...data,
    createdAt: new Date()
  })
    .then(() => toast.success('Thank you for reaching out. Our team will be in contact soon'))
    .catch(() => error());
};

export const createAppointment = data => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('appointments').add({
    ...data,
    createdAt: new Date()
  })
    .then(() => toast.success('Appointment Booked'))
    .catch(() => error());
};
