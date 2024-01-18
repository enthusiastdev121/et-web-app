import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import styled from "styled-components";
import { useCustomTheme } from "@/theme/CustomThemeProvider";
// import { userAccessToken } from "@/utils/helper";
// import { PrimaryBtnOutline } from "@/styles/Btn.styled";
import { useAuth } from "context/AuthContext";
import MainNav from "./MainNav";
// import ProfileNav from "./ProfileNav";
// import Image from "next/image";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Btn, BtnContainer, Nav, NavItem } from "./Styles";
// import { BiLogOut } from "react-icons/bi";
// import SideMenu from "./SideMenu";
// import Top from "../../../../ADUMP/Top";
import { useHost } from "context/HostContext";
import SecondaryNav from "./SecondaryNav";
import { WHITELABELS } from "@/utils/whitelabelConfig";

export default function Header() {
  const router = useRouter();
  const { slug } = router.query;
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(true);
  const theme = useCustomTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [position, setPosition] = useState("default");
  const {
    auth: { authenticated },
    logout,
  } = useAuth();
  const hostname = useHost()
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [changeColor, setChagneColor] = useState<boolean>(false);

  console.log("RENDER")

  useEffect(() => {
    if (router.pathname !== '/') return;

    const onScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 10) {
        setChagneColor(true)
      } else {
        setChagneColor(false)
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  let isBackground = false;
  let bgColor = '';
  
  if (hostname === WHITELABELS.adorableKids) {
    isBackground = true;
    bgColor = "#fffcf6";
  } else if (hostname === WHITELABELS.auditions) {
    isBackground = true;
    bgColor = "#fff";
  } 
  
  return (
    <>
      <div
        style={isBackground ? { background: bgColor, position: 'sticky', top: 0 } : { background: '', position: 'sticky', top: 0 }}
        className={
          router.pathname === "/"
            ? changeColor ? "px-1 md:px-5v z-50 bg-pure transition-all ease-in-out duration-200" : "px-1 md:px-5v relative z-50"
            : "px-1 md:px-5v z-50 border-b-2 bg-pure"
        }
      >
        <MainNav changeColor={changeColor} />
      </div>

      {/* JOBS */}
      <SecondaryNav />
    </>
  );
}
type nav = { position: any };
