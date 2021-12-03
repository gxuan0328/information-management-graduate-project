import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2QpRItcSptLwU0y9sPNPua9CkHSqpR1Q",
    authDomain: "sugarcane-10d1f.firebaseapp.com",
    projectId: "sugarcane-10d1f",
    storageBucket: "sugarcane-10d1f.appspot.com",
    messagingSenderId: "426395226933",
    appId: "1:426395226933:android:ea30cc927b684d8d23327c"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore();

export default firebase;