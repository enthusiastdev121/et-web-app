

import React, { useContext, useState, useEffect, createContext } from "react";

import { UserProfileD } from "types/profile";
import { Creds } from "types/auth";
import Router, { useRouter } from "next/router";
import { UserTypeD } from "types";
import { CdUserProfileD } from "types/cd/profile";


type OnLoginD = {
  creds: Creds; user: UserProfileD & CdUserProfileD, newLogin?: boolean; redirect?: boolean;
  type: UserTypeD
}

const AuthContext = createContext<AuthContextInterface>({
  auth: {
    authenticated: false,
    loading: false,
  },
  userType: "",
  creds: {} as Creds,
  token: "",
  user: {} as UserProfileD,
  cdUser: {} as CdUserProfileD,
  onLoginSuccess: ({ creds, user, newLogin, redirect, type }: OnLoginD) => { },
  logout: () => { },
} as AuthContextInterface);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export default function AuthProvider({ children }: any) {


  /**
   * STATE
   */

  const [auth, setAuth] = useState({
    authenticated: false,
    loading: false,
  });
  // const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<UserProfileD>({} as UserProfileD);
  const [cdUser, setCduser] = useState<CdUserProfileD>({} as CdUserProfileD);

  const [creds, setCreds] = useState<Creds>({
    token: "",
    expire: 0,
    refreshToken: "",
  } as Creds);

  const [userType, setUserType] = useState<UserTypeD>('');


  const [passwordOpen, setPasswordOpen] = useState(false);





  /**
   * ACTIONS
   */

  const onLoginSuccess = ({
    creds: lCreds,
    user: lUser,
    newLogin: lNewLogin,
    redirect = true,
    type,
  }: OnLoginD) => {

    setUserType(type);

    if (type === 'talent') {
      if (redirect) {
        lNewLogin ? Router.push("/complete-signup") : Router.push("/" + lUser.talentlogin);
      }
    }
    setAuth((s) => ({ ...s, authenticated: true, loading: false }));
    setCreds((s) => ({ ...s, ...lCreds }));
    setUser((s) => ({ ...s, ...lUser }));
    localStorage.setItem(
      "creds",
      JSON.stringify({
        ...lCreds,
        time: new Date().toString(),
      })
    );
    localStorage.setItem("user", JSON.stringify(lUser));
    localStorage.setItem("userType", type || "");
  };

  useEffect(() => {
    const checkAuth = () => {
      setAuth((s) => ({ ...s, loading: true }));
      const res = localStorage.getItem("creds");
      const userRes = localStorage.getItem("user");
      const userTypeRes = localStorage.getItem("userType");



      if (userTypeRes) {
        setUserType(userTypeRes);
        // setUser((s) => ({ ...s, ...JSON.parse(userTypeRes) }));
      }


      if (userRes && userRes !== 'undefined') {
        setUser((s) => ({ ...s, ...JSON.parse(userRes) }));
        // console.log("TALENT LOGIN: ", JSON.parse(userRes))
        // if (JSON.parse(userRes).talentlogin) {
        //   Router.push('/' + JSON.parse(userRes).talentlogin);
        // } else if (JSON.parse(userRes).talentlogin) {
        //   Router.push('/' + JSON.parse(userRes).talentlogin);
        // }
      }

      if (res) {
        setCreds((s) => ({ ...s, ...JSON.parse(res) }));
        setAuth((s) => ({ ...s, authenticated: true, loading: false }));
      } else {
        setAuth((s) => ({ ...s, authenticated: false, loading: false }));
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.setItem("creds", "");
    localStorage.setItem("user", "");
    localStorage.removeItem("firstTourDone");
    setAuth((s) => ({ ...s, authenticated: false }));
    // setToken('');
    setCreds(s => ({ ...s, expire: 0, refreshToken: '', token: '' }))
  };


  useEffect(() => {

    console.log("LOG2>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log("LOG2 TALENT USER", user);
    console.log("LOG2 TALENT CREDS", creds);
    console.log("LOG2 CD USER", cdUser);
    console.log("LOG2 USER TYPE", userType);
    console.log("LOG2<<<<<<<<<<<<<<<<<<<<<<<<<<");


  }, [user, creds, userType, cdUser])


  return (
    <AuthContext.Provider
      value={{
        auth,
        userType,
        user: user,
        cdUser: cdUser,
        creds,
        token: creds.token,
        onLoginSuccess,
        logout,
        passwordOpen,
        setPasswordOpen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

interface AuthContextInterface {
  auth: {
    authenticated: boolean;
    loading: boolean;
  };
  userType: UserTypeD;
  user: UserProfileD
  cdUser: CdUserProfileD;
  creds: Creds;
  token: string;
  onLoginSuccess: ({
    creds,
    user,
    newLogin,
    redirect
  }: OnLoginD) => void;
  logout: () => void;
  passwordOpen: boolean;
  setPasswordOpen: React.Dispatch<React.SetStateAction<boolean>>

}





