import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // register user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  //   logout user
  const logoutUser = () => {
    return signOut(auth);
  };
  // update user functionality for using in register page
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // firease observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curretUser) => {
      setUser(curretUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    registerUser,
    logoutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
