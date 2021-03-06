import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHXcrlNEmuqeofgWyTD9v59JRcz6D5_24',
  authDomain: 'udemy-vue-firebase-sites-6f2ae.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-6f2ae',
  storageBucket: 'udemy-vue-firebase-sites-6f2ae.appspot.com',
  messagingSenderId: '629012725587',
  appId: '1:629012725587:web:40f4f928f7a8581bafeba6',
};

//init firebase
firebase.initializeApp(firebaseConfig);
//init firebase service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
