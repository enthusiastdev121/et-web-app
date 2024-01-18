import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AiFillLock, AiFillVideoCamera, AiTwotoneCrown } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward, IoIosListBox } from "react-icons/io";
import { IoBriefcase, IoChatbox, IoInformationCircle, IoLogIn, IoPeople, IoRibbon } from "react-icons/io5";
import { MdClose, MdPersonPin, MdReviews } from "react-icons/md";
import { RiBillFill, RiCopyrightFill, RiLockPasswordFill } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

export default function SideMenu({ open, onClose }: { open: boolean, onClose: any }) {
  const {
    auth: { authenticated },
    logout,
  } = useAuth();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { profile } = useProfileStore();
  const [isOpen, setIsOpen] = useState(open);


  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props: DropDownItemD) {
    const router = useRouter();
    const { goToMenu, leftIcon, rightIcon, children, noIconBg, link } = props;
    return (
      <button
        className="menu-item w-full"
        onClick={() => {
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


  return (
    <AnimatePresence>
      {
        isOpen ?
          <Root>
            <div className="overlay" onClick={onClose}></div>

            <motion.div
              className="dropdownSide overflow-auto"
              ref={dropdownRef}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.6 }}
            >
              {/* main menu */}
              <CSSTransition in={activeMenu === "main"} timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
                <div className="menu">
                  <div className="mb-3 cursor-pointer" onClick={onClose}>
                    <CgClose className="text-2xl" />
                  </div>



                  {authenticated &&
                    <>
                      <div className="flex items-center gap-3 mb-2 pb-3 px-5 border-b-2 -ml-5 -mr-5">
                        <div className="profile-image-big">{profile?.pic && <img src={profile?.pic} alt="profile" />}</div>
                        <div className="dropdown-header">
                          <div>
                            {profile?.fname} {profile?.lname !== null && profile?.lname}
                          </div>
                          <Link href={`/${profile?.talentlogin}`} passHref>
                            <a>
                              <small>View profile</small>
                            </a>
                          </Link>
                        </div>
                      </div>


                    </>}
                  <DropdownItem link="/explore" leftIcon={<FaStar />}  >
                    Explore
                  </DropdownItem>
                  <DropdownItem link="/auditions/all-jobs" leftIcon={<IoBriefcase />}   >
                    Auditions & Jobs
                  </DropdownItem>
                  <DropdownItem link="/search-talent/all-search-talent/1" leftIcon={<MdPersonPin />}  >
                    Find Talent
                  </DropdownItem>
                  <DropdownItem link="/contests/current-contests" leftIcon={<IoRibbon />}  >
                    Contests
                  </DropdownItem>
                  <DropdownItem link="/help-support" leftIcon={<IoChatbox />}  >
                    Help & Support
                  </DropdownItem>



                  {authenticated && <>


                    {/* {!profile.pro && */}
                    <DropdownItem leftIcon={<span className="icon-button pro">P</span>} noIconBg link={profile?.pro ? "/upgrade-to-pro" : "/upgrade-to-pro"}>
                      {profile?.pro ? "Your Pro Benefits" : "Upgrade to Pro"}
                    </DropdownItem>
                    {/* } */}

                    {/* {!profile.featured && */}
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
                  </>

                  }





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


                  {/* reviews */}

                  <DropdownItem leftIcon={<MdReviews />} link="/reviews/all">
                    Reviews
                  </DropdownItem>



                  {!authenticated && <>


                    <DropdownItem link="/account/login" leftIcon={<IoLogIn />}  >
                      Signin
                    </DropdownItem>
                    <DropdownItem link="/join/talentb" leftIcon={<IoPeople />}   >
                      Join
                    </DropdownItem>
                  </>}

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

                  {authenticated && <DropdownItem leftIcon={<Image src="/svg/logout.svg" alt="logout" height={13} width={13} />}>
                    <span
                      onClick={() => {
                        router.push("/account/login", undefined, { shallow: true });
                        logout();
                      }}
                    >
                      Logout
                    </span>

                  </DropdownItem>}

                  <div className="mt-4" >

                    Contact Us : <span className="font-semibold" >800-934-0000</span>

                  </div>

                  {/* <div className=" mt-2 ">

                    <div className="font-semibold mb-2" >Contact us :</div>
                    <div>
                      New Talent Dept: <span className="font-semibold" >800 934 0000</span><br />
                      Customer Service: <span className="font-semibold" >702 553 2700</span>
                      Contact Us : <span className="font-semibold" >800-934-0000</span>
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
              <CSSTransition in={activeMenu === "testimonials"} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
                <div className="menu">
                  <DropdownItem goToMenu="main" leftIcon={<IoIosArrowBack />} noIconBg>
                    <h2 className="font-semibold text-base">Testimonials</h2>
                    {/* <h2 className="font-semibold text-base">Billing</h2> */}
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
            </motion.div>
          </Root>
          :
          ""
      }
    </AnimatePresence>
  );
}

const Root = styled.div`
position: fixed;
top: 0;
left: 0;
// margin-left: 4vw;

.overlay {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.25);
}

.dropdownSide {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px;
  padding-bottom: 150px;
  min-width: 284px;
  max-width: 312px;
  transition: height 500ms ease;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(p: any) => p.theme.base};
}
`

type DropDownItemD = {
  goToMenu?: string;
  leftIcon?: any;
  rightIcon?: any;
  children: any;
  noIconBg?: boolean;
  link?: string;
};




