import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn, ToggleBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";

export default function LookingPage4() {
  const router = useRouter();
  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 4/10</Question>
      <H2 size={48}>4. Describe your project</H2>
      <p className="mb-10 font-semibold mt-5">
        Give applicants an overview of the project. Note, you&apos;ll be able to
        describe the individual roles in the next step.
      </p>
      <div className="max-w-4xl w-full text-left">
        <div className="mb-10">
          <label htmlFor="description" className="font-semibold mb-2">
            Short Description
          </label>
          <textarea
            name="short-description"
            id="description"
            placeholder="Write here about this project"
            className="block w-full px-5 py-3 border-2 rounded-lf"
            style={{ minHeight: "200px" }}
          ></textarea>
        </div>

        <Tip className="p-5 rounded-lg mb-10">
          <h3 className="text-xl font-bold">
            Tips <Span>(Example)</Span>
          </h3>
          <p className="font-semibold my-2">
            E.x. Shooting will be on Sunday 29th Nov and Monday 30th Nov.)
          </p>
          <p>
            Is it a comedy? A horror? Is there any graphic content that they
            should know about?
          </p>
        </Tip>

        <div className="mb-10">
          <label htmlFor="dates" className="text-lg font-semibold">
            Rehearsal and production dates <Span>(optional)</Span>
          </label>
          <input
            type="text"
            id="dates"
            placeholder="Ex. Shooting will be on Sunday 29th Nov and Monday 30th Nov"
            className="border-2 rounded-lg px-5 py-3 block w-full"
          />
        </div>

        <div className="mb-10">
          <label htmlFor="dates" className="text-lg font-semibold">
            Associated website <Span>(optional)</Span>
          </label>
          <input
            type="text"
            id="dates"
            placeholder="www."
            className="border-2 rounded-lg px-5 py-3 block w-full"
          />
          <p className="mt-2 text-sm">Only shown to talent after they apply.</p>
        </div>

        <div className="mb-10">
          <form>
            <label htmlFor="dates" className="text-lg font-semibold">
              Add Question
            </label>
            <div className="flex mb-2">
              <input
                type="text"
                id="dates"
                placeholder="Enter your question"
                className="border-2 rounded-lg px-5 py-3 mr-2 block w-full"
              />
              <button className="btn bg-slate-700 text-white">X</button>
            </div>
            <input type="checkbox" id="mandatory" className="mr-2" />
            <label htmlFor="mandatory">Mandatory</label>

            <PrimaryBtn className="btn block mt-4">Add Question</PrimaryBtn>
          </form>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <ToggleBtn>
              <label className="flex items-center">
                <div className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </div>
                <span className="ml-2">
                  Applicants must provide a phone number
                </span>
              </label>
            </ToggleBtn>
            <ToggleBtn>
              <label className="flex items-center">
                <div className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </div>
                <span className="ml-2">
                  Applicants must provide a phone number
                </span>
              </label>
            </ToggleBtn>
          </div>
        </div>

        <div className="flex w-full flex-col items-center sm:flex-row justify-center mt-20">
          <Link href="#looking3" passHref>
            <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
          </Link>
          <div>
            <Link href="#looking5" passHref>
              <TertiaryBtn
                className="btn mr-2"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking5")
                    .classList.remove("hidden");
                }}
              >
                Cancel
              </TertiaryBtn>
            </Link>
            <Link href="#looking5" passHref>
              <PrimaryBtn
                className="btn"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking5")
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

const Span = styled.span`
  color: ${(props) => props.theme.primary};
`;

const Tip = styled.div`
  border: 1px solid ${(props) => props.theme.abs.yellow};
  background-color: ${(props) => props.theme.abs.yellowLight};
`;
