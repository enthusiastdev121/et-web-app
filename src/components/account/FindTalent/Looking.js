import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import { H2 } from "@/styles/Typography.styled";

export default function LookingPage() {
  const router = useRouter();

  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <H2 size={48}>
        I&apos;am Looking for <Span>Actor</Span>
      </H2>
      <div className="max-w-4xl w-full mt-10">
        <div className="mb-20 w-full">
          <select className="border px-5 py-3 w-full">
            <option value="">
              Select a sub category for what you are looking?
            </option>
            <option value="">Lorem ipsum dolor sit amet.</option>
            <option value="">Lorem ipsum dolor sit amet.</option>
            <option value="">Lorem ipsum dolor sit amet.</option>
          </select>
        </div>

        <div className="flex w-full flex-col sm:flex-row justify-center">
          <Link href="#category" passHref>
            <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
          </Link>
          <div className="">
            <Link href="#looking1" passHref>
              <TertiaryBtn
                className="btn mr-2"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking1")
                    .classList.remove("hidden");
                }}
              >
                Cancel
              </TertiaryBtn>
            </Link>
            <Link href="#looking1" passHref>
              <PrimaryBtn
                className="btn"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking1")
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
