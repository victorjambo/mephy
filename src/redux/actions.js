import { toast } from 'react-toastify';

import firebase from '../helpers/firebase';
import fixturesProducts from '../fixtures/djoproducts_v2';
import fixturesServices from '../fixtures/services_v1';
import fixturesBrands from '../fixtures/brands_v1';
import fixturesCategories from '../fixtures/category_v1';


const error = () => toast.warn('There was an error submitting the email. Try reloading the page');
const handleContactUs = firebase.functions().httpsCallable('handleContactUs');
const handleAppointments = firebase.functions().httpsCallable('handleAppointments');

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
    .then((res) => {
      handleContactUs({ id: res.id });
      toast.success('Thank you for reaching out. Our team will be in contact soon');
    })
    .catch(() => error());
};

export const createAppointment = data => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('appointments').add({
    ...data,
    createdAt: new Date()
  })
    .then((res) => {
      handleAppointments({ id: res.id });
      toast.success('Appointment Booked');
    })
    .catch(() => error());
};

export const createProduct = data => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('products').add({
    ...data,
    createdAt: new Date()
  })
    .then(() => toast.success('Product successfully created'))
    .catch(() => error());
};

export const migrateProducts = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixturesProducts.forEach((product) => {
    product.brandRef = firestore.doc(product.brandRef);
    product.category = firestore.doc(product.category);
    product.createdAt = new Date();
    firestore.collection('products').add(product)
      .then(() => toast.success(`${product.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${product.title}`));
  });
};

export const migrateServices = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixturesServices.forEach((service) => {
    service.createdAt = new Date();
    firestore.collection('services').add(service)
      .then(() => toast.success(`${service.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${service.title}`));
  });
};

export const migrateBrands = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixturesBrands.forEach((brand) => {
    brand.createdAt = new Date();
    firestore.collection('brands').add(brand)
      .then(() => toast.success(`${brand.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${brand.title}`));
  });
};

export const migrateCategories = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixturesCategories.forEach((cat) => {
    cat.createdAt = new Date();
    firestore.collection('categories').add(cat)
      .then(() => toast.success(`${cat.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${cat.title}`));
  });
};
