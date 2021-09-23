import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDrUa_lqPm4RAdkqGk5MwHnWZflv9mU7M",
  authDomain: "quinbay-quiz.firebaseapp.com",
  databaseURL: "https://quinbay-quiz-default-rtdb.firebaseio.com",
  projectId: "quinbay-quiz",
  storageBucket: "quinbay-quiz.appspot.com",
  messagingSenderId: "927030546947",
  appId: "1:927030546947:web:bc4e6665b09def34c7b436",
  measurementId: "G-R5N8WL8BCV"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

// export default firebase.firestore();