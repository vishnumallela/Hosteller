import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_EZns2oYVhzS7n4rSxNNca791jNSbgco",
    authDomain: "hci-project-d35b2.firebaseapp.com",
    projectId: "hci-project-d35b2",
    storageBucket: "hci-project-d35b2.appspot.com",
    messagingSenderId: "299143698268",
    appId: "1:299143698268:web:ae008ddeb9853072fe5399"
  };

  const fireApp =firebase.initializeApp(firebaseConfig);
  export const fireauth= fireApp.auth()
  export const db =fireApp.firestore();