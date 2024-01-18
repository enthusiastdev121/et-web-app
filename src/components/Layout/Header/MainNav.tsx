import { useCustomTheme } from "@/theme/CustomThemeProvider";
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward, IoIosArrowUp, IoIosListBox, IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import SideMenu from "./SideMenu";
import { useProfileStore } from "context/ProfileStore";
import { useAuth } from "context/AuthContext";
import { Btn, BtnContainer } from "./Styles";
import { BsCheckCircleFill, BsFillPersonFill } from "react-icons/bs";
import { FaGraduationCap, FaShoppingCart, FaStar } from "react-icons/fa";
import { darken, rgba, saturate } from "polished"
import { CSSTransition } from "react-transition-group";
import { AiFillLock, AiFillVideoCamera, AiTwotoneCrown } from "react-icons/ai";
import { GiDiceTarget, GiGraduateCap, GiWallet } from "react-icons/gi";
import { useRouter } from "next/router";
import { RiBillFill, RiCopyrightFill, RiLockPasswordFill, RiMailAddFill } from "react-icons/ri";
import { IoBriefcase, IoChatboxEllipses, IoChatbubbleEllipses, IoDocuments, IoInformationCircle, IoNotifications, IoPerson, IoRibbon } from "react-icons/io5";
import ClickAwayListener from "react-click-away-listener";
import { useHost } from "context/HostContext";
import { getExploreArticlesApi, getExploreFeedApi } from "network/apis/explore";
import { formatExploreFeedArticleItem, formatExploreFeedPicItem } from "network/apiFormatter/explore";
// import { useMessaging } from "context/MessagingContext";
import NotificationDropdown from "components/notifications/NotificationDropdown";
import BottomNav from "./BottomNav";
import { MdPersonPin } from "react-icons/md";
import { HiDocumentDuplicate } from "react-icons/hi";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import { useMessagingV2 } from "context/MessagingContextV2";
import { EMPTY_IMAGE_SQUARE } from "@/utils/constants/resources";
import MainNavLogo from "./MainNavLogo";
import { getCDInvitesListApi } from "network/apis/jobs";
import TranslatedText from "components/TranslatedText";

const LIMIT = 15;

const NAVLIST = [
  {
    id: 1,
    label: "Explore",
    url: "/explore",
    searchUrl: "/explore",
  },
  {
    id: 2,
    url: "/auditions/all-jobs",
    label: "Auditions & Jobs",
    searchUrl: "/auditions",
  },
  {
    id: 3,
    url: "/search-talent/all-search-talent/1",
    label: "Find Talent",
    searchUrl: "/search-talent",
  },
  /*
  {
    id: 4,
    url: "/contests/current-contests",
    label: "Contests",
    searchUrl: "/contests",
  },
  */
  {
    id: 4,
    url: "/help-support",
    label: "Help",
    searchUrl: "/help-support",
  },
  // {
  //   id: 5,
  //   url: "/reviews/all",
  //   label: "Reviews",
  //   searchUrl: "/reviews",
  // },
]

export default function MainNav({ changeColor }: { changeColor: boolean }) {
  const router = useRouter();
  const theme = useCustomTheme();
  const theme2 = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const hostname = useHost()
  const { profile, setProfile } = useProfileStore();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleMessage, setToggleMessage] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);

  const [cdInviteCount, setCdInviteCount] = useState(0);

  const {
    auth: { authenticated },
    logout, token
  } = useAuth();
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const openNotification = () => {
    setToggleMessage(false);
    setToggleDropdown(false);
    setToggleNotification(!toggleNotification);
  };
  // const { notificationCount } = useMessaging();
  const { messageCount, notificationCount } = useMessagingV2();

  const ref = useRef(null);

  const fetchList = useCallback(
    async (more = false) => {
      try {
        let res: any;
        window.scrollTo(0, 0);
        setList([])
        setLoading(true);
        res = await getExploreFeedApi({
          token,
          page: 1,
          perPage: LIMIT,
        });
        const data = res.data.map((i: any) => formatExploreFeedPicItem(i));
        const res2 = await getExploreArticlesApi({
          page: 1,
          perPage: LIMIT,
        });
        let newData = data;
        if (res2?.length > 0) {
          const articleData = res2.map((i: any) =>
            formatExploreFeedArticleItem(i),
          );
          newData = [...data.slice(0, 3), ...articleData, ...data.slice(3)];
        }
        setTotal(Number(res.total));
        if (more) {
          setList((s) => [...s, ...newData]);
        } else {
          setList(newData);
        }
        setLoading(false)
      } catch (err) {
        console.log("Err", err);
        setLoading(false)
      }
    },
    [token]
  );
  useEffect(() => {
    fetchList();
  }, [fetchList]);


  /**
   * CD INVITES
   */

  useEffect(() => {


    const ff = async () => {

      try {
        const res = await getCDInvitesListApi({ page: 1, perPage: 10, token });

        console.log("RRRR", res);

        setCdInviteCount(res?.total || 0);


      }
      catch (err) {
        console.log("Err", err)
      }

    }
    if (token) {


      ff();
    }


  }, [token])

  let textColor = false;

  // if(router.pathname === '/' && !changeColor){
  //   textColor=false;
  // } else
  if (hostname === WHITELABELS.adorableKids) {
    textColor = false;
  } else if (hostname === WHITELABELS.auditions) {
    textColor = false;
  } else if (hostname === WHITELABELS.cebuModeling) {
    textColor = false;
  } else if (hostname === WHITELABELS.exploretalent) {
    textColor = false;
  } else if (hostname === WHITELABELS.manilaModeling) {
    textColor = !changeColor;
  } else if (hostname === WHITELABELS.modeling) {
    textColor = true;
  } else if (hostname === WHITELABELS.talento) {
    textColor = true;
  }

  return (
    <Nav className="flex items-center text-sm lg:text-base py-5 font-semibold" style={{ maxWidth: "1530px", color: textColor ? '#fff' : '#000', height: MAIN_NAV_HEIGHT + "px" }} id="top">
      <div className="mx-5 md:hidden">
        <Image src='/images/menu2.png' width={21} height={16} alt="menu icon"
          className="cursor-pointer"
          onClick={() => {
            setMenuOpen((s) => !s);
          }}
        />
      </div>

      <MainNavLogo changeColor={changeColor} />

      <ul className="lg:flex items-center gap-5 ml-10 hidden text-sm xl:text-base">
        {
          NAVLIST.map(({ label, url, searchUrl }: { label: string, url: string, searchUrl: string }) => {
            return (
              <li>
                <Link href={url}>
                  <a className={router.pathname.includes(searchUrl) && "txt-primary font-semibold"}><TranslatedText>{label}</TranslatedText></a>
                </Link>
              </li>
            )
          })
        }
        {/* <li>
          <Link href="/classes/browse-classes">
            <a className={router.pathname.includes('/classes') && "txt-primary font-semibold"}>Classes</a>
          </Link>
        </li> */}
      </ul>

      {
        !authenticated && (
          <BtnContainer className="ml-auto flex items-center text-center">

            <div className=" flex flex-col text-left font-normal mr-3 " style={{ fontSize: 14 }} >

              {/* <div className="font-semibold" >Contact us :</div> */}
              <div>
                {/* New Talent Dept: <span className="font-semibold" >800 934 0000</span><br /> */}
                <div className={"rounded-md py-2 px-3 hidden md:block "} style={{ background: rgba(theme2.base, 0.1) }} >
                  <TranslatedText> Contact Us : </TranslatedText><span className="font-semibold" ><TranslatedText>800-934-0000</TranslatedText></span>
                </div>
              </div>

            </div >

            <Link href="/account/login" passHref>
              <Btn className="font-semibold  mr-1 2xl:mx-5 text-sm md:text-base"><TranslatedText>Sign&nbsp;In</TranslatedText></Btn>
            </Link>
            {/* <Link href="/account/signup" passHref> */}
            <Link href="/join/talentb" passHref>
              <Btn
                className="py-2 px-2 sm:py-2 sm:px-5
            rounded font-semibold text-sm md:text-base bg-primary"
                style={{
                  marginRight: "1.25rem",
                  color: "#fff"
                }}
              >
                <TranslatedText>Join</TranslatedText>
              </Btn>
            </Link>
          </BtnContainer >
        )
      }

      {
        authenticated && (
          <ul ref={ref} className="flex items-center gap-2 xl:gap-5 ml-auto icons-container info-box">
            <div className="flex items-center gap-1 sm:gap-5 ml-auto icons-container md:pr-0  pr-2">
              <Application className="txt-base">
                <Link href="/auditions/applications">
                  <a className="rounded-xl nav-link-two">
                    <div className="text-xl txt-base relative pr-[8px]">
                      {/* {profile.joinStatus === 5 ? (
                        <>
                          <BsCheckCircleFill />
                          <IoDocuments />
                          <HiDocumentDuplicate />
                        </>
                      ) : (
                        <FaShoppingCart />
                      )} */}

                      <RiMailAddFill />



                      {cdInviteCount > 0 && <span className="count" style={{ top: -10 }}>{cdInviteCount}</span>}
                    </div>

                    <span className="xl:block hidden">

                      Invitations

                      {/* {profile.joinStatus === 5 ? "Applications" : "Cart"} */}
                    </span>


                    {/* {cdInviteCount > 0 &&

                      <div className="bg-red-600 text-white text-xs rounded-full flex items-center justify-center aspect-square" style={{ height: 24 }} >
                        {cdInviteCount}
                      </div>} */}


                  </a>
                </Link>
              </Application>

              <li>
                <div className="tooltip">
                  <Link href="/messages">
                    <a className="nav-link txt-base" id="target3">
                      <IoChatbubbleEllipses />
                    </a>
                  </Link>
                </div>
                {messageCount > 0 && <span className="count">{messageCount}</span>}
              </li>

              <li onClick={openNotification} className="cursor-pointer">
                <div className="tooltip">
                  <a className="nav-link" id="target4">
                    <IoNotifications />
                  </a>
                </div>

                {/* {unreadCount > 0 && <span className="count">{unreadCount}</span>} */}
                {notificationCount > 0 && <span className="count">{notificationCount}</span>}
              </li>

              {toggleNotification && (
                <NotificationDropdown setToggleNotification={setToggleNotification} toggleNotification={toggleNotification} />
              )}
            </div>

            <li
              className="relative cursor-pointer mr-5 md:mr-0 md:block hidden"
              id="target5"
              onClick={() => {
                setToggleDropdown(!toggleDropdown);
              }}
            >
              <NavItem toggle={toggleDropdown} setToggle={setToggleDropdown} profile={profile}>
                <DropdownMenu profile={profile} />
              </NavItem>
            </li>
          </ul>
        )
      }

      <SideMenu
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
        }}
      />
    </Nav >
  );
}

function NavItem({ children, toggle, profile, setToggle }: any) {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const handleClickOutside = (e: any) => {
  //     if (e.path[0].tagName !== "BUTTON") {
  //       setOpen(false);
  //       setToggle(false);
  //       console.log("The event is e: ", e);
  //     }
  //   };

  //   document.body.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.body.removeEventListener("click", handleClickOutside);
  //   };
  // }, [setToggle]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>

      <li className="nav-item" id="toggler-button">
        <button className="absolute h-full w-full top-0 left-0 bg-transparent z-20" onClick={() => setOpen(!open)}></button>
        <button className="flex items-center gap-2 dropdownOpen" onClick={() => setOpen(!open)}>
          <div className="profile-image"><img src={profile?.pic || EMPTY_IMAGE_SQUARE} alt="profile" /></div>
          <span className="hidden xl:block " >{profile?.fname}</span>
          <span className="hidden xl:block icon-button-top">{!toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
        </button>

        {open && children}
      </li>
    </ClickAwayListener>
  );
}

function DropdownMenu({ profile }: any) {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const {
    auth: { authenticated },
    logout,
  } = useAuth();
  const { setProfile } = useProfileStore();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props: DropDownItemD) {
    const router = useRouter();
    const { goToMenu, leftIcon, rightIcon, children, noIconBg, link, onClick = () => { } } = props;
    return (
      <button
        className="menu-item w-full"
        onClick={() => {
          onClick()
          goToMenu && setActiveMenu(goToMenu);
          link && router.push(link);
        }}
      >
        {noIconBg ? <span className="icon-no-bg">{leftIcon}</span> : <span className="icon-button">{leftIcon}</span>}
        {children}
        <span className="icon-right">{rightIcon}</span>
      </button>
    );
  }
  console.log(profile, "profile");

  return (
    <div className="dropdown" style={{ height: menuHeight + 30 || "fit-content" }} ref={dropdownRef}>
      {/* main menu */}
      <CSSTransition in={activeMenu === "main"} timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
        <div className="menu">
          <Link href={`/${profile?.talentlogin}`} passHref>
            <div className="flex items-center gap-3 mb-5">
              <div className="profile-image-big"> <img src={profile?.pic || EMPTY_IMAGE_SQUARE} alt="profile" /></div>
              <div className="dropdown-header">
                <div>
                  {profile?.fname} {profile?.lname !== null && profile?.lname}
                </div>
                <small>View profile</small>
              </div>
            </div>
          </Link>

          <div className="mb-2 " >

            Contact Us : <span className="font-semibold" >800-934-0000</span>

          </div>

          {/* {profile?.pro ? */}
          <DropdownItem leftIcon={<span className="icon-button pro">P</span>} noIconBg link={profile?.pro ? "/upgrade-to-pro" : "/upgrade-to-pro"}>
            {profile?.pro ? "Your Pro Benefits" : "Upgrade to Pro"}
          </DropdownItem>
          {/* : null} */}

          {/* {profile.featured && */}

          <DropdownItem leftIcon={<span className="icon-button featured">F</span>} noIconBg link={profile?.featured ? "/upgrade-to-featured" : "/upgrade-to-featured"}>
            {profile?.featured ? "Your Featured Benefits" : "Be a Featured Talent"}
          </DropdownItem>
          {/* } */}

          {/* getting started */}
          <DropdownItem leftIcon={<span className="getting-started"><FaGraduationCap className="text-lg" /></span>} noIconBg link="/getting-started">
            Getting Started
          </DropdownItem>

          <DropdownItem leftIcon={<Image src="/svg/casting-pref.svg" alt="settings" height={14} width={12} />} link="/auditions/preferences">
            Casting Preferences
          </DropdownItem>

          {/* Settings */}
          <DropdownItem leftIcon={<Image src="/svg/settings.svg" alt="settings" height={13} width={13} />} rightIcon={<IoIosArrowForward />} goToMenu="settings">
            Settings
          </DropdownItem>

          {/* about */}
          <DropdownItem leftIcon={<Image src="/svg/about-us.svg" alt="about us" height={14} width={9} />} rightIcon={<IoIosArrowForward />} goToMenu="about">
            About
          </DropdownItem>


          {/* testimonials */}
          {/* <DropdownItem leftIcon={<Image src="/svg/testimonials.svg" alt="testimonial" height={13} width={13} />} rightIcon={<IoIosArrowForward />} goToMenu="testimonials">
            Testimonials
          </DropdownItem> */}

          <DropdownItem leftIcon={<span className="icon-button" style={{ margin: "-1px 0 0 -2px" }}><RiBillFill className="text-lg" /></span>} noIconBg link='/billing'>
            Billing
          </DropdownItem>

          {/* <DropdownItem
            leftIcon={
              <Image
                src="/svg/language.svg"
                alt="language"
                height={20}
                width={20}
              />
            }
            noIconBg
            rightIcon={<span className="txt-link ml-auto">English</span>}
            goToMenu="language"
          >
            Language
          </DropdownItem> */}

          <DropdownItem
            onClick={() => {
              router.push("/account/login");
              logout();
              setProfile({})
            }}
            leftIcon={<Image src="/svg/logout.svg" alt="logout" height={13} width={13} />}
          >
            <span>
              Logout
            </span>
          </DropdownItem>

          {/* <div className=" mt-2 ">

            <div className="font-semibold mb-2" >Contact us :</div>
            <div>
              New Talent Dept: <span className="font-semibold" >800 934 0000</span><br />
              Customer Service: <span className="font-semibold" >702 553 2700</span>
            </div>

          </div> */}
        </div>
      </CSSTransition>

      {/* settings */}
      <CSSTransition in={activeMenu === "settings"} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IoIosArrowBack />} noIconBg>
            <h2 className="font-semibold text-base txt-base">Settings</h2>
          </DropdownItem>

          <DropdownItem leftIcon={<BsFillPersonFill />} noIconBg link="/settings/account-information">
            Account Information
          </DropdownItem>

          <DropdownItem leftIcon={<RiLockPasswordFill />} noIconBg link="/settings/password">
            Password & Security
          </DropdownItem>

          {/* <hr className="my-2" />

          <DropdownItem leftIcon={<IoIosNotifications />} noIconBg link="/settings/push-notification">
            Push Notification
          </DropdownItem>

          <DropdownItem leftIcon={<MdMarkEmailUnread />} noIconBg link="/settings/email-notification">
            Email Notification
          </DropdownItem>

          <DropdownItem leftIcon={<IoChatboxEllipses />} noIconBg link="/settings/sms-notification">
            SMS Notification
          </DropdownItem> */}
        </div>
      </CSSTransition>

      {/* about */}
      <CSSTransition in={activeMenu === "about"} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IoIosArrowBack />} noIconBg>
            <h2 className="font-semibold text-base">About</h2>
          </DropdownItem>

          <DropdownItem
            leftIcon={
              <IoInformationCircle className="txt-base text-2xl" style={{ marginTop: -1 }} />
            }
            noIconBg
            link="/about"
          >
            About us
          </DropdownItem>

          <DropdownItem leftIcon={<IoIosListBox />} noIconBg link="/about/agreement">
            {" "}
            Terms of Service
          </DropdownItem>

          <DropdownItem leftIcon={<AiFillLock />} noIconBg link="/about/privacy">
            Privacy Policy
          </DropdownItem>

          <DropdownItem leftIcon={<AiFillLock />} noIconBg link="/about/kidsprivacy">
            Kids Privacy Policy
          </DropdownItem>

          <DropdownItem leftIcon={<RiCopyrightFill />} noIconBg link="/about/dmca">
            DMCA
          </DropdownItem>

          <hr className="my-2" />

          <DropdownItem leftIcon={<GiWallet />} noIconBg link="/about/advertise">
            Become an affiliate advertiser
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* testimonials */}
      <CSSTransition in={activeMenu === ""} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IoIosArrowBack />} noIconBg>
            <h2 className="font-semibold text-base">Testimonials</h2>
          </DropdownItem>

          <DropdownItem leftIcon={<AiTwotoneCrown />} noIconBg link="/testimonials">
            Success Stories
          </DropdownItem>

          <DropdownItem leftIcon={<AiFillVideoCamera />} noIconBg link="/media/video/testimonials">
            Video Testimonials
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* languages */}
      {/* <CSSTransition
        in={activeMenu === "language"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IoIosArrowBack />} noIconBg>
            <h2 className="font-semibold text-base">Language</h2>
          </DropdownItem>

          <ul
            className="overflow-auto scroll-styled"
            style={{ height: "300px" }}
          >
            {languages.map((language) => (
              <li key={language} className="m-4">
                {language}
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition> */}
    </div>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  color: ${(p: any) => p.theme.base};
  margin: 0 auto;

  // @media (max-width: 1530px) {
  //   margin-left: -5vw;
  //   margin-right: -5vw;
  //   padding-left: 5vw;
  //   padding-right: 5vw;
  // }


  .icons-container {
    li {
      position: relative;
    }

    .nav-link {
      background-color: ${(p: any) => p.theme.paper};
      color: ${(p: any) => p.theme.base};
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 33px;
      width: 33px;
      border-radius: 100%;

      &:hover {
        background: rgba(229, 231, 235, 0.5);
        transition: all 0.1s ease;
      }
    }

    .nav-link-two {
      &:hover {
        background: rgba(229, 231, 235, 0.5);
        transition: all 0.1s ease;
      }
    }

    .count {
      background-color: ${(p: any) => p.theme.abs.danger};
      color: ${(p: any) => p.theme.abs.white};
      border: 2px solid ${(p: any) => p.theme.abs.white};
      border-radius: 100%;
      height: 20px;
      width: 20px;
      display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      position: absolute;
      top: -6px;
      right: -6px;
    }

    .profile-image {
      height: 33px;
      width: 33px;
      border-radius: 100%;
      background-color: ${(p: any) => p.theme.border};
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
  }

  .scroll-styled {
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #fafafa;
      box-shadow: inset 1px 0px 0px #e8e8e8, inset -1px 0px 0px #f0f0f0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
      border-radius: 5px;
    }
  }

  .dropdownOpen {
    background: ${(p: any) => saturate(1, p.theme.paper)};
    background: ${(p: any) => p.theme.paper}; 
    font-weight: 500;
    color: ${(p: any) => p.theme.primary};
    border-radius: 30px;
    padding: 2px 5px;
  }

  .dropdownClose {
    padding: 2px 5px;
    font-weight: 500;
  }

  .icon-button,
  .icon-button-top, .getting-started {
    height: 23px;
    width: 23px;
    border-radius: 100%;
    background-color: #e5e7eb;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
  }

  .icon-button-top {
    background-color: transparent;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      transition: all 0.3s ease;
    }

    @media (max-width: 1340px) {
      display: none;
    }
  }

  .getting-started {
    background: ${p => p.theme.primary};
    color: white;
    margin: -1px 0 0 0;
  }

  .pro,
  .featured {
    width: 23px;
    height: 23px;
    background: #1273d6;
    border-radius: 3.40741px;
    color: #fff;
    font-weight: 600;
    font-size: 17.037px;
    line-height: 21px;
    margin-top: -2px;
    margin-left: -2px;
  }

  .language {
    height: 23px;
    width: 23px;
    margin: 4px 6px 0 4px;
  }

  .icon-no-bg {
    height: 23px;
    width: 23px;
    margin: 4px 6px 0 4px;
    font-size: 20px;
  }

  .featured {
    background: #12b24a;
  }

  .icon-button:hover {
    filter: brightness(1.2);
  }

  .icon-button svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }

  /* Dropdown Menu */

  .dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: ${(p: any) => p.theme.pure};
    box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 20px;
    min-width: 284px;
    overflow: hidden;
    transition: height 500ms ease;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${(p: any) => p.theme.base};
  }

  .dropdown-header {
    color: ${(props) => props.theme.primary};
    font-size: 16px;
    font-weight: 600;

    small {
      font-size: 12;
      font-weight: 400;
    }
  }

  .profile-image-big {
    height: 56px;
    width: 56px;
    border-radius: 100%;
    background-color: ${(p: any) => p.theme.border};
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .menu {
    width: 100%;
  }

  .menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background 500ms;
    padding: 0.5rem;
    h2 {
      color: ${(p: any) => p.theme.base};
    }
  }

  .menu-item .icon-button {
    margin-right: 0.5rem;
  }

  .menu-item .icon-button:hover {
    filter: none;
  }

  .menu-item:hover {
    background-color: #e5e7eb;
    background-color: ${(p: any) => rgba(p.theme.base, 0.1)}
  }

  .icon-right {
    margin-left: auto;
  }

  /* CSSTransition classes  */
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

const Logo = styled.a``;

const Application = styled.li`
  a {
    background-color: ${(p: any) => p.theme.paper};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    gap: 7px;
    height: 33px;
    padding: 0 10px;
    border-radius: 30px;

    @media (max-width: 1340px) {
      width: 33px;
  }
  }
`;

const NavItems = styled.li<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    cursor: pointer;
    color: ${p => p.active ? p.theme.primary : p.theme.base};
    font-size: 26px;
    
    span {
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
    }

    &:hover {
        color: ${p => p.theme.primary};
        transition: all 0.3s ease;
    }
`

type DropDownItemD = {
  goToMenu?: string;
  leftIcon?: any;
  rightIcon?: any;
  children: any;
  noIconBg?: boolean;
  link?: string;
  onClick?: () => {};
};