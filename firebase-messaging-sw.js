importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCH1_WobmScL4_bkIn5pnEwQronzK8AgOQ",
    authDomain: "aztec-6b6eb.firebaseapp.com",
    projectId: "aztec-6b6eb",
    storageBucket: "aztec-6b6eb.appspot.com",
    messagingSenderId: "882930367393",
    appId: "1:882930367393:web:fc4115a4995e55482ba9e0",
    measurementId: "G-FZZ9JKE61E"
  });

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});