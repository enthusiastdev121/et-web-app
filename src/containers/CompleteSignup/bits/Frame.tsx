
import { useHost } from "context/HostContext";
import Image from "next/image";
import { darken } from "polished";
import React from "react";
import styled from "styled-components";

export default function Frame(props: any) {
  const hostname = useHost()

  return (
    <Root
      className={props.interest ? "flex min-h-screen w-full bg-pure" : "flex min-h-screen w-full bg-paper"}
      style={{ minHeight: "100vh" }}
      noPad={props.noPad}
    >
      <div
        className={props.interest ? "min-h-screen items-center justify-center left hidden lg:flex w-1/2" : "min-h-screen items-center justify-center left hidden md:flex w-1/2"}
        style={{ minHeight: "100vh" }}
      >
        <div className="items-start justify-center flex flex-col gap-5 lg:p-0 p-10">
          {
            props.bannerChangeOne ?
              <>
                <h2 className="font-bold text-3xl">You’re almost there.<br />Let’s finalize your profile
                </h2>
                <div className="">
                  <Image
                    src="/images/signupNew1.png"
                    alt="audition"
                    width={500}
                    height={296}
                    priority={true}
                  />
                </div>
                <p className="font-semibold" style={{ maxWidth: 500 }}>
                  Completing the details will help Casting Directors identify
                  your details and talent.
                </p>
              </> :

              props.bannerChangeTwo ?
                <>
                  <h2 className="font-bold text-3xl">Let’s make your profile standout
                  </h2>
                  <div className="">
                    <Image
                      src="/images/signupNew2.png"
                      alt="appearance"
                      width={500}
                      height={296}
                      priority={true}
                    />
                  </div>
                  <p className="font-semibold" style={{ maxWidth: 500 }}>
                    Complete all the details asked and make it stand out of
                    the big competition.
                  </p>
                </> :

                <>
                  <div className="font-bold lg:text-5xl text-4xl ">
                    Welcome <br />
                    to <img src={hostname === "exploretalent" ?
                      "/svg/logo.svg" : hostname === "talento" ?
                        "/images/talento.png" : "svg/logo.svg"} style={{ display: "inline-block" }} />
                  </div>
                  <div className="">
                    <Image
                      src="/images/signupNew.png"
                      alt="interview"
                      width={500}
                      height={296}
                      priority={true}
                    />
                  </div>
                  <p className="font-semibold ">
                    We are looking forward for your success.
                  </p>
                </>
          }
        </div>
      </div>

      <div
        className={props.interest ? "h-screen flex flex-col right w-screen lg:w-1/2 relative" : "h-screen flex flex-col right w-screen md:w-1/2 relative"}
        style={{ height: "100vh" }}
      >
        {props.children}
      </div>
    </Root>
  );
}

const Root = styled.div<{ noPad?: boolean }>`
   color: ${p => p.theme.base};

  .right {
    padding: ${(p) => (p.noPad ? "0" : "0 50px")};
    background: ${p => p.theme.pure};
  }

  .left {
    background: ${p => darken(0.015, p.theme.paper)};
    box-shadow: 0px -3px 20px 4px rgba(0, 0, 0, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.05);

    img {
      height: 60px;

      @media (max-width: 1050px) {
        height: 50px;
      }
    }
  }


  .content {
    max-width: 660px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 1530px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 60px;
    }

    @media (max-width: 600px) {
      padding: 20px;
    }

    @media (max-width: 450px) {
      padding: 0;
    }
  }
`;
