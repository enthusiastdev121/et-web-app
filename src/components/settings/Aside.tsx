import { AsideBar } from "containers/settings/styles";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipses, IoLanguage } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Aside({ active }: { active: string }) {
  return (
    <AsideBar>
      <h2 className="hidden md:block">Settings</h2>
      <ul>
        <Link href="/settings/account-information" passHref>
          <li className={active === "account" ? "active" : ""}>
            <div className="icon">
              <BsFillPersonFill />
            </div>

            <div className="aside-menu-text">Account Information</div>
          </li>
        </Link>

        <Link href="/settings/password" passHref>
          <li className={active === "password" ? "active" : ""}>
            <div className="icon">
              <RiLockPasswordFill />
            </div>

            <div className="aside-menu-text">Password & Security</div>
          </li>
        </Link>

        {/* <Link href="/settings/push-notification" passHref>
          <li className={active === "push" ? "active" : ""}>
            <div className="icon">
              <IoIosNotifications />
            </div>

            <div className="aside-menu-text">Push Notification</div>
          </li>
        </Link>

        <Link href="/settings/email-notification" passHref>
          <li className={active === "email" ? "active" : ""}>
            <div className="icon">
              <MdMarkEmailUnread />
            </div>

            <div className="aside-menu-text">Email Notification</div>
          </li>
        </Link>

        <Link href="/settings/sms-notification" passHref>
          <li className={active === "sms" ? "active" : ""}>
            <div className="icon">
              <IoChatboxEllipses />
            </div>

            <div className="aside-menu-text">SMS Notification</div>
          </li>
        </Link> */}

        {/* <Link href="/settings/language" passHref>
          <li className={active === "language" ? "active" : ""}>
            <div className="icon">
              <IoLanguage />
            </div>

            <div className="aside-menu-text">Language</div>

            <span className="txt-link text-sm ml-auto hidden md:block">
              English
            </span>
          </li>
        </Link> */}
      </ul>
    </AsideBar>
  );
}
