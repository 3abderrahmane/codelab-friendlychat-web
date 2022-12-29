/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
    apiKey: "AIzaSyAxYttZqSJJvSxHEBuBURMPR-d72oDtX6E",
    authDomain: "friendlychat-6903d.firebaseapp.com",
    projectId: "friendlychat-6903d",
    storageBucket: "friendlychat-6903d.appspot.com",
    messagingSenderId: "252793619798",
    appId: "1:252793619798:web:1b6ff5bce9d4f53b3882f7"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
