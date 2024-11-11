import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    }

    const signUpUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                console.log(currentUser);
                setLoading(false)
        });
        return () => unsubscribe();

    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        loginUser,
        signUpUser,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;