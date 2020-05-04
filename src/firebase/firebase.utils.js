import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "e-commerce-85c6a.firebaseapp.com",
  databaseURL: "https://e-commerce-85c6a.firebaseio.com",
  projectId: "e-commerce-85c6a",
  storageBucket: "e-commerce-85c6a.appspot.com",
  messagingSenderId: "965021677108",
  appId: "1:965021677108:web:d2397fa865fe681616fc61",
};
// Initialize Firebase
firebase.initializeApp(config);

//export const addCollectionAndDocuments = async (
//  collectionKey,
//  objectsToAdd
//) => {
//  const collectionRef = firestore.collection(collectionKey);

//  const batch = firestore.batch();
// objectsToAdd.forEach((obj) => {
//   const newDocRef = collectionRef.doc();
//   batch.set(newDocRef, obj);
//  });

//  return await batch.commit();
//};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const firestore = firebase.firestore();
