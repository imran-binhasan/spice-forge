import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';


export const AuthContext = createContext(null);


const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();


    const loginUser = (email, password) => {
        setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleSignIn  = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signUpUser = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateNewUser = (name) => {
        return updateProfile(auth.currentUser, {displayName:name})
    }


    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                if(currentUser){
                    const userInfo = {email: currentUser?.email};
                    axiosPublic.post('/api/auth', userInfo)
                    .then(res => {
                        localStorage.setItem('access-token', res.data.token)
                    })
                }
                else{
                    localStorage.removeItem('access-token')
                }
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
        googleSignIn,
        signUpUser,
        updateNewUser,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;