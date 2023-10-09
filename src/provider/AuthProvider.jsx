import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const Login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
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
      user
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