import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function GuardLname({ setData, isChild, height }) {
  const router = useRouter();
  const [lname, setLName] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setData((data) => ({ ...data, glname: lname }));
    document.getElementById("question7").classList.remove("hidden");

    setTimeout(() => {
      router.push("#question7");
    }, 1);
  };

  return (
    <div
      className="padding text-center min-h-screen flex flex-col items-center justify-center"
      style={{ minHeight: height }}
    >
      <h1 className="font-bold text-3xl sm:text-5xl mb-10">
        Enter Guardian&apos;s last name
      </h1>
      <form className="w-full lg:w-4/6 flex" onSubmit={formSubmit}>
        <Input
          type="text"
          onChange={(e) => setLName(e.target.value)}
          className="py-2 xl:py-4 w-3/4 pl-4 bg-paper"
          required
        />
        <Submit
          type="submit"
          value="Continue"
          className="md:px-5 py-2 text-sm sm:text-base font-semibold xl:px-8 xl:py-4 text-center  w-1/4 cursor-pointer text-white"
        />
      </form>
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
