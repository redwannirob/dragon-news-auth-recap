import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContex = createContext(null);

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('user in the auth state changed',currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {user,loading,createUser,logIn,logOut};
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;

AuthProvider.proptypes = {
    children: PropTypes.node,
}