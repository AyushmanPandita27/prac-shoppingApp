import {formFields, setFormFields} from 'react';
import { useState, useContext } from 'react';
import { createWithEmailPass, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from './form-input.component';
import './signin.styles.scss';
import Button from '../button/button.component';
import { signInWithGooglePopup, signInWithEmailPass} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';

const defaultFormFields = {
  
    email:'',
    password:'',
   
}

const SignInForm = () =>{
    const [formFields, setFormFields]= useState(defaultFormFields);
    const {
    email,
    password,
   } = formFields;
    // console.log(formFields);
//  const {setCurrentUser} = useContext(UserContext);
const resetFormFields = () =>{
    setFormFields(defaultFormFields);
}

const signInWithGoogle = async () =>{
    // const response = await signInWithGooglePopup();
    // console.log(response);
    await signInWithGooglePopup();
    // setCurrentUser(user);
  
    
  };


    //code for sign up with email/pass
const handleSubmit = async(event)=>{
event.preventDefault();

try {
const {user} =await signInWithEmailPass(email, password);
console.log({user});
resetFormFields();
// setCurrentUser(user);

} catch (error) {
//   if(error.code==='auth/wrong-password'){
//     alert('wrong password');
//   }
switch(error.code){
    case 'auth/wrong-password':
        alert('wrong password');
        break;
        case 'auth/user-not-found':
            alert('user does not exist, kindly sign up to be an OPAC');
            break;
            default:
                console.log(error);
}
}
}
  //till here- code for sign up with email/pass
    const handleChange = (event) =>{
         const {name, value}=event.target;
         setFormFields({...formFields, [name]:value});
         };
  
 
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign Up With Your Email & Password</span>
            <form onSubmit={handleSubmit}>  
            
            
           
             <FormInput label='Email' type = 'email' required  onChange={handleChange} name='email' value={email}/>
           
             <FormInput label='Password' type = 'password' required onChange={handleChange} name='password' value={password} />
           
            <div className='buttons-container'>
             <Button  type='submit'>Sign In</Button>
             <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
             </div>
            </form>
           
        </div>
    );
}

export default SignInForm;