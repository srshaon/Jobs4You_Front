import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuth from "../firebase/firebase.init";
initializeAuth();

const useFirebase = () => {
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [history, setHistory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);
  const [backdrop, setBackdrop] = useState(false);
  const [admin, setAdmin] = useState("seeker");
  const [role, setRole] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [resetSearchKey, setResetSearchKey] = useState('');
  const [resetSearchLocation, setResetSearchLocation] = useState('');


  // const [condition, setCondition] = useState("seeker");

  useEffect(() => {
    fetch(`https://afternoon-headland-45054.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data.admin);
        // setCondition(data.admin)
      });
  }, [user.email]);
  const history2 = useHistory();

  const collectHistory = (page) => {
    setHistory(page);
  };
  const handleRegistration = (rf, role) => {
    console.log(role);
    setRole(role);
    // e.preventDefault();
    if (password.length < 6) {
      setError("password must be 6 character long");
      return;
    }
    createNewUser(email, password, rf, role);
    // console.log(email, password);
  };

  const createNewUser = (email, password, rf, role) => {
    // const userName = name;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        saveUser(email, name, role, "POST");
        // const user = result.user;
        // console.log('clicked', result.user.displayName);
        setError("");
        // verifyEmail();
        setUserName();
        rf();
      })
      .catch((error) => {
        setError("Already Registered");
      });
  };
  const setUserName = () => {
    // console.log(name);
    // console.log(email);
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {
        setError("");
        // console.log(auth.currentUser.displayName);
      })
      .catch((error) => {
        setError("");
        // setError(error.message)
        // setError("Already registered")
      });
  };

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const handleNameChange = (e) => {
    // console.log('hit')
    // e.preventDefault();
    setName(e.target.value);
    setError("");
    // e.preventDefault();
    // console.log(e.target.value);
  };
  const handleEmailChange = (e) => {
    // e.preventDefault();
    setEmail(e.target.value);
    // e.preventDefault();
  };

  const handlePasswordChange = (e) => {
    // e.preventDefault();
    setPassword(e.target.value);
    // e.preventDefault();
    // console.log(e.target.value);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
        setError("");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...

        setUser(user);
        // setUserName();
        setError("");
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
  });
  const saveUser = (email, displayName, role, method) => {
    const user = { email, displayName, role };
    fetch("https://afternoon-headland-45054.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  console.log(user);
  console.log(role);
  console.log(admin);
  return {
    user,
    name,
    error,
    email,
    password,
    setName,
    setError,
    googleSignIn,
    logOut,
    handleRegistration,
    // processLogIn,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    // handleSignIn,
    auth,
    setHistory,
    collectHistory,
    isLoading,
    show,
    setShow,
    backdrop,
    setBackdrop,
    saveUser,
    admin,
    setAdmin,
    role,
    setRole,
    searchKey,
    setSearchKey,
    searchLocation,
    setSearchLocation,
    resetSearchKey, setResetSearchKey,
    resetSearchLocation, setResetSearchLocation
  };
};

export default useFirebase;
