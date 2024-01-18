import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { PrimaryBtn, ToggleBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2 } from "@/styles/Typography.styled";
import Image from "next/image";

export default function LookingPage10() {
  const [email, setEmail] = useState(["average.casting@gmail.com"]);
  const [newMail, setNewMail] = useState("");

  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center lg:max-w-4xl mx-auto">
      <Question>Question 10/10</Question>
      <H2 size={48}>10. Email applications to</H2>

      <div className="w-full mt-10">
        {email.map((item, index) => (
          <Mail
            key={index}
            className="mb-10 font-semibold text-xl flex items-center justify-center"
          >
            <Image
              src="/svg/gmail-colored.svg"
              height={24}
              width={32}
              alt="gmail"
            />{" "}
            <span className="ml-3">{item}</span>
          </Mail>
        ))}

        <div className="mb-10">
          <ToggleBtn>
            <label className="flex items-start md:items-center justify-center">
              <div className="switch mt-1 md:mt-0">
                <input type="checkbox" />
                <span className="slider round"></span>
              </div>
              <span className="w-4/5 md:w-fit ml-3 text-left text-sm">
                Send Application To A Different Email To The Above?
              </span>
            </label>
          </ToggleBtn>
        </div>

        <form
          className="mb-20"
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
            setEmail((mail) => [...mail, newMail]);
          }}
        >
          <input
            type="email"
            placeholder="Add Another Email Address"
            className="border-2 rounded-lg p-5 w-full"
            onChange={(e) => {
              setNewMail(e.target.value);
            }}
          />
        </form>
      </div>

      <div className="w-full">
        <Link href="/account/signup/findtalent/review-listing" passHref>
          <PrimaryBtn className="btn w-full">
            Review Your Listing &rarr;
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
}

const Mail = styled.div`
  color: ${(props) => props.theme.primary};
`;
