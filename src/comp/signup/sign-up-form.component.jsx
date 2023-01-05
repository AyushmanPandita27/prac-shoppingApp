import {formFields, setFormFields} from 'react';
import { useState } from 'react';
import { createWithEmailPass, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from './form-input.component';
import './signupform.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () =>{
    const [formFields, setFormFields]= useState(defaultFormFields);
    const {displayName,
    email,
    password,
    confirmPassword} = formFields;
    // console.log(formFields);

const resetFormFields = () =>{
    setFormFields(defaultFormFields);
}
 
// const {setCurrentUser} = useContext(UserContext);
    //code for sign up with email/pass
const handleSubmit = async(event)=>{
event.preventDefault();
if(password!==confirmPassword){
    alert('wrong password');
    return;
}
try {
    const {user} = await createWithEmailPass(email,password);
   
    
// setCurrentUser(user);

await createUserDocFromAuth(user, {displayName});
resetFormFields();


} catch (error) {
    if(error.code === 'auth/email-already-in-use'){
        alert('cannot create user email already in use');
    }else{
    console.log('error in login by email pass', error);
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
            <h2>Dont have an account?</h2>
            <span>Sign Up With Your Email & Password</span>
            <form onSubmit={handleSubmit}>  
            
             <FormInput label='Display Name' type = 'text' required onChange={handleChange} name='displayName' value={displayName}  />
           
             <FormInput label='Email' type = 'email' required  onChange={handleChange} name='email' value={email}/>
           
             <FormInput label='Password' type = 'password' required onChange={handleChange} name='password' value={password} />
           
             <FormInput label='Confirm Password' type = 'password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
             <Button  type='submit'>Sign Up</Button>
            </form>
           
        </div>
    );
}

export default SignUpForm;