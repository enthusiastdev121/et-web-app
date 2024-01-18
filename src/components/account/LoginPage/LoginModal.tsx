import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast"
import { rgba } from "polished";
import { BlackOutline, PrimaryBtnSingle, } from "@/styles/Btn.styled";
import { useAuth } from "../../../context/AuthContext";
import { ownLogin, socialLogin } from "network/services/auth";
import { useConfig } from "context/RootContext";
import { loginApi } from "network/apis/auth";
import { BiLockAlt, BiUser } from "react-icons/bi";
import EmailDialog from "components/profile/modals/EmailDialog";
import { formatLoginResponse } from "network/services/auth"
import Button from "components/Button";
import { validateEmail } from "@/utils/helper";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";



export default function LoginModal() {
  const router = useRouter();
  const { onLoginSuccess, setPasswordOpen } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const config: any = useConfig();
  const [emailDialog, setEmailDialog] = useState(false);
  const [bufferData, setBufferData] = useState({});
  const { executeRecaptcha } = useGoogleReCaptcha();
  // const [errormsg, setErrormsg] = useState();


  // SOCIAL LOGIN

  const onGoogle = async () => {
    try {
      const res = await socialLogin({ type: "google" });
      onLoginSuccess({ creds: res.creds, user: res.user, newLogin: res.isNew, type: 'talent' });
    } catch (err) {
      console.log("Err", err);
    }
  };

  const onFacebook = async (email?: string) => {
    try {
      const res = await socialLogin({ type: "facebook" });
      onLoginSuccess({ creds: res.creds, user: res.user, newLogin: res.isNew, type: "talent" });
    } catch (err: any) {
      console.log("Err", err, "err?.response: ", err?.response);
      // toast.error("Email associated with this account already exist please login with that email.")
      if (err.type === 'emailNotFound') {
        setBufferData(err.data);
        setEmailDialog(true)
      }
    }
  };

  const onApple = async () => {
    try {
      const res = await socialLogin({ type: "apple" });
      onLoginSuccess({ creds: res.creds, user: res.user, newLogin: res.isNew, type: 'talent' });
    } catch (err) {
      console.log("Err", err);
    }
  };

  // NORMAL LOGIN
  // const onLogin = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const raw = {
  //       grant_type: "password",
  //       user_type: config.userType,
  //       client_id: config.clientId,
  //       client_secret: config.clientSecret,
  //       username: email,
  //       password: password,
  //     };
  //     setLoading(true);
  //     const res = await loginApi(JSON.stringify(raw));
  //     setLoading(false);

  //     const response = await formatLoginResponse(res);
  // onLoginSuccess({ creds: response.creds, user: response.user,type:'talent' });
  //   } catch (err) {
  //     setLoading(false);
  //     toast.error("Please check your credentials");
  //     console.log("Err", err);
  //   }
  // };



  const onLogin = async () => {
    // e.preventDefault();

    if (!executeRecaptcha) {
      return;
    }

    executeRecaptcha("loginFormSubmit").then(async (gRecaptchaToken) => {
      try {
        const raw = {
          grant_type: 'password',
          user_type: config.userType,
          client_id: config.clientId,
          client_secret: config.clientSecret,
          username: email,
          password: password,
          gRecaptchaToken: gRecaptchaToken
        };
        setLoading(true);
        const res = await loginApi(JSON.stringify(raw));

        setLoading(false);
        const rr = formatLoginResponse(res);

        const cell = res?.bam_talentci?.cell;


        if (!cell) {
          router.push('/add-phone')
        }

        if (rr?.creds?.token) {



          if (password.length === 4) {
            setPasswordOpen(true)
          }

          onLoginSuccess({ creds: rr.creds, user: rr.user, redirect: cell, type: 'talent' });
        } else {
          toast.error('Account status invalid');
        }
      } catch (err: any) {
        setLoading(false);

        if (err?.errors?.auth === "COPPA") {
          router.push('/login/coppa')
        } else {
          toast.error('Check you credentials');
        }

        console.log('Err', err);
      }
    });


  };



  const socialWithEmail = async (email: string) => {
    try {
      setLoading(true);
      const res = await ownLogin({ ...bufferData, email: email });
      onLoginSuccess((res));
    } catch (err) {
      setLoading(false);
      console.log('');
    }
  };

  return (
    <div>
      <EmailDialog false open={emailDialog} onClose={() => {
        setEmailDialog(false)
      }} onSubmit={(email) => {
        onFacebook(email)
        socialWithEmail(email)
        setEmailDialog(false)

        if (validateEmail(email)) {
          onFacebook(email)
          setEmailDialog(false)

        } else {
          alert('Enter Valid Email Address')
          // setErrormsg(true);
        }
      }}>
      </EmailDialog>

      {/* <ToastContainer className="Toastify" style={{ zIndex: 90 }} /> */}

      <Modal className="shadow-lg rounded-2xl flex flex-col px-5 lg:px-40 py-10 text-center text-sm lg:text-base mx-auto">


        <div className="grid grid-cols-1 gap-5" onSubmit={onLogin}>
          <div className="relative">

            {/*PREVIOUS CODE------ */}
            {/* <div className="text-left absolute top-1/2 -translate-y-2/4 left-2 text-xl txt-base">
              <HiOutlineMail className="text-gray-700" />
            </div>
            <input
              className="border border-gray-400 rounded py-3 px-9 w-full bg-paper txt-base"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            /> */}


            {/* UPDATED CODE---- */}
            <div className="text-left absolute top-1/2 -translate-y-2/4 left-2 text-xl txt-base">
              <BiUser className="text-gray-700" />
            </div>
            <input
              className="border border-gray-400 rounded py-3 px-9 w-full bg-paper txt-base"
              type="text"
              placeholder="Talent ID, Username or Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <div
              className="text-left absolute top-1/2 -translate-y-2/4 left-2 text-xl txt-base"
            >
              <BiLockAlt className="text-gray-700" />
            </div>
            <input
              className="border border-gray-400 rounded p-3 px-9 w-full bg-paper txt-base"
              type="password"
              placeholder="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => {
                document.getElementById("password").type =
                  document.getElementById("password").type === "text"
                    ? "password"
                    : "text";
                setShowPass(!showPass);
              }}
              className="cursor-pointer"
            >
              {showPass ? (
                <AiOutlineEye
                  className="text-xl absolute right-5 text-slate-400"
                  style={{ top: "15px" }}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="text-xl absolute right-5 text-slate-400"
                  style={{ top: "15px" }}
                />
              )}
            </div>
          </div>
          <Button primary loading={loading} onClick={onLogin}>
            Login
          </Button>

          <Link href="/forget-password" passHref>
            <small
              className="justify-self-end text-sm cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out"
            >
              Forgot your password?
            </small>
          </Link>
        </div>

        {/* <div className="text-sm lg:text-lg font-semibold text-center py-5">
          OR
        </div>

        <div className="grid grid-cols-1 gap-5">
          <BlackOutline onClick={() => setEmailDialog(true)} className="btn flex items-center">
            <span className="text-3xl w-[20%]">
              <FaFacebookF />
            </span>
            <span className="flex-1 text-lg text-start">
              Login with Facebook
            </span>
          </BlackOutline>

          <BlackOutline onClick={onGoogle} className="btn flex items-center">
            <span className="text-3xl w-[20%]">
              <FaGoogle />
            </span>
            <span className="flex-1 text-lg text-start">
              Login with Google
            </span>
          </BlackOutline>

          <BlackOutline
            onClick={onApple}
            className="btn flex items-center"
          >
            <span className="text-3xl w-[20%]">
              <FaApple />
            </span>
            <span className="flex-1 text-lg text-start">
              Login with Apple
            </span>
          </BlackOutline>
        </div> */}

        <p className="mt-10 text-xs">
          By continuing using the app, you agree to our.{" "}
          <Link href="/about/agreement">
            <a className="underline cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out">
              Terms of Service
            </a>
          </Link>
          {" "}
          and acknowledge that you have read{" "}
          <Link href="/about/privacy">
            <a>
              <span className="underline cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out">
                our Privacy
              </span>
            </a>
          </Link>
          {" "}
          Notice to learn how we collect, use, and share your data.
        </p>

        <p className="mt-2">
          Don&apos;t have an account?{" "}
          {/* <Link href="/account/signup" passHref> */}
          <Link href="/join/talentb" passHref>
            <PrimaryBtnSingle className="font-semibold">
              Sign up
            </PrimaryBtnSingle>
          </Link>
        </p>
        {/* </div> */}
      </Modal >

    </div >
  );
}

// export const formatLoginResponse = async (data: any) => {
//   console.log("S2----,", data);

//   const userData = await getProfileDetailApi(
//     `[["with","bam_talentci"]]`,
//     data.access_token
//   );

//   return {
//     creds: {
//       token: data.access_token,
//       refreshToken: data.refresh_token,
//       expireIn: data.expires_in,
//     },

//     user: {
//       id: userData.id,
//       talentlogin: userData.bam_talentci?.talentlogin,
//       talentnum: userData.bam_talentci?.talentnum,
//     },
//   };
// };

const Modal = styled.div`
  background-color: ${(props: any) => props.theme.pure};
  color: ${(props: any) => props.theme.base};
  border: 1px solid ${(p: any) => rgba(p.theme.base, 0.1)};
  max-width: 825px;
  max-height: 825px;
  margin: 0 auto;
`;

// for firebase login

/* 
    const onLogin = async (e: any) => {
      e.preventDefault();
    
      try {
        let resp = await login({ email, password });
    
        if (resp !== undefined) {
          const response = formatLoginResponse(resp);
          onLoginSuccess({ creds: response.creds, user: response.user,type:'talent' });
        } else {
          const raw = {
            grant_type: "password",
            user_type: config.userType,
            client_id: config.clientId,
            client_secret: config.clientSecret,
            username: email,
            password: password,
          };
          setLoading(true);
          const res = await loginApi(JSON.stringify(raw));
          setLoading(false);
          let resp = await signup({ email, password });
          const response = formatLoginResponse(resp);
          onLoginSuccess({ creds: response.creds, user: response.user,type:'talent' });
        }
      } catch (err) {
        setLoading(false);
        toast.error("Please check your credentials");
        console.log("Err", err);
      }
    };
  */

/*
  export const formatLoginResponse = (data: any) => {
    console.log("S2----,", data);
    const { stsTokenManager } = data;
    return {
      creds: {
        token: stsTokenManager.accessToken,
        refreshToken: stsTokenManager.refreshToken,
        expireIn: stsTokenManager.expirationTime,
      },
      user: {
        uid: data?.uid,
        // talentlogin: data?.talentci?.talentlogin,
        // talentnum: data?.talentci?.talentnum,
      },
    };
  };
  */
