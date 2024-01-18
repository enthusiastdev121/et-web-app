import Image from "next/image";
import Link from "next/link";
import { useHost } from "context/HostContext";
import { WHITELABELS } from "@/utils/whitelabelConfig";

export default function Bottom() {
  const hostname = useHost();
  return (
    <div className="padding text-sm text-left">
      <div style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="container mb-10 flex flex-col md:flex-row md:justify-evenly" style={{ height: "fit-content", alignItems: "flex-start" }}>
          <div className="mb-10 md:w-2/5">
            <h3 className="font-semibold mb-4 md:6 ml-2">Find acting auditions by city:</h3>
            <p className="flex flex-wrap">
              <Link href="/auditions">
                <a className="ml-2">Acting Auditions in New York</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">Acting Auditions Los Angeles</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">Acting Auditions Chicago</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">the Acting Auditions Atlanta</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">Acting Auditions MiamiActing Auditions Los Angeles</a>
              </Link>
            </p>
          </div>
          <div className="md:w-2/5">
            <h3 className="font-semibold mb-4 md:6 ml-2">Find Modeling jobs by city:</h3>
            <p className="flex flex-wrap">
              <Link href="/auditions">
                <a className="ml-2">Modeling Jobs in New York</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">Modeling Jobs in Los Angeles</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">Modeling Jobs in Chicago</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">the Acting Auditions Atlanta</a>
              </Link>
              ,
              <Link href="/auditions">
                <a className="ml-2">Modeling Jobs in Atlanta</a>
              </Link>
            </p>
          </div>
        </div>

        <div>
          <div className="md:text-center flex items-center">
            <span className="h-px w-2/5 hidden md:block bg-slate-300 opacity-50"></span>

            <div className="mx-5">
              {/* <Image
                src="/svg/logo-white.svg"
                width={241}
                height={51}
                alt="logo"
              /> */}
              <Image
                src={
                  hostname === "auditions"
                    ? "/images/logoauctions.png"
                    : hostname === "talento"
                    ? "/images/talento.png"
                    : hostname === "modeling"
                    ? "/svg/modeling_logo.svg"
                    : hostname === "adorableKids"
                    ? "/svg/DiscoverKid_logo.svg"
                    : hostname === "exploretalent"
                    ? "/svg/logo-white.svg"
                    : hostname === WHITELABELS.manilaModeling
                    ? "/images/manila_models/manila_logo.png"
                    : hostname === WHITELABELS.cebuModeling
                    ? "/images/cebuModeling/cebu-modeling-white-logo.svg"
                    : "/svg/logo.svg"
                }
                width={241}
                height={51}
                alt="logo"
              />
            </div>

            <span className="h-px w-2/5 hidden md:block bg-slate-300 opacity-50"></span>
          </div>
        </div>

        <div className="mt-10 md:text-center">
          <p className="mb-5">
            ExploreTalent is neither an employment agent nor a modeling agency. We do not guarantee employment, jobs or bookings. Explore Talent only provides Internet exposure, resources, and tools for you to match your talent with
            auditions and casting directors. If you have any questions, contact our Customer Service department at (702) 553-2700. Here is our User Agreement, Privacy Policy and Kids Privacy Policy.
          </p>
          <p>
            ExploreTalent.com is the worldwide leader in acting Modeling Auditions. We are offering thousands of casting calls and Auditions. Get more Casting, auditions resources and Talent Agents than all other sites combined. Spending
            hours and not finding the Acting Jobs & Modeling Jobs you need? Find Reality TV Shows Casting Calls the modeling auditions Acting Auditions, modeling jobs, acting jobs, all in one place. Stop spending hours searching for casting
            & auditions. Submit yourself to casting calls, auditions - Get a call when Casting directors wants you.
          </p>

          <div className="my-5 text-center">
            <a target="_blank" rel="noreferrer" className="mx-1" href="https://www.facebook.com/ExploreTalent/">
              <Image src="/svg/facebook.svg" height={32.5} width={32.5} alt="facebook" />
            </a>
            <a target="_blank" rel="noreferrer" className="mx-1" href="https://www.instagram.com/explore.talent/">
              <Image src="/svg/instagram.svg" height={32.5} width={32.5} alt="instagram" />
            </a>
            <a target="_blank" rel="noreferrer" className="mx-1" href="https://twitter.com/exploretalent">
              <Image src="/svg/twitter.svg" height={32.5} width={32.5} alt="twitter" />
            </a>
            <a target="_blank" rel="noreferrer" className="mx-1" href="https://www.youtube.com/user/ExploreTalent">
              <Image src="/svg/youtube.svg" height={32.5} width={32.5} alt="youtube" />
            </a>
            <a target="_blank" rel="noreferrer" className="mx-1" href="https://www.pinterest.com/exploretalent/">
              <Image src="/svg/pinterest.svg" height={32.5} width={32.5} alt="pinterest" />
            </a>
          </div>

          <p className="text-center font-bold mb-3">&copy; ExploreTalent.com</p>
        </div>

        <div
          className="lg:bg-white lg:text-black lg:text-xs lg:p-3 lg:flex justify-around
       items-center flex-wrap gap-2"
        >
          <Link href="/about">
            <a className="">About ExploreTalent.com</a>
          </Link>
          <Link href="/getting-started">
            <a className="mx-2">Tour</a>
          </Link>
          <Link href="/">
            <a className="mx-2">Home</a>
          </Link>
          <Link href="/about/privacy">
            <a className="mx-2">Privacy Policy</a>
          </Link>
          <Link href="/auditions">
            <a className="mx-2">Acting Auditions</a>
          </Link>
          <Link href="/about/agreement">
            <a className="mx-2">Terms of use</a>
          </Link>
          <Link href="https://articles.exploretalent.com/">
            <a className="mx-2">Articles</a>
          </Link>
          <Link href="/explore">
            <a className="mx-2">Community Post</a>
          </Link>
          <Link href="/about/advertise">
            <a className="mx-2">Become an Affiliate</a>
          </Link>
          <Link href="/about">
            <a className="mx-2">Contact Us Disclaimer</a>
          </Link>
          <Link href="/about/dmca">
            <a className="mx-2">DMCA Fair Use Disclaimer</a>
          </Link>
          <Link href="/about">
            <a className="mx-2">Site Map</a>
          </Link>
        </div>

        <div className="mt-10 ">
          <ul className="flex flex-wrap md:justify-center items-center">
            <li className="mx-1">
              <Image src="/images/positivessl.png" height={37} width={152} alt="positive ssl" />
            </li>
            <li className="mx-1">
              <Image src="/images/compliassure.png" height={36.5} width={86} alt="compliassure" />
            </li>
            <li className="mx-1">
              <Image src="/images/visa.png" height={31} width={65.25} alt="verified visa" />
            </li>
            <li className="mx-1">
              <Image src="/images/master_card.png" height={31} width={65.88} alt="positive ssl" />
            </li>
            <li className="mx-1">
              <Image src="/images/american_exp.png" height={29} width={70} alt="positive ssl" />
            </li>
            <li className="mx-1">
              <Image src="/images/xfn-btn.png" height={15} width={80} alt="positive ssl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
