import Image from "next/image";

import { GreenBtn } from "@/styles/Btn.styled";
import { Container } from "./Styles";
import Link from "next/link";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import TranslatedText from "components/TranslatedText";

export default function Advertisement() {
  const { auth: { authenticated } } = useAuth()
  const { profile } = useProfileStore();

  return (
    <>
      {!profile.pro &&
        <Container className="mb-5">
          <Image
            src="/images/advertisement.png"
            alt="advertisement"
            layout="fill"
            className="rounded background-img object-cover"
          />
          <div className="content flex flex-col items-center gap-5 justify-center">
            <Image src="/svg/yellow-star.svg" alt="star" height={43} width={56} />
            <h3 className="text-center 2xl:px-5">
              <TranslatedText>Get Free Access</TranslatedText><br /> <TranslatedText>to Talent Academy</TranslatedText>
            </h3>
            <Link href={authenticated ? "/upgrade-to-pro" : "/join/talentb"} passHref>
              <GreenBtn className="btn"><TranslatedText>Upgrade to PRO</TranslatedText></GreenBtn>
            </Link>
          </div>
        </Container>
      }
    </>
  );
}
