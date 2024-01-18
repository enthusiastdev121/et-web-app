import { useState } from "react";
import Link from "next/link";
import { PrimaryBtn } from "@/styles/Btn.styled";
import IncementBox from "./InputBox";
import TranslatedText from "components/TranslatedText";

export default function DobTwo({ setData, isChild, height, setActiveCall, data }) {
  const [year, setYear] = useState(2001);
  const [conformation, setConformation] = useState(false);

  const increment = (setState) => {
    setState((state) => parseInt(state) + 1);
  };
  const decrement = (setState) => {
    setState((state) => parseInt(state) - 1);
  };

  const onClick = () => {
    if (!isChild) {
      setActiveCall(2);
    }

    setData((data) => ({
      ...data,
      dob: {
        date: data.dob.date,
        month: data.dob.month,
        year: year,
      },
    }));
    if (isChild) {
      document.getElementById("guardianAddress").classList.remove("hidden");
    } else {
      document.getElementById("lastName").classList.remove("hidden");
    }
    setConformation(false);
  };

  return (
    <div className="padding text-center min-h-screen lg:flex items-center justify-center" style={{ minHeight: height }}>
      <div>
        <h1 className="text-2xl sm:text-5xl font-bold mb-10">
          <TranslatedText> {isChild ? "Select your child's Birthdate" : "Select your birth year"}</TranslatedText>
        </h1>

        <div className="max-w-[300px] mx-auto">
          <IncementBox text="Year" state={year} setState={setYear} onClickIncrement={() => increment(setYear)} onClickDecrement={() => year > 0 && decrement(setYear)} />
        </div>

        {conformation && (
          <div className="my-10 text-red-400">
            <TranslatedText>Please confirm you entered the correct birthdate and click continue</TranslatedText>
          </div>
        )}

        <div className="mt-10">
          <Link href={isChild ? "#guardianAddress" : "#lastName"} passHref>
            <PrimaryBtn className="btn" onClick={onClick}>
              <TranslatedText> Continue</TranslatedText>
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
