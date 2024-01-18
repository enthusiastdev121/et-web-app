import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";

export default function LookingPage2() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("Philippines");
  const [newLocation, setnewLocation] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  const auditionLocation = (e) => {
    e.preventDefault();
    setShow(false);
    setLocation(newLocation);
  };

  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 2/10</Question>
      <H2 size={48}>2. Where is your audition or job located?</H2>
      <div className="max-w-4xl w-full mt-10">
        <div className="mb-20 w-full">
          <form className="text-left">
            <div className="mb-5 flex justify-between items-center relative">
              <div>
                <input type="radio" name="location" id="on-site" />
                <label htmlFor="on-site" className="ml-3">
                  {location}
                </label>
              </div>

              <Small
                onClick={() => {
                  setShow(true);
                }}
              >
                Change Location
              </Small>
            </div>

            <div>
              <input type="radio" name="location" id="remote" />
              <label htmlFor="remote" className="ml-3">
                No specific location - job can be done remotely
              </label>
            </div>
          </form>

          <form
            className={show ? "block" : "hidden"}
            onSubmit={auditionLocation}
          >
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter Location"
              className="border w-full py-3 px-5 mt-5"
              onChange={(e) => setnewLocation(e.target.value)}
            />
          </form>
        </div>

        <div className="flex w-full flex-col sm:flex-row justify-center">
          <Link href="#looking1" passHref>
            <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
          </Link>
          <div>
            <Link href="#looking3" passHref>
              <TertiaryBtn
                className="btn mr-2"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking3")
                    .classList.remove("hidden");
                }}
              >
                Cancel
              </TertiaryBtn>
            </Link>
            <Link href="#looking3" passHref>
              <PrimaryBtn
                className="btn"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking3")
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
