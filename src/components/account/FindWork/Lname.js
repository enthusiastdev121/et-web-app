import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import TranslatedText from "components/TranslatedText";

export default function Lname({ setData, isChild, height, setActiveCall, data }) {
  const router = useRouter();
  const [lname, setLName] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setActiveCall(1);
    setData((data) => ({ ...data, lName: lname }));

    if (data.ageRange === 3) {
      document.getElementById("guardianInfo").classList.remove("hidden");
      setTimeout(() => {
        router.push("#guardianInfo");
      }, 1);
    } else {
      document.getElementById("username").classList.remove("hidden");
      setTimeout(() => {
        router.push("#username");
      }, 1);
    }
  };

  return (
    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: height }}>
      <h1 className="font-bold text-5xl mb-10">
        <TranslatedText> {isChild ? "Enter your child's last name" : "Enter your last name"}</TranslatedText>
      </h1>
      <form className="w-full lg:w-4/6 flex" onSubmit={formSubmit}>
        <Input type="text" onChange={(e) => setLName(e.target.value)} className="py-2 xl:py-4 w-3/4 pl-4 bg-paper" required />
        <Submit type="submit" className="md:px-5 py-2 font-semibold xl:px-8 xl:py-4 text-center  w-1/4 cursor-pointer text-white text-sm sm:text-base">
          <TranslatedText>Continue</TranslatedText>
        </Submit>
      </form>
    </div>
  );
}

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px 0 0 5px;
`;

const Submit = styled.button`
  background-color: ${(props) => props.theme.primary} !important;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0 5px 5px 0;
`;
