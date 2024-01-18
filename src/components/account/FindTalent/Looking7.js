import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { PrimaryBtn, TertiaryBtn, ToggleBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";

export default function LookingPage7() {
  const router = useRouter();
  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 7/10</Question>
      <H2 size={48}>7. Do you have questions for applicants?</H2>
      <p className="mb-10 font-semibold lg:w-3/4 mt-5">
        Questions a great way to ensure you get all the essential details you
        need from your applicants. Any questions you ask are mandatory to
        answer.
      </p>
      <InputContainer className="max-w-4xl w-full text-left flex flex-col">
        <div className="mb-3">
          <input type="radio" name="question" id="no" className="radio-input" />
          <label htmlFor="no" className="input-label ml-2">
            No questions
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="question"
            id="yes"
            className="radio-input"
          />
          <label htmlFor="yes" className="input-label ml-2">
            Yes, I have questions
          </label>
        </div>
      </InputContainer>

      <div className="flex w-full flex-col sm:flex-row justify-center mt-20">
        <Link href="#looking6" passHref>
          <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
        </Link>
        <div>
          <Link href="#looking8" passHref>
            <TertiaryBtn
              className="btn mr-2"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking8").classList.remove("hidden");
              }}
            >
              Cancel
            </TertiaryBtn>
          </Link>
          <Link href="#looking8" passHref>
            <PrimaryBtn
              className="btn"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking8").classList.remove("hidden");
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

const InputContainer = styled.div`
  .input-label {
  }

  .radio-input:checked + .input-label {
    color: ${(props) => props.theme.primary};
  }
`;
