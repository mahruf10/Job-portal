import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
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

 if(currentUser?.email){
  const user={email:currentUser.email}
   axios.post('https://job-portal-server-six-theta.vercel.app/jwt',user,{withCredentials:true})
   .then(res=>{
    console.log('logged in',res.data);
    setloading(false)})
  
 }
 else{
  axios.post('https://job-portal-server-six-theta.vercel.app/logout',{},{withCredentials:true})
  .then(res=>{
    console.log('logout',res.data);
     setloading(false)
  })
 }
 
   })
   return () =>{
   unsubscribe ();
   }
  },[])
// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, async currentUser => {
//     setUser(currentUser);

//     if (currentUser?.email) {
//       try {
//         await axios.post(
//           'https://job-portal-server-six-theta.vercel.app/jwt',
//           { email: currentUser.email },
//           { withCredentials: true }
//         );
//       } finally {
//         setloading(false); // 🔥 JWT set হওয়ার পর
//       }
//     } else {
//       await axios.post(
//         'https://job-portal-server-six-theta.vercel.app/logout',
//         {},
//         { withCredentials: true }
//       );
//       setloading(false);
//     }
//   });

//   return () => unsubscribe();
// }, []);

   
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