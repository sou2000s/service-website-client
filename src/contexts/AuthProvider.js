import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext()

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [userProfile , setUserProfile] = useState() 

    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth , email , password)
    }
  
    const setUserNameAndProfile = (profile)=>{
        return updateProfile(auth.currentUser , profile)
    }
    
    const login = (email , password) => {
          return signInWithEmailAndPassword(auth , email , password)
    }

    const logout = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        createUser ,
        user ,
        setUserNameAndProfile , 
        setUserProfile,
        logout,
        login             
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
        })
        return ()=> unsubscribe()
    } , [userProfile])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

