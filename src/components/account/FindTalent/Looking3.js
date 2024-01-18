import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";

export default function LookingPage3() {
  const router = useRouter();
  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 3/10</Question>
      <H2 size={48}>3. I want applications from</H2>
      <div className="max-w-4xl w-full mt-10">
        <div className="mb-20 w-full">
          <form className="text-left">
            <div className="mb-5 flex justify-between items-center">
              <div>
                <input type="radio" name="location" id="in-phili" />
                <label htmlFor="in-phili" className="ml-3">
                  Anywhere in Philippines
                </label>
              </div>
            </div>

            <div>
              <input type="radio" name="location" id="Worldwide" />
              <label htmlFor="Worldwide" className="ml-3">
                Worldwide
              </label>
            </div>
          </form>
        </div>

        <div className="flex w-full flex-col sm:flex-row justify-center">
          <Link href="#looking2" passHref>
            <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
          </Link>
          <div>
            <Link href="#looking4" passHref>
              <TertiaryBtn
                className="btn mr-2"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking4")
                    .classList.remove("hidden");
                }}
              >
                Cancel
              </TertiaryBtn>
            </Link>
            <Link href="#looking4" passHref>
              <PrimaryBtn
                className="btn"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking4")
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

const Small = styled.small`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  cursor: pointer;
`;
