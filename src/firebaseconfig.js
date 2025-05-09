import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAWfd0DkyJbxKaHfUcyANA6P_6oPkdkffo",
//   authDomain: "auth-16555.firebaseapp.com",
//   projectId: "auth-16555",
//   storageBucket: "auth-16555.firebasestorage.app",
//   messagingSenderId: "280357941511",
//   appId: "1:280357941511:web:3be5ba1d9e41e10c4b95a2",
//   measurementId: "G-GX23RGJF0R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;