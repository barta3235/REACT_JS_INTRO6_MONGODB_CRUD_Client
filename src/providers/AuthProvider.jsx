import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export const AuthContext= createContext(null); 
import auth from "../firebase/firebase.config";

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    

    const authInfo={user,createUser,loading,signInUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;