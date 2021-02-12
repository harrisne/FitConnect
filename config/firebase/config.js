//Use this to debug
// const firebase = require('firebase');


// require("@firebase/auth");
// require("@firebase/firestore")
// require("@firebase/database")

// const firebaseConfig = {
//     apiKey: "AIzaSyC2W4ynBW_JTBMdfXNjzZVuHRuBOuTFlgw",
//     authDomain: "fitconnect-ba3bb.firebaseapp.com",
//     databaseURL: "https://fitconnect-ba3bb-default-rtdb.firebaseio.com",
//     projectId: "fitconnect-ba3bb",
//     storageBucket: "fitconnect-ba3bb.appspot.com",
//     messagingSenderId: "927068918111",
//     appId: "1:927068918111:web:fe057dff7de1c5232d26ea",
//     measurementId: "G-8R4BXHDZVM"
// };

// firebase.initializeApp(firebaseConfig);
// var db = firebase.database();
// var firestore = firebase.firestore();
// var auth = firebase.auth();

// module.exports =  {firebase, auth, firestore};

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//var firebase = require("firebase/app");
import firebase from 'firebase';

// Add the Firebase products that you want to use
require("@firebase/auth");
require("@firebase/firestore")
require("@firebase/database")

const firebaseConfig = {
    apiKey: "AIzaSyC2W4ynBW_JTBMdfXNjzZVuHRuBOuTFlgw",
    authDomain: "fitconnect-ba3bb.firebaseapp.com",
    databaseURL: "https://fitconnect-ba3bb-default-rtdb.firebaseio.com",
    projectId: "fitconnect-ba3bb",
    storageBucket: "fitconnect-ba3bb.appspot.com",
    messagingSenderId: "927068918111",
    appId: "1:927068918111:web:fe057dff7de1c5232d26ea",
    measurementId: "G-8R4BXHDZVM"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var firestore = firebase.firestore();
var auth = firebase.auth();

export  {firebase, auth, firestore};