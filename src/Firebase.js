import firebase from "firebase"
var firebaseConfig = {
  apiKey: "AIzaSyAAYUvCrzfkzs-A7-12sBR7nKQTIqUPPJo",
  authDomain: "apconnect-a3812.firebaseapp.com",
  databaseURL: "https://apconnect-a3812.firebaseio.com",
  projectId: "apconnect-a3812",
  storageBucket: "apconnect-a3812.appspot.com",
  messagingSenderId: "929170999167",
  appId: "1:929170999167:web:7ab1ae81cc1f17ba"
  };
  // Initialize Firebase
  

  const Firebase = firebase.initializeApp(firebaseConfig)

  export default Firebase
