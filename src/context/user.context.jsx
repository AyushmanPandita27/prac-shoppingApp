
import {createContext, useEffect, useState} from 'react';
import { onAuthStateChangedListenter , signOutUser} from '../utils/firebase/firebase.utils';
import { createUserDocFromAuth } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
currentUser: null,
setCurrentUser: ()=>null

})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser]=useState(null);
    const value  = {currentUser, setCurrentUser};
    signOutUser();
    useEffect(()=>{
     const unsubscribe=onAuthStateChangedListenter((user)=>{
        if(user){
            createUserDocFromAuth(user);
        }
       setCurrentUser(user);
     });
    return unsubscribe;

    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

