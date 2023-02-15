import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCuajDow5xvNA5ncS4VVLju1YCyz_ru3Hk",
    authDomain: "first-login-authenticati-16d93.firebaseapp.com",
    projectId: "first-login-authenticati-16d93",
    storageBucket: "first-login-authenticati-16d93.appspot.com",
    messagingSenderId: "69516459130",
    appId: "1:69516459130:web:63c9783f398fa009498fc3"
};
  
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;