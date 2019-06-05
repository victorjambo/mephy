import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBNBvUb3EbSyLVYGIywsjhNbEpQFMlTL_A',
  authDomain: 'mephy-physiotherapy.firebaseapp.com',
  databaseURL: 'https://mephy-physiotherapy.firebaseio.com',
  projectId: 'mephy-physiotherapy',
  storageBucket: 'mephy-physiotherapy.appspot.com',
  messagingSenderId: '916215437027',
  appId: '1:916215437027:web:dab9af79f27286d9'
};

firebase.initializeApp(config);

export default firebase;
