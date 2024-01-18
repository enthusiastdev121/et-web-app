import { useState } from "react";
import Link from "next/link";

import { PrimaryBtn } from "@/styles/Btn.styled";
import IncementBox from "./InputBox";
import TranslatedText from "components/TranslatedText";

export default function DobOne({ setData, isChild, height, setActiveCall }) {
  const [date, setDate] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2001);
  const [conformation, setConformation] = useState(false);

  const increment = (setState) => {
    setState((state) => parseInt(state) + 1);
  };

  const decrement = (setState) => {
    setState((state) => parseInt(state) - 1);
  };

  const incrementDate = () => {
    if (month === 1) date < 31 && setDate((date) => parseInt(date) + 1);
    else if (month === 2) date < 29 && setDate((date) => parseInt(date) + 1);
    else if (month === 3) date < 31 && setDate((date) => parseInt(date) + 1);
    else if (month === 4) date < 30 && setDate((date) => parseInt(date) + 1);
    else if (month === 5) date < 31 && setDate((date) => parseInt(date) + 1);
    else if (month === 6) date < 30 && setDate((date) => parseInt(date) + 1);
    else if (month === 7) date < 31 && setDate((date) => parseInt(date) + 1);
    else if (month === 8) date < 31 && setDate((date) => parseInt(date) + 1);
    else if (month === 9) date < 30 && setDate((date) => parseInt(date) + 1);
    else if (month === 10) date < 31 && setDate((date) => parseInt(date) + 1);
    else if (month === 11) date < 30 && setDate((date) => parseInt(date) + 1);
    else if (month === 12) date < 31 && setDate((date) => parseInt(date) + 1);
  };

  const onClick = () => {
    if (!conformation && date === 1 && month === 1 && year === 2001) {
      setConformation(true);
      return;
    }

    if (!isChild) {
      setActiveCall(2);
    }

    setData((data) => ({
      ...data,
      dob: {
        date: date,
        month: month,
        year: 1996,
      },
    }));
    document.getElementById("dobTwo").classList.remove("hidden");
    setConformation(false);
  };

  return (
    <div className="padding text-center min-h-screen lg:flex items-center justify-center" style={{ minHeight: height }}>
      <div>
        <h1 className="text-2xl sm:text-5xl font-bold mb-10">
          <TranslatedText>{isChild ? "Select your child's Birthdate" : "Select your birth date"}</TranslatedText>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 justify-center">
          <IncementBox text="Date" state={date} setState={setDate} onClickIncrement={incrementDate} onClickDecrement={() => date > 1 && decrement(setDate)} />
          <IncementBox text="Month" state={month} setState={setMonth} onClickIncrement={() => month < 12 && increment(setMonth)} onClickDecrement={() => month > 1 && decrement(setMonth)} />
        </div>

        {conformation && (
          <div className="my-10 text-red-400 font-medium">
            {isChild ? (
              <>
                <TranslatedText>
                  Only Parent/Guardian can create and use a profile for a child under 13.
                  <br />
                  Please continue only if you are the parent.
                </TranslatedText>
              </>
            ) : (
              <>
                <TranslatedText>
                  Please verify your birthdate, adjust and continue. <br />
                  This info is always kept private.
                </TranslatedText>
              </>
            )}
          </div>
        )}

        <div className="mt-10">
          <Link href="#dobTwo" passHref>
            <PrimaryBtn className="btn" onClick={onClick}>
              <TranslatedText>Continue</TranslatedText>
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
