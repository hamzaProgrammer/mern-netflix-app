import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCN8Qag7ZQMx2Bxwh-kNYy1zYUf7JLfvvw",
  authDomain: "mernnetflixapp.firebaseapp.com",
  projectId: "mernnetflixapp",
  storageBucket: "mernnetflixapp.appspot.com",
  messagingSenderId: "27968249862",
  appId: "1:27968249862:web:5c5153ee70cf376e332387",
  measurementId: "G-VP90Y66R5J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export { storage , firebase as default }