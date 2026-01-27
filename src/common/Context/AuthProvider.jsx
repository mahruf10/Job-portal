import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import auth from '../../../firebase.init';
export const AuthContext=createContext(null)
const GoogleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const[User,setUser]=useState(0)
    const[loading,setloading]=useState(true)
  const CreateUser=(email,password)=>{
    setloading(true)
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const signwithgoogle=()=>{
    return signInWithPopup(auth,GoogleProvider)
  }
  const logout=()=>{
    return signOut(auth)
  }
  const loginUser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
   useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,currentUser=>{
 setUser(currentUser);
 setloading(false);
   })
   return () =>{
   unsubscribe ();
   }
  },[])
   
    const AuthInfo={
    User,
    loading,
    CreateUser,
    loginUser,
    logout,
    signwithgoogle

    }
    return (
      <AuthContext.Provider value={AuthInfo}>
      {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;