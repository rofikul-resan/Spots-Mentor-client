import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "../Firebase/firebase";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const updateUser = onAuthStateChanged(auth, async (currentUser) => {
      setInitLoading(false);
      setUser(currentUser);
      if (currentUser) {
        const res = await axios.post("http://localhost:5000/add-users", {
          name: currentUser.displayName,
          email: currentUser.email,
          roll: "student",
        });

        if (res.data.insertId > 0) {
          console.log(res.data);
        }
      }
      setLoading(false);
    });

    return () => updateUser();
  }, [auth]);

  const authValue = {
    user,
    initLoading,
    loading,
    createUser,
    login,
    updateUser,
    logout,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
