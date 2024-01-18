import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { LinkText } from "@/styles/Link.styled";
import { PrimaryBtn } from "@/styles/Btn.styled";

export default function CheckMail() {
  return (
    <div
      className="py-10 px-10v 2xl:px-20v text-center min-h-screen flex flex-col items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <Image
        src="/svg/check-mail.svg"
        height={120}
        width={120}
        alt="check email"
      />
      <h1 className="text-5xl font-bold my-5">Thanks Mario Speedwagon!</h1>
      <Warning className="text-xl">
        Please confirm your email to complete your registration.
      </Warning>
      <p className="mt-5">
        Click The Button In The Email We&apos;ve Just Sent To{" "}
        <LinkText>Abc@Gmail.Com</LinkText> And You&apos;ll Be On Your Way
      </p>

      <Link href="#confirm-mail" passHref>
        <PrimaryBtn
          className="btn w-full md:w-3/4 lg:w-1/2 cursor-pointer  my-10"
          onClick={() => {
            document.getElementById("confirm-mail").classList.remove("hidden");
          }}
        >
          Go to gmail &rarr;{" "}
        </PrimaryBtn>
      </Link>

      <p className="text-xl font-semibold  mb-3">Didn&apos;t get the email?</p>
      <small className="text-base">
        Check your spam folder for the email,
        <br />
        <Link href="/" passHref>
          <LinkTextRegular>send the email again</LinkTextRegular>
        </Link>
        , or{" "}
        <Link href="/" passHref>
          <LinkTextRegular>change your email</LinkTextRegular>
        </Link>{" "}
        address
      </small>
    </div>
  );
}

const Warning = styled.p`
  color: ${(props) => props.theme.abs.red};
`;

const LinkTextRegular = styled.a`
  color: ${(props) => props.theme.primary};
`;
