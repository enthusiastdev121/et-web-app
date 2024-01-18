import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { PrimaryBtn } from "@/styles/Btn.styled";

export default function LikeUs() {
  return (
    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        Like us on Facebook to get real-time updates on Casting Calls
      </h1>

      <Link href="/" passHref>
        <Like className="rounded px-3 py-1 font-semibold text-center text-white mb-10 flex items-center">
          <Image src="/svg/thumb.svg" height={20} width={20} alt="like" />
          <span className="font-bold mx-2">Like</span> 4.7M
        </Like>
      </Link>

      <Link href="#question11" passHref>
        <PrimaryBtn
          className="btn cursor-pointer"
          onClick={() => {
            document.getElementById("question11").classList.remove("hidden");
          }}
        >
          Continue
        </PrimaryBtn>
      </Link>
    </div>
  );
}

const Like = styled.button`
  background-color: ${(props) => props.theme.abs.darkBlue};
`;
