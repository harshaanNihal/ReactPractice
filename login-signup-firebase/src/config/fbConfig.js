  import firebase from 'firebase/app';
  import 'firebase/firestore'
  import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoYyFGru55NDed4Q0YzRubRdtNSciNtrE",
    authDomain: "login-signup-firebase-project.firebaseapp.com",
    databaseURL: "https://login-signup-firebase-project.firebaseio.com",
    projectId: "login-signup-firebase-project",
    storageBucket: "login-signup-firebase-project.appspot.com",
    messagingSenderId: "868236243639"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true });
  export default firebase;