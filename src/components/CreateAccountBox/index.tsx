import { PrimaryBtn, PrimaryBtnOutline } from "@/styles/Btn.styled";
import TranslatedText from "components/TranslatedText";
import Link from "next/link";
import { Container } from "./CreateAccount.styled";

export default function CreateAccountBox() {
  return (
    <Container className="page-padding w-screen">
      <div className="boxShadow box p-10 xl:p-32 text-center">
        <h1 className="text-xl md:text-4xl font-semibold mb-10 md:mb-20">
          <TranslatedText>In order to access this information you need to create an account</TranslatedText>
        </h1>
        <div className="text-sm md:text-lg flex flex-col md:flex-row md:items-center justify-center">
          <Link href="/join/talentb" passHref>
            <PrimaryBtn className="btn md:mr-5">
              <TranslatedText>Create a new account</TranslatedText>
            </PrimaryBtn>
          </Link>
          <Link href="/account/login" passHref>
            <PrimaryBtnOutline className="btn mt-3 md:mt-0">
              <TranslatedText>Login to existing account</TranslatedText>
            </PrimaryBtnOutline>
          </Link>
        </div>
      </div>
    </Container>
  );
}
