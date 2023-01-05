import { auth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
 import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../signup/sign-up-form.component";
import SignInForm from "../signup/sign-in.component";
import './signAuth.styles.scss';

const Sign = ()=>{

  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if(response){ createUserDocFromAuth(response.user) };
  //     console.log(response);
  //   },
  //   []
  // );



//redirect
  // const logGoogleUserRedirect = async () =>{
  //   // const response = await signInWithGooglePopup();
  //   // console.log(response);
  //   const {user} = await signInWithGoogleRedirect();
  //   console.log(user);
  // };
 
    return(
      <div className= 'authentication-container'>
      
        {/* <button onClick = {logGoogleUser} >click me to sign up with google</button> */}
        {/* <button onClick = {signInWithGoogleRedirect }>click me to sign up with google Redirect</button> */}
       <SignInForm/>
        <SignUpForm/>
      </div>

    );
}

export default Sign;