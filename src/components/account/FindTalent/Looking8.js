import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { PrimaryBtn, TertiaryBtn, ToggleBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";
import Image from "next/image";

export default function LookingPage8() {
  const router = useRouter();
  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 8/10</Question>
      <H2 size={48}>8. When do you want to stop accepting applications?</H2>

      <div className="w-full">
        <label
          htmlFor="date"
          className="font-semibold block text-left mb-2 mt-10"
        >
          Choose Date
        </label>
        <div className="relative">
          <div className="flex items-center border-2 rounded-md p-3 justify-between">
            <p className="mr-2">DD/MM/YYYY</p>
            <Image src="/svg/calendar.svg" height={30} width={30} alt="date" />
          </div>
          <input
            type="date"
            className="px-3 py-4 w-full absolute top-0 left-0 opacity-0 text-2xl"
            id="date"
          />
        </div>
      </div>

      <div className="flex w-full flex-col sm:flex-row justify-center mt-20">
        <Link href="#looking7" passHref>
          <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
        </Link>
        <div>
          <Link href="#looking9" passHref>
            <TertiaryBtn
              className="btn mr-2"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking9").classList.remove("hidden");
              }}
            >
              Cancel
            </TertiaryBtn>
          </Link>
          <Link href="#looking9" passHref>
            <PrimaryBtn
              className="btn"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking9").classList.remove("hidden");
              }}
            >
              Next &rarr;
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
