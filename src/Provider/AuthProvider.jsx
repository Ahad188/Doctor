import { createContext, useEffect, useState } from "react";
import { app } from "../Components/Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
 
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const googleProvider = new GoogleAuthProvider();


     const createUser = (email,password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
     }
     const singIn = (email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
     const googleSing=()=>{
          return signInWithPopup(auth, googleProvider)
     }
     const logOut =()=>{
          setLoading(true)
          return signOut(auth)
     }
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, loggedUser => {
          //     console.log('logged in user inside auth state observer', loggedUser)
              setUser(loggedUser);
               setLoading(true)
          })
  
          return () => {
              unsubscribe();
          }
      }, [])

     const authInfo ={
          user,
          loading,
          createUser,
          singIn,
          googleSing,
          logOut,
     }
     return (
          <AuthContext.Provider value={authInfo}>
               { children }
          </AuthContext.Provider>
     );
};

export default AuthProvider;