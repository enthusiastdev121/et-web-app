import Link from "next/link";
import { useRouter } from "next/router";

import { SignupCard } from "@/styles/Card.styled";
import { LinkText } from "@/styles/Link.styled";
import TranslatedText from "components/TranslatedText";

export default function Sex({ setData, data, height, text }) {
  const router = useRouter();
  return (
    <div className="padding text-center min-h-screen flex items-center justify-center" style={{ minHeight: height, scrollBehavior: "smooth" }}>
      <div className="">
        <p className="text-xl md:text-3xl mb-10">
          <TranslatedText>Movie Extras, Actors and Models Wanted - </TranslatedText>
          <LinkText>
            <TranslatedText>Apply Here</TranslatedText>
          </LinkText>
        </p>
        <p className="text-xl -mt-3 mb-10">{text !== undefined && text}</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-10">
          <TranslatedText>Are you a male or female?</TranslatedText>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
          <SignupCard
            active={data?.sex === "Male"}
            onClick={() => {
              setData((data) => ({ ...data, sex: "Male" }));
              document.getElementById("ageRange").classList.remove("hidden");
              router.push("#ageRange");
            }}
            className="signup-card text-2xl font-semibold check-label"
          >
            <TranslatedText>Male</TranslatedText>
          </SignupCard>

          <SignupCard
            active={data?.sex === "Female"}
            onClick={() => {
              setData((data) => ({ ...data, sex: "Female" }));
              document.getElementById("ageRange").classList.remove("hidden");
              router.push("#ageRange");
            }}
            className="signup-card text-2xl font-semibold check-label"
          >
            <p>
              <TranslatedText>Female</TranslatedText>{" "}
            </p>
          </SignupCard>
        </div>
      </div>
    </div>
  );
}
