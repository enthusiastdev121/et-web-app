import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { PrimaryBtn } from "@/styles/Btn.styled";
import { LinkText } from "@/styles/Link.styled";

export default function SocialMedia({ setData }) {
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [externalSite, setExternalSite] = useState("");

  return (
    <div
      className="padding text-center min-h-screen lg:flex flex-col items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="text-5xl font-bold mb-10">Enter your Social Networks</h1>
      <p className="text-xl mb-10">
        please enter your social media, rather than through StarNow, we&apos;re
        unable to monitor these messages.{" "}
        <Link href="/" passHref>
          <LinkText> Read our Trust and Safety tips.</LinkText>
        </Link>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center">
            <Image
              src="/svg/instagram-colored.svg"
              height={40}
              width={40}
              alt="instagram logo"
            />
            <h3 className="ml-3 font-bold text-xl">Instagram</h3>
          </div>
          <div className="text-left">
            {" "}
            <Link href="/" passHref>
              <SocialLink className="text-lg my-3 ">
                https://instagram.com/username{" "}
              </SocialLink>
            </Link>
          </div>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            className="border px-5 py-3 w-full"
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center">
            <Image
              src="/svg/facebook-colored.svg"
              height={40}
              width={40}
              alt="facebook logo"
            />
            <h3 className="ml-3 font-bold text-xl">Facebook</h3>
          </div>
          <div className="text-left">
            <Link href="/" passHref>
              <SocialLink className="text-lg my-3 text-left">
                https://facebook.com/username{" "}
              </SocialLink>
            </Link>
          </div>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            className="border px-5 py-3 w-full"
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center">
            <Image
              src="/svg/linkedin-colored.svg"
              height={40}
              width={40}
              alt="linkedin logo"
            />
            <h3 className="ml-3 font-bold text-xl">Linkedin</h3>
          </div>
          <div className="text-left">
            <Link href="/" passHref>
              <SocialLink className="text-lg my-3 text-left">
                https://linkedin.com/username{" "}
              </SocialLink>
            </Link>
          </div>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            className="border px-5 py-3 w-full"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center">
            <Image
              src="/svg/external-website.svg"
              height={40}
              width={40}
              alt="external-website logo"
            />
            <h3 className="ml-3 font-bold text-xl">External Website</h3>
          </div>
          <div className="text-left">
            <Link href="/" passHref>
              <SocialLink className="text-lg my-3 text-left">
                https://ext-site.com/username{" "}
              </SocialLink>
            </Link>
          </div>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            className="border px-5 py-3 w-full"
            onChange={(e) => setExternalSite(e.target.value)}
          />
        </div>
      </div>

      <Link href="#question10" passHref>
        <PrimaryBtn
          className="btn mt-10 cursor-pointer"
          onClick={() => {
            setData((data) => ({
              ...data,
              social_networks: {
                instagram: instagram,
                facebook: facebook,
                linkedin: linkedin,
                external_site: externalSite,
              },
            }));
            document.getElementById("question10").classList.remove("hidden");
          }}
        >
          Continue
        </PrimaryBtn>
      </Link>
    </div>
  );
}

const SocialLink = styled.a`
  color: ${(props) => props.theme.primary};
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px 0 0 5px;
`;
