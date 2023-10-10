import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const googleProvider = new GoogleAuthProvider()

   const Login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const signWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }

   const Info = {
      Login,
      createUser,
      logOut,
      loading,
      user,
      signWithGoogle,
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('user in auth state', currentUser);
         setUser(currentUser)
         setLoading(false)
      })
      return () => unSubscribe()
   },[])

   return (
      <AuthContext.Provider value={Info}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;