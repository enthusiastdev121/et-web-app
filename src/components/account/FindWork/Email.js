import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PrimaryBtn } from "@/styles/Btn.styled";
import { validateEmail } from "@/utils/helper";
import Spinner from "components/Spinner";
import TranslatedText from "components/TranslatedText";

export default function Email({ setData, setProcessLogin, isChild, height, mailLoading, btnDisabled }) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) === null) {
      toast.error("Please enter a valid email");
    } else {
      setData((data) => ({ ...data, email: email }));
      setProcessLogin(true);
    }
  };

  return (
    <div className="padding text-center min-h-screen lg:flex flex-col items-center justify-center" style={{ minHeight: height }}>
      <h1 className="font-bold text-3xl sm:text-5xl mb-5">
        <TranslatedText>{isChild ? "Enter guardian's email" : "Enter your email"}</TranslatedText>
      </h1>
      <p className="mb-10">
        <TranslatedText> Enter the best email for Agents and Casting Directors to find</TranslatedText>
        <TranslatedText> {isChild ? "your child" : "you"}</TranslatedText>
      </p>
      <ToastContainer className="Toastify" />
      <form className="w-full lg:w-4/6 flex" onSubmit={formSubmit}>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} className="py-2 xl:py-4 w-3/4 pl-5 bg-paper" required />
        <button disabled={mailLoading} className="md:px-5 py-2 text-sm sm:text-base font-semibold xl:px-8 xl:py-4 text-center bg-primary rounded-tr rounded-br w-1/4 cursor-pointer text-white">
          {mailLoading ? (
            <div className="flex items-center justify-center w-full">
              <Spinner />
            </div>
          ) : (
            <TranslatedText> Continue</TranslatedText>
          )}
        </button>
      </form>
      {/* <div className="mt-10">
        <Link href="#question8" passHref>
          <PrimaryBtn
            className="btn"
            onClick={() => {
              setData((data) => ({ ...data, email: email }));
              document.getElementById("question8").classList.remove("hidden");
            }}
          >
            Continue
          </PrimaryBtn>
        </Link>
      </div> */}
    </div>
  );
}

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px 0 0 5px;
`;

const Submit = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0 5px 5px 0;
`;
