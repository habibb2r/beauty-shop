/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../ConfigFiles/firebase.config";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const sendResetEmail = (email) =>{
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      //Get set token
      // if(currentUser){
      //     axios.post('https://market-server-two.vercel.app/jwt', {email: currentUser.email})
      //     .then(data=> {
      //         // console.log(data.data.token)
      //         localStorage.setItem('token', data.data.token);
      //         setLoading(false);
      //     })
      // }
      // else{

      //     localStorage.removeItem('token');
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, [setUser]);
  const authInfo = {
    user,
    loading,
    createUser,
    updateUser,
    signin,
    signInGoogle,
    logOut,
    sendResetEmail
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;