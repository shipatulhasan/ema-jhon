import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from './firebase/firebase';

export const AuthContext = createContext()
const auth = getAuth(app)

const UseContext = ({children}) => {
    const [user,setUser] = useState({displayName:'akash'})
    const [isLoading,setLoading] = useState(true)

    // Create user

    const createUser = (email,pass)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Signin User
     
    const signInUser = (email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // signOut user

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // setUser 

    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, currentUser=>{

            setLoading(false)
            setUser(currentUser)
        })
        return ()=>{

            unSubscribe()
        }
    }, [])

    const authInfo = {user, createUser, signInUser, logOut, isLoading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;