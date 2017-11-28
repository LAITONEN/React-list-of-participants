import firebase from 'firebase'; 

const config = {
      apiKey: "AIzaSyDbi2QZ7F83rAv6OLq-hCVXKQH0kCKgiGc",
      authDomain: "list-of-participants.firebaseapp.com",
      databaseURL: "https://list-of-participants.firebaseio.com",
      projectId: "list-of-participants",
      storageBucket: "list-of-participants.appspot.com",
      messagingSenderId: "439908551259"
  };
firebase.initializeApp(config);

export default firebase;