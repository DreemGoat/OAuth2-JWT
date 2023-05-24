// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, 
    getAuth, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut,
  } from "firebase/auth";
  import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAv4uo1ZXemsFRGpAFeC7KIN6Jp0rYv-5A",
  authDomain: "inukoi.firebaseapp.com",
  projectId: "inukoi",
  storageBucket: "inukoi.appspot.com",
  messagingSenderId: "398490469474",
  appId: "1:398490469474:web:1ac16812f738c8780dbd3b",
  measurementId: "G-JQSJ4V9V95"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db  = getFirestore(app);

//Google authentication function
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle= async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName, 
                authProvider: "google",
                email: user.email,
            });
        }
    } catch(err) {
        console.error(err);
        alert(err.message);
    }
};

//function for signing in using email and password
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//function for registering user with email and password
const registerWithEmailAndPassword = async (name, email, password ) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid, 
            name, 
            authProvider: "local", 
            email,
        });
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

//function for sending a password reset link to email address
const sendPasswordReset = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link has been sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//function for logout
const logout = () => {
    signOut(auth)
    alert("You have logged out successfuly!")
}

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };