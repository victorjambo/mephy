import { toast } from 'react-toastify';

import firebase from '../helpers/firebase';
import fixtures from '../fixtures/v2';
import fixturesV1 from '../fixtures/v1';
import df from '../helpers/dynamicFilters';


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

export const getProducts = filters => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  firestore.get(df('products', {
    collection: 'categories',
    fields: {
      fields: 'category',
      operator: '==',
      value: filters
    }
  }));
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

export const getCategories = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.get({ collection: 'categories' });
};

// MIGRATIONS
// depends on category, brandRef, bodyType
export const migrateProducts = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixturesV1.products.forEach((product) => {
    product.brandRef = firestore.doc(product.brandRef);
    product.category = firestore.doc(product.category);
    // product.bodyType = firestore.doc(product.bodyType);
    // product.subBodyType = firestore.doc(product.subBodyType);
    product.createdAt = new Date();
    firestore.collection('products').add(product)
      .then(() => toast.success(`${product.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${product.title}`));
  });
};

export const migrateServices = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixtures.services.forEach((service) => {
    service.createdAt = new Date();
    firestore.collection('services').add(service)
      .then(() => toast.success(`${service.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${service.title}`));
  });
};

export const migrateBrands = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixtures.brands.forEach((brand) => {
    brand.createdAt = new Date();
    firestore.collection('brands').add(brand)
      .then(() => toast.success(`${brand.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${brand.title}`));
  });
};

export const migrateCategories = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixtures.categories.forEach((cat) => {
    cat.createdAt = new Date();
    firestore.collection('categories').add(cat)
      .then(() => toast.success(`${cat.title} successfully created`))
      .catch(() => toast.warn(`Error creating ${cat.title}`));
  });
};

export const migrateAnatomies = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  fixtures.anatomies.forEach((anatomy) => {
    firestore.collection('anatomies').add({
      title: anatomy.title,
      createdAt: new Date()
    })
      .then((res) => {
        toast.success(`anatomy ${anatomy.title} successfully created`);
        anatomy.types.forEach((type) => {
          type.createdAt = new Date();
          firestore.collection('anatomies')
            .doc(res.id)
            .collection('types')
            .add(type)
            .then(() => toast.success(`Type ${type.title} successfully created`))
            .catch(() => toast.warn(`Error creating ${type.title}`));
        });
      })
      .catch(() => toast.warn(`Error creating ${anatomy.title}`));
  });
};
