import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA_dKtuXKw9QmAHJ5sHvwa1jAIO57UKANo",
    authDomain: "twitter-test-d74a2.firebaseapp.com",
    projectId: "twitter-test-d74a2",
    storageBucket: "twitter-test-d74a2.appspot.com",
    messagingSenderId: "825348168389",
    appId: "1:825348168389:web:ece08c44bc7892bfad2eac",
    measurementId: "G-E2WQ9L6WFV"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export const storageService = firebase.storage();