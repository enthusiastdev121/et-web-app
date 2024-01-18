import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

import { validatePassword } from "@/utils/helper";
import { useAuth } from "context/AuthContext";
import { updateProfileDetailApi } from "network/apis/ownProfile";
import { useProfileStore } from "context/ProfileStore";
import TranslatedText from "components/TranslatedText";

export default function Password({ setData, onFinish, data, height, setActiveCall }) {
  const router = useRouter();
  const { token } = useAuth();
  const { profile } = useProfileStore();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const updatePassword = async () => {
    try {
      await updateProfileDetailApi({
        token: token,
        talentnum: profile?.talentnum?.toString(),
        raw: {
          talentpass: password,
        },
      });
    } catch (err) {
      console.log("Err", err);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      if (password.length < 4) {
        toast.error("Password must be at least 4 characters");
      } else {
        // setActiveCall(1);
        updatePassword();
        setData((data) => ({ ...data, password: password }));
        document.getElementById("employed").classList.remove("hidden");

        setTimeout(() => {
          router.push("#employed");
        }, 1);
      }
    } else {
      toast.error("Password does not match!");
    }
  };

  return (
    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: height }}>
      <h1 className="font-bold text-5xl mb-10">
        <TranslatedText>Create a password</TranslatedText>
      </h1>

      <form className="w-full lg:w-4/6 text-left flex flex-col" onSubmit={formSubmit}>
        <div className="relative text-left flex flex-col">
          <label htmlFor="password">
            <TranslatedText>Enter Password</TranslatedText>
          </label>
          <Input type="password" id="og-password" onChange={(e) => setPassword(e.target.value)} className="py-2 xl:py-4 pl-5 bg-paper" required />
          <div
            onClick={() => {
              document.getElementById("og-password").type = document.getElementById("og-password").type === "text" ? "password" : "text";
              setShowPass(!showPass);
            }}
            className="cursor-pointer"
          >
            {showPass ? (
              <AiOutlineEye className="text-xl absolute right-5 text-slate-400" style={{ top: "65%", transform: "translateY(-50%)" }} />
            ) : (
              <AiOutlineEyeInvisible className="text-xl absolute right-5 text-slate-400" style={{ top: "65%", transform: "translateY(-50%)" }} />
            )}
          </div>
        </div>

        <div className="relative text-left flex flex-col my-5">
          <label htmlFor="confirm">
            <TranslatedText>Confirm Password</TranslatedText>
          </label>
          <Input type="password" id="confirm" onChange={(e) => setConfirmPassword(e.target.value)} className="py-2 xl:py-4 pl-5 w-full block bg-paper" required />
          <div
            onClick={() => {
              document.getElementById("confirm").type = document.getElementById("confirm").type === "text" ? "password" : "text";
              setShowConfirmPass(!showConfirmPass);
            }}
            className="cursor-pointer"
          >
            {showConfirmPass ? (
              <AiOutlineEye className="text-xl absolute right-5 text-slate-400" style={{ top: "65%", transform: "translateY(-50%)" }} />
            ) : (
              <AiOutlineEyeInvisible className="text-xl absolute right-5 text-slate-400" style={{ top: "65%", transform: "translateY(-50%)" }} />
            )}
          </div>
        </div>

        <Submit type="submit" value="Submit" className="md:px-5 py-2 font-semibold xl:px-8 xl:py-4 text-center cursor-pointer text-white">
          <TranslatedText>Submit</TranslatedText>
        </Submit>
      </form>
    </div>
  );
}

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`;

const Submit = styled.button`
  background-color: ${(props) => props.theme.primary} !important;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0 5px 5px 0;
`;
