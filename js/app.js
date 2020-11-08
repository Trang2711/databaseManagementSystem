const firebaseConfig = {
    apiKey: "AIzaSyBiN2nhBHJLsu4O6bF7SoQ3fUVJLGselQI",
    authDomain: "chatapp-ci.firebaseapp.com",
    databaseURL: "https://chatapp-ci.firebaseio.com",
    projectId: "chatapp-ci",
    storageBucket: "chatapp-ci.appspot.com",
    messagingSenderId: "529991615918",
    appId: "1:529991615918:web:4271209ceb1a2b2719343f"
  };
  console.log(firebase.initializeApp(firebaseConfig).database);