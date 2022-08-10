import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBIJAxa3uiqDRiq8uQF1MAurLuWxx2MRE0",
    authDomain: "react-blogs-app-e7d13.firebaseapp.com",
    projectId: "react-blogs-app-e7d13",
    storageBucket: "react-blogs-app-e7d13.appspot.com",
    messagingSenderId: "432792089917",
    appId: "1:432792089917:web:de44292b33e4211a98c154"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };