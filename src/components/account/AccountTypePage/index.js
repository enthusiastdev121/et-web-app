import Image from "next/image";
import { useRouter } from "next/router";

import { StyledModal } from "./AccountType.styled";
import { SignupCard } from "@/styles/Card.styled";
import { Container } from "../Gradient.styled";

export default function AccountType() {
  const router = useRouter();

  return (
    <>
      <div className="padding min-h-screen flex items-center justify-center">
        <Container className="modal-container">
          <section className="login login-email login-section">
            <div className="animated-gradient-bg"></div>
            <div className="login__inner">
              <StyledModal className="shadow-lg rounded-2xl flex flex-col px-10 lg:px-40 py-10 text-center relative">
                <div className="mb-20">
                  <Image
                    src="/svg/logo.svg"
                    height={90}
                    width={380}
                    alt="logo"
                    priority
                  />
                </div>
                <div className="flex justify-center items-center">
                  <SignupCard
                    className="px-10 py-5 lg:px-16 mr-5 lg:mr-10"
                    onClick={() => router.push("/join/talentb")}
                  >
                    <div>
                      <Image
                        src="/svg/work.svg"
                        height={50}
                        width={55}
                        alt="logo"
                        priority
                      />
                    </div>
                    <p>Find Work</p>
                  </SignupCard>

                  <div
                    className="px-10 py-5 lg:px-16 mr-5 lg:mr-10"
                    // onClick={() => router.push("/account/signup/findtalent")}
                  >
                    <div>
                      <Image
                        src="/svg/star.svg"
                        height={50}
                        width={55}
                        alt="logo"
                        priority
                      />
                    </div>
                    <p>Find Talent</p>
                  </div>
                </div>
              </StyledModal>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
