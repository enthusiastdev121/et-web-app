import { WHITELABEL } from "@/utils/envProviders";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function SingleNav() {

  return (
    <Nav className="text-center relative bg-pure">
      <div className="hidden md:block">
        <Link href="/" passHref >
          <Image src={WHITELABEL === WHITELABELS.auditions ? "/images/audition/audition-logo.png" : "/svg/logo-gray.svg"} alt="logo" height={80} width={200} />
        </Link>
      </div >
      <div className="mr-auto md:hidden py-3">
        <Link href="/" >
          <a>
            <Image src="/images/et-logo.png" alt="Explore Talent" height={33} width={41} priority />
          </a>
        </Link>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: ${(p: any) => p.theme.pure};
  border-bottom: 2px solid ${(p: any) => p.theme.border};

  img {
    cursor: pointer;
  }
`;

