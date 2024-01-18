import Link from "next/link";
import { useHost } from "context/HostContext";
import { useAuth } from "context/AuthContext";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import styled from "styled-components";
import { useProfileStore } from "context/ProfileStore";
import Image from "next/image";
import { useRouter } from "next/router";

const MainNavLogo = ({changeColor} : {changeColor : boolean}) => {
    const hostname = useHost();
    const router = useRouter();
    const {
        auth: { authenticated },
        logout, token
      } = useAuth();
      const { profile, setProfile } = useProfileStore();

  return (
    <>
         <Link href={authenticated ? '/' + profile.talentlogin : "/"} passHref>
        <Logo className="hidden sm:block">
          <Image src={
            hostname === WHITELABELS.auditions ? "/images/logoauctions.png" :
              hostname === WHITELABELS.talento ? "/images/talento.png" :
                hostname === WHITELABELS.modeling ? "/svg/modeling_logo.svg" :
                  hostname === WHITELABELS.adorableKids ? "/svg/DiscoverKid_logo.svg" :
                    hostname === WHITELABELS.exploretalent ? "/svg/logo.svg" :
                      hostname === WHITELABELS.manilaModeling ? router.pathname === '/' && !changeColor ? "/images/manila_models/manila_white_logo.svg" : '/images/manila_models/manila_logo.svg' :
                        hostname === WHITELABELS.cebuModeling ? "/images/cebuModeling/cebu-modeling-logo.svg" : "/svg/logo.svg"
          }
            width={
              hostname === WHITELABELS.auditions ? 152 :
                hostname === WHITELABELS.talento ? 100 :
                  hostname === WHITELABELS.modeling ? 146 :
                    hostname === WHITELABELS.exploretalent ? 180 : 180
            }

            height={
              hostname === WHITELABELS.auditions ? 26 : 40
            }
            alt="logo"

          />
        </Logo>
      </Link>
      <Link href={authenticated ? '/' + profile.talentlogin : "/"} passHref>
        <Logo className="sm:hidden">
          <Image src={
            hostname === WHITELABELS.auditions ? "/images/logoauctions.png" :
              hostname === WHITELABELS.talento ? "/images/talento.png" :
                hostname === WHITELABELS.modeling ? "/svg/modeling_logo.svg" :
                  hostname === WHITELABELS.adorableKids ? "/svg/DiscoverKid_logo.svg" :
                    hostname === WHITELABELS.exploretalent ? '/svg/et-logo-sm.svg' : '/svg/et-logo-sm.svg'
          }
            width={
              hostname === WHITELABELS.auditions ? 152 :
                hostname === WHITELABELS.talento ? 100 :
                  hostname === WHITELABELS.modeling ? 146 :
                    hostname === "" ? 40 : 40
            }
            height={
              hostname === WHITELABELS.auditions ? 26 : 40
            }

            alt="logo"
          />
        </Logo>
      </Link>
    </>
  )
}

export default MainNavLogo;

const Logo = styled.a``;