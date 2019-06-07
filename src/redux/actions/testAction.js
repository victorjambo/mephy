import { TEST, GET_DATA } from '../constants';

const product = {
  rating: 2,
  link: '/products/3',
  image: 'assets/images/products/14.png',
  tag: 'Geriatrics, Health, Psychology',
  initialPrize: 'Ksh. 145',
  prize: 'Kes. 124',
  title: 'Medichine Capsule',
  flag: 'new',
  description: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat leo.'
};

export const testFunc = message => ({
  type: TEST, message
});

export const testAction = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('products').add({
    ...product
  })
    .then((res) => {
      console.log(res);
      dispatch(testFunc('data'));
    })
    .catch(error => console.log(error));
};

export const testFunc2 = products => ({
  type: GET_DATA, payload: products
});

export const testGetProducts = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.get({ collection: 'products' });
};
