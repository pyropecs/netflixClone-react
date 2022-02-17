import FireBase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";
const config = {
  apiKey: "AIzaSyCjnqFWzG5ZQLJ3SGCiyDzZyquT5NL2EaM",
  authDomain: "netflix-clone-f3061.firebaseapp.com",
  projectId: "netflix-clone-f3061",
  storageBucket: "netflix-clone-f3061.appspot.com",
  messagingSenderId: "724359888437",
  appId: "1:724359888437:web:944096f50733ce8889fb7c",
};

const firebase = FireBase.initializeApp(config);

export { firebase };
