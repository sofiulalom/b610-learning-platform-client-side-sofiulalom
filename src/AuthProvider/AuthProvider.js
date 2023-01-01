import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext=createContext()
const auth=getAuth(app) 
const AuthProvider = ({children}) => {
  const [user, setUser]=useState(null);
  const [loading, setLoading]=useState(true)
    
    const providerGoogle=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createLoginUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)

    }
    const UserLogin=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const upDateuserprofile=(Profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,Profile)
    }
    const LogOut=(email, password)=>{
        setLoading(true)
        return signOut(auth, email, password)
    }
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (createUser)=>{
            console.log('this is currentuser',createUser);
            setUser(createUser)
            setLoading(false)
        })
        return ()=>{
            unSubscriber()
        }

    },[])

    const authInfo={
        user,
        providerGoogle,
        createLoginUser,
        UserLogin,
        LogOut,
        loading,
        upDateuserprofile
        }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;