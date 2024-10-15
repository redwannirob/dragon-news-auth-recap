import { createUserWithEmailAndPassword } from "firebase/auth";

import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContex = createContext(null);

const AuthProvider = ({children}) => {
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {createUser};
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