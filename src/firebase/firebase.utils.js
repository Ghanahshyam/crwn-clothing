import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_rbcoVqxFwQnLsYBucBmGoUHzYCN6AGo",
  authDomain: "crwn-db-d5332.firebaseapp.com",
  databaseURL: "https://crwn-db-d5332.firebaseio.com",
  projectId: "crwn-db-d5332",
  storageBucket: "crwn-db-d5332.appspot.com",
  messagingSenderId: "190717289096",
  appId: "1:190717289096:web:e2d0a2aaf705ebd5f7f53d"
};

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore =  firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt:'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
