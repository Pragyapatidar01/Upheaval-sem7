import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbxNIDM1n1lU3Oyo33ro92TFvZVQRk0ls",
    authDomain: "upheaval-962ab.firebaseapp.com",
    projectId: "upheaval-962ab",
    storageBucket: "upheaval-962ab.appspot.com",
    messagingSenderId: "1095849189870",
    appId: "1:1095849189870:web:9435184965bc84673faeff",
    measurementId: "G-4CK0TCFV9C"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  // export const firestore = firebase.firestore();

  // export const createUserDocument = async (user, additionalData) => {
  //   if(!user) return;
    
  //   // const userRef = firestore.doc(`users/${user.uid}`);
  //   const snapshot = await userRef.get();

  //   if(!snapshot.exists){
  //     const {email} = user;
  //     const {status} = additionalData;

  //     try{
  //       userRef.set({
  //         email,
  //         status,
  //         createdAt:new Date()
  //       });
  //     }  catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };
