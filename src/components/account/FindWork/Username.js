import Link from "next/link";

import { LinkText } from "@/styles/Link.styled";
import { PrimaryBtn } from "@/styles/Btn.styled";

export default function Username() {
  return (
    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
      <h1 className="text-5xl font-bold mb-10">
        Your username is
        <Link href="/" passHref>
          <LinkText>abc58076</LinkText>
        </Link>
      </h1>

      <Link href="#goto-mail" passHref>
        <PrimaryBtn
          className="btn w-3/4 cursor-pointer"
          onClick={() => {
            document.getElementById("goto-mail").classList.remove("hidden");
          }}
        >
          Continue to apply &rarr;{" "}
        </PrimaryBtn>
      </Link>
    </div>
  );
}
