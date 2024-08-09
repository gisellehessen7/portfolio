// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRyoOwHEUqR_KXQsPim6YU29eaAres5Eo",
  authDomain: "projetsportfolio-2c0f1.firebaseapp.com",
  databaseURL: "https://projetsportfolio-2c0f1-default-rtdb.firebaseio.com",
  projectId: "projetsportfolio-2c0f1",
  storageBucket: "projetsportfolio-2c0f1.appspot.com",
  messagingSenderId: "403265524741",
  appId: "1:403265524741:web:8431e4647c63023273386c",
  measurementId: "G-ZXYNXBDXR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialiser Realtime Database

export { database };
