import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { firebaseApp } from "./firebase-config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth();

//GoogleSignin
export const googleLogin = async () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const res = await signInWithPopup(firebaseAuth, provider);
  return res;
};

//FacebookSignin
export const facebookLogin = async () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new FacebookAuthProvider();
  const res = await signInWithPopup(firebaseAuth, provider);
  return res;
};

//AppleSignin
export const appleLogin = async () => {
  const provider = new OAuthProvider("apple.com");
  const firebaseAuth = getAuth(firebaseApp);
  const res = await signInWithPopup(firebaseAuth, provider);
  return res;
};

//Login
export const login = ({ email, password }: { email: any; password: any }) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("RAN Login function");
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.log("Err", error);
    });
};

//Signup
export const signup = ({ email, password }: { email: any; password: any }) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("RAN SIGNUP");
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") return error.code;
      console.log("Err", error);
    });
};

//SignOut
export const signout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Signing out successful");
    })
    .catch((error) => {
      console.log("Err", error);
    });
};

// Reset Password
export const resetPassword = ({ email }: { email: any }) => {
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Password reset email sent successfully");
    })
    .catch((err) => {
      console.log("Error", err);
      toast.error(err.code.slice(5));
    });
};
