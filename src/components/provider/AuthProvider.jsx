import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";


// firebase provider
const googleProvider = new GoogleAuthProvider;
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    const [room, setRoom] = useState();

    useEffect(()=>{
        fetch('https://dream-hostel-server.vercel.app/bookings')
        .then(res=>res.json())
        .then(data=>{
            data.map(rm => setRoom(rm))
            
        })

    },[])

      // singUp email and password
      const createUserSignUpWithEmailPassword =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

     // sign In with email and password
     const userSignIn =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const updateUserProfile = (object)=> {
        setLoading(true);
        return updateProfile(auth.currentUser, object);
    }

     // sign in with google 
     const google = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

      // sing out
      const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

       // user
       useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return unSubcribe;
    },[])

    console.log(user);
    const info = {
        user,
        createUserSignUpWithEmailPassword,
        userSignIn,
        loading,
        updateUserProfile,
        google,
        logOut,
        room
    }
    
    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;