import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firebase auth
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyA1GGbvuriyk8-cii3oQJquDEFLpvj5dYU",
  authDomain: "chatter-334a3.firebaseapp.com",
  projectId: "chatter-334a3",
  storageBucket: "chatter-334a3.appspot.com",
  messagingSenderId: "459734418610",
  appId: "1:459734418610:web:72170fc8a40fde017375ab",
  measurementId: "G-V82FMJQT8M"
}

// init firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
