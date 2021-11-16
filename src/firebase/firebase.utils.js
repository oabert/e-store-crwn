import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyDc07CfaI09qe_lBg3HcLOOpRu94SW1UME",

    authDomain: "crwn-db-cd7f4.firebaseapp.com",

    projectId: "crwn-db-cd7f4",

    storageBucket: "crwn-db-cd7f4.appspot.com",

    messagingSenderId: "76511143005",

    appId: "1:76511143005:web:d760af1ae6f9af00db99b4",

    measurementId: "G-RG0SBDNLEL"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;