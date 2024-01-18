import Link from "next/link";

import { LinkText } from "@/styles/Link.styled";
import { PrimaryBtn } from "@/styles/Btn.styled";

export default function ConfirmMail() {
  return (
    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        <Link href="/" passHref>
          <LinkText>Mario Speedwagon,</LinkText>
        </Link>
        <br />
        confirm your email address and get discovered!
      </h1>

      <Link href="#interests" passHref>
        <PrimaryBtn
          className="btn w-3/4 cursor-pointer"
          onClick={() => {
            document.getElementById("interests").classList.remove("hidden");
          }}
        >
          Confirm your email &rarr;{" "}
        </PrimaryBtn>
      </Link>
    </div>
  );
}
