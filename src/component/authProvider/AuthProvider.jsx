import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../../../firebase.config.init';

export const AuthContext=createContext(null)

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubsCribe=onAuthStateChanged(auth,currentUser=>{
            console.log('on Auth State Changed',currentUser);
            setUser(currentUser)
        })
        return()=>{
            unsubsCribe()
        }
    },[])
    const logOut=()=>{
        return signOut(auth)
    }
    const authInfo={
        user,
        createUser,
        loginUser,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;