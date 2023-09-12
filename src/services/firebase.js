import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDi56riBncyAMkJq3kcQh2O38DUX0umCTk",
    authDomain: "crbase-3b394.firebaseapp.com",
    projectId: "crbase-3b394",
    storageBucket: "crbase-3b394.appspot.com",
    messagingSenderId: "293731273383",
    appId: "1:293731273383:web:10219036baa70085cde982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

