import { useRouter } from "next/router";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";

export default function LookingPage1() {
  const router = useRouter();

  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 1/10</Question>
      <H2 size={48}>1. Give your listing a title</H2>
      <div className="max-w-4xl w-full mt-10">
        <div className="mb-20 w-full">
          <select className="border px-5 py-3 w-full">
            <option value="">
              Write your title name here ( e.x. 20 Background Actors Required
              for Short Film)
            </option>
            <option value="">Lorem ipsum dolor sit amet.</option>
            <option value="">Lorem ipsum dolor sit amet.</option>
            <option value="">Lorem ipsum dolor sit amet.</option>
          </select>
        </div>

        <div className="flex w-full flex-col sm:flex-row justify-center">
          <Link href="#looking" passHref>
            <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
          </Link>
          <div>
            <Link href="#looking2" passHref>
              <TertiaryBtn
                className="btn mr-2"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking2")
                    .classList.remove("hidden");
                }}
              >
                Cancel
              </TertiaryBtn>
            </Link>
            <Link href="#looking2" passHref>
              <PrimaryBtn
                className="btn"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking2")
                    .classList.remove("hidden");
                }}
              >
                Next &rarr;
              </PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
