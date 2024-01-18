import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { PrimaryBtn, TertiaryBtn, ToggleBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";
export default function LookingPage6() {
  const router = useRouter();
  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 6/10</Question>
      <H2 size={48}>6. Job payment</H2>

      <div className="max-w-4xl w-full text-left mt-10">
        <InputContainer className="flex mb-10">
          <div>
            <input
              type="radio"
              id="paid"
              name="expense"
              className="radio-input"
            />
            <label htmlFor="paid" className="ml-2 input-label mr-10">
              Paid
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="free"
              name="expense"
              className="radio-input"
            />
            <label htmlFor="free" className="ml-2 input-label">
              Free
            </label>
          </div>
        </InputContainer>

        <div className="mb-10">
          <label htmlFor="description" className="font-semibold block mb-2">
            Job Payment Rate
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <select className="border-2 rounded p-3 text-slate-600" name="rate">
              <option value="">Choose</option>
              <option value="">Choose</option>
              <option value="">Choose</option>
              <option value="">Choose</option>
            </select>
            <select className="border-2 rounded p-3 text-slate-600" name="">
              <option value="">$ Choose</option>
              <option value="">Choose</option>
              <option value="">Choose</option>
              <option value="">Choose</option>
            </select>
            <select className="border-2 rounded p-3 text-slate-600" name="">
              <option value="">$ 10,000</option>
              <option value="">Choose</option>
              <option value="">Choose</option>
              <option value="">Choose</option>
            </select>
          </div>
        </div>

        <div className="mb-10">
          <label htmlFor="description" className="font-semibold block mb-2">
            Specify Payment Details
          </label>
          <input
            type="text"
            placeholder="E.g. Buyout / usage fees, number of hours expected per day, etc."
            className="border-2 rounded p-3 text-slate-600 w-full"
          />
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <ToggleBtn>
              <label className="flex items-center">
                <div className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </div>
                <span className="ml-2">Expenses will be paid</span>
              </label>
            </ToggleBtn>
            <ToggleBtn>
              <label className="flex items-center">
                <div className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </div>
                <span className="ml-2">Applicants are charged fees</span>
              </label>
            </ToggleBtn>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col sm:flex-row justify-center mt-20">
        <Link href="#looking5" passHref>
          <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
        </Link>
        <div>
          <Link href="#looking7" passHref>
            <TertiaryBtn
              className="btn mr-2"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking7").classList.remove("hidden");
              }}
            >
              Cancel
            </TertiaryBtn>
          </Link>
          <Link href="#looking7" passHref>
            <PrimaryBtn
              className="btn"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking7").classList.remove("hidden");
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
