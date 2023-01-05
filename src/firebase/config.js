import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAt1jUBsXf2JL28KTTAfA8tJIvKvr6NkSk",
    authDomain: "olx-clone-d3f9a.firebaseapp.com",
    projectId: "olx-clone-d3f9a",
    storageBucket: "olx-clone-d3f9a.appspot.com",
    messagingSenderId: "901492835702",
    appId: "1:901492835702:web:f52b8416c6d114fceee657",
    measurementId: "G-D1XPND2N2S"
  };

export default firebase.initializeApp(firebaseConfig)