import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { PrimaryBtn } from "@/styles/Btn.styled";
import TranslatedText from "components/TranslatedText";

export default function Height({ setData, isChild, data, height }) {
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);

  const increment = (setState) => {
    setState((state) => state + 1);
  };
  const decrement = (setState) => {
    setState((state) => state - 1);
  };

  useEffect(() => {
    setFeet(data.ageRange === 1 ? 3 : data.ageRange === 2 ? 4 : data.ageRange >= 3 && 5);

    setInches(data.sex === "Male" && data.ageRange >= 3 ? 8 : data.sex === "Female" && data.ageRange >= 3 ? 4 : 0);
  }, [data.sex, data.ageRange]);

  const updateHeight = () => {
    let inFeet = 0;
    if (inches < 10) inFeet = feet + inches / 10;
    if (inches >= 10) inFeet = feet + inches / 100;
    let inInches = feet * 12 + inches;
    let inCm = inInches * 2.54;

    setData((data) => ({
      ...data,
      height: { feet: inFeet, inches: inInches, cm: inCm },
    }));
  };

  return (
    <div className="padding text-center min-h-screen flex items-center justify-center" style={{ minHeight: height }}>
      <div>
        {isChild && (
          <div className="rounded-lg text-red-500 p-10 mb-10 font-medium" style={{ background: "hsl(358, 100%, 97%)" }}>
            <p>
              <TranslatedText>Only Parent / Guardian can create and use a profile for a child under 13.</TranslatedText>
            </p>

            <p>
              <TranslatedText>Please continue only if you are the parent.</TranslatedText>
            </p>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold mb-10">
          <TranslatedText>{isChild ? "Select your child's height" : "Select your Height"}</TranslatedText>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          <div className="md:w-72">
            <h2 className="text-left text-2xl font-semibold mb-2">
              {" "}
              <TranslatedText>Feet</TranslatedText>
            </h2>
            <div className="grid grid-cols-4 grid-rows-2 text-2xl font-semibold">
              <div className="col-span-3 row-span-2 border px-20 py-10">
                <TranslatedText>{feet}</TranslatedText>
              </div>
              <div className="col-span-1 border flex justify-center items-center cursor-pointer select-none bg-primary text-white border-t-blue-400 border-l-0" onClick={() => increment(setFeet)}>
                +
              </div>
              <div className="col-span-1 border flex justify-center items-center cursor-pointer select-none bg-primary text-white border-b-blue-400 border-l-0" onClick={() => feet > 0 && decrement(setFeet)}>
                -
              </div>
            </div>
          </div>

          <div className="md:w-72">
            <h2 className="text-left text-2xl font-semibold mb-2">
              {" "}
              <TranslatedText>Inches</TranslatedText>
            </h2>
            <div className="grid grid-cols-4 grid-rows-2 text-2xl font-semibold">
              <div className="col-span-3 row-span-2 border px-20 py-10">
                <TranslatedText>{inches}</TranslatedText>
              </div>
              <div className="col-span-1 border flex justify-center items-center cursor-pointer select-none bg-primary text-white border-t-blue-400 border-l-0" onClick={() => increment(setInches)}>
                +
              </div>
              <div className="col-span-1 border flex justify-center items-center cursor-pointer select-none bg-primary text-white border-b-blue-400 border-l-0" onClick={() => inches > 0 && decrement(setInches)}>
                -
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link href="#ethnicity" passHref>
            <PrimaryBtn
              className="btn"
              onClick={() => {
                updateHeight();
                document.getElementById("ethnicity").classList.remove("hidden");
              }}
            >
              <TranslatedText>Continue</TranslatedText>
              {/* <Image
                src="/svg/arrow-right.svg"
                height={10}
                width={20}
                alt="arrow right"
              /> */}
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
