import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";

export default function LocationConsent({ onFinish }) {
  return (
    <div
      className="py-10 px-10v 2xl:px-20v text-center min-h-screen flex flex-col items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-5">
        Do you want to share your location data with Audition ?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
        <Link href="#question17" passHref>
          <PrimaryBtn
            className="btn cursor-pointer lg:text-xl font-semibold"
            onClick={() => {
              document.getElementById("question17").classList.remove("hidden");
            }}
          >
            Yes, I agree &rarr;
          </PrimaryBtn>
        </Link>
        <Link href="/" passHref>
          <TertiaryBtn
            border="1px solid"
            className="btn cursor-pointer lg:text-xl font-semibold"
          >
            Cancel
          </TertiaryBtn>
        </Link>
      </div>
    </div>
  );
}
