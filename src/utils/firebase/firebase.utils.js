import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged , createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider , signOut} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAmn4L_emPwLkNkOrCcK6_oFZGx6Hf5PQA",
    authDomain: "prac-shop-db.firebaseapp.com",
    projectId: "prac-shop-db",
    storageBucket: "prac-shop-db.appspot.com",
    messagingSenderId: "762083362914",
    appId: "1:762083362914:web:dca1a0802c3b627fb1e93b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.getCustomParameters({ prompt:"select_account" });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  //redirect  
  // export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocFromAuth = async (uAth,additionalInfo={}) =>{
    //to protect our code 
    if(!uAth) return;
    //TILL HERE
    const userDocRef = doc(db, 'users', uAth.uid);  
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());    //to chk weatgher or not the data we r logging in is present or not.

    //to det the data in db if the intsance  is happening
if(!userSnapshot.exists()){
  const {displayName, email} = uAth;
  const createdDate = new Date();
  
  try {
await setDoc(userDocRef, {displayName,email,createdDate, ...additionalInfo});    
  } catch (error) {
   console.log('error while uploading the user', error.message()); 
  }
}
return userSnapshot;
  };

export const createWithEmailPass = async(email,password) =>{
  //to protect our code 
  if(!email || !password  ) return;
//TILL HERE
return await createUserWithEmailAndPassword(auth, email, password);


 
}

export const signInWithEmailPass = async(email,password) =>{
  //to protect our code 
  if(!email || !password  ) return;
//TILL HERE
return await signInWithEmailAndPassword(auth, email, password);



};

export const signOutUser = async () =>await signOut(auth)


//if auth is changed it gives a callback
export const onAuthStateChangedListenter=(callback)=>onAuthStateChanged(auth,callback);
