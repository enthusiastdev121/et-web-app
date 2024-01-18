import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "context/AuthContext";
import { H1 } from "@/styles/Typography.styled";
import { Card, CardExpires, CardRule, Container, InfoModalContainer, SubmitEntry } from "./ContestDetail.styled";
import InfoModal from "./InfoModal";
import Modal from "../../../components/Modal";
import BackToTop from "components/BackToTop";
import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import Leaderboard from "../Leaderboard";
import Link from "next/link";
import { differenceInHours, format } from "date-fns";
import { getTimeRemaining } from "@/utils/helper";
import RulesModal from "../RulesModal";
import { CgClose } from "react-icons/cg";
import { PrimaryBtn } from "@/styles/Btn.styled";

export default function Details({ res, slug }: any) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [showWin, setShowWin] = useState<boolean>(false);
  const openInfoModal = () => setShowInfo(true);
  const closeInfoModal = () => setShowInfo(false);
  const openWinModal = () => setShowWin(true);
  const closeWinModal = () => setShowWin(false);
  const [isActive, setIsActive] = useState(true);
  const [localEnd, setLocalEnd] = useState(new Date());
  const [clock, setClock] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {

    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(new Date(res?.endTime * 1000));
      setClock({ days: t.days, hours: t.hours, minutes: t.minutes, seconds: t.seconds })

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);

    return () => clearInterval(timeinterval)

  }, [res?.endTime, clock])

  const {
    auth: { authenticated },
  } = useAuth();

  useEffect(() => {
    let int: any;
    if (differenceInHours(new Date(res.endTime * 1000), new Date()) < 0) {
      setIsActive(false);
    }

    int = setInterval(() => {
      setLocalEnd(new Date());
    }, 1000);

    return () => {
      if (int) {
        clearInterval(int);
      }
    };
  }, [localEnd]);

  return (
    <>
      <Container className="bg-paper txt-base">
        <BackToTop />

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showWin && (
            <Modal handleClose={closeWinModal}>
              <InfoModalContainer className="rounded-lg overflow-y-scroll no-scroll" style={{ height: "fit-content" }}>
                <div className="header border-b-2 py-5 px-10 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">How To Get More Votes</h2>
                  <CgClose className="text-xl cursor-pointer" onClick={closeWinModal} />
                </div>

                <div className="px-10 py-7 leading-7">
                  Invite your friends from Facebook, Twitter and Google to vote for you. Registration is just one-click away.
                  <br />
                  Copy-paste your contest entry URL and send it via email, post it to your Facebook news feed or Tweet it.
                </div>

                <div className="footer py-3 px-10 border-t-2 flex">
                  <PrimaryBtn className="btn ml-auto" onClick={closeWinModal}>
                    Close &rarr;
                  </PrimaryBtn>
                </div>
              </InfoModalContainer>

            </Modal>
          )}
        </AnimatePresence>

        <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
          <div className="left">
            <nav className="rounded-md w-full breadcrumb  px-3 sm:px-0">
              <ol className="list-reset flex">
                <li className="cursor-pointer">
                  <Link href="/contests/current-contests">
                    <div className="text-color-primary hover:text-color-primary">Contests</div>
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li className="text-gray-500">{res?.name}</li>
              </ol>
            </nav>

            <div className="flex flex-col xl:flex-row justify-between items-start gap-5">
              <h1 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl  px-3 sm:px-0">{res?.name}</h1>

              <div className="flex flex-col md:flex-row items-center ">
                <ol className="list-reset flex  px-3 sm:px-0">
                  <li>
                    <Link href="/contests/leaderboard">
                      <a className="text-color-primary hover:text-color-primary action-panel">
                        Leaderboard
                      </a>
                    </Link>
                  </li>
                  <li>
                    <span className="text-color-secondory mx-2">|</span>
                  </li>
                  <li>
                    <div onClick={openWinModal} className="cursor-pointer text-color-primary hover:text-color-primary action-panel">
                      How to win
                    </div>
                  </li>
                  <li>
                    <span className="text-color-secondory mx-2">|</span>
                  </li>
                  <li>
                    <div onClick={openInfoModal} className="cursor-pointer text-color-primary hover:text-color-primary action-panel">
                      Contest Info
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
              {showInfo && (
                <Modal handleClose={closeInfoModal}>
                  <InfoModal handleClose={closeInfoModal} prize={res?.prize} rules={res?.rules} endTime={res?.endTime} />
                </Modal>
              )}
            </AnimatePresence>
            <div className="flex flex-wrap gap-3">

              <div className="mt-5">
                <img src={res?.pic} alt=" " className="full-img rounded" />
              </div>

              {/* <div className="lg:flex flex-col mt-5 w-full overflow-hidden">
                <div className="contest-img-container" > */}
              {/* <img src={res?.pic} alt="banner" className="contest-img" style={{ aspectRatio: '3.1' }} /> */}
              {/* <div className="contest-img rounded"
                    style={{ background: `url(${res?.pic}) no-repeat scroll -205px 0px transparent` }}></div> */}
              {/* <img className="contest-img-i" src={res?.pic} />
                </div>
                <div className="flex items-center gap-3 w-full flex-col lg:flex-row">
                  <div className="contest-rules-img-1 flex-[0.5] rounded"
                    style={{ background: `url(${res?.pic}) no-repeat scroll -49px -193px transparent` }}></div>
                  <div className="contest-rules-img-2 my-3 flex-[0.5] rounded"
                    style={{ background: `url(${res?.pic}) no-repeat scroll -436px -192px transparent` }}></div>
                </div>
              </div> */}

              <div className="flex gap-3 w-full items-stretch flex-col-reverse lg:flex-row">

                <CardRule className="xl:flex flex-[0.4]">
                  <div className="expire-submit  px-3 sm:px-0">
                    <CardExpires className="bg-paper txt-base">
                      <div className="expires-date w-full">
                        Expires in <span>{res?.endDate}</span>
                      </div>
                      {/* <div className="day w-full">{res?.endTime}</div> */}

                      {isActive ? (
                        <div className="day text-2xl flex items-center justify-center time w-full">
                          <span className="box">
                            {clock.days || 0}d
                          </span>
                          <span className="mx-1"></span>
                          <span className="box">
                            {clock.hours || 0}h
                          </span>
                          <span className="mx-1"></span>
                          <span className="box">{clock.minutes || 0}m</span>
                          <span className="mx-1"></span>
                          <span className="box">{clock.seconds || 0}s</span>
                        </div>
                      ) : (
                        <div className="text-2xl font-semibold text-center" style={{ color: "rgb(248 113 113)" }}>
                          The&nbsp;contest&nbsp;is&nbsp;closed
                        </div>
                      )}
                    </CardExpires>
                    <>
                      {authenticated ? (
                        <Link href={`/contests/${slug}/submit-contests`} passHref>
                          <SubmitEntry className="mt-3 text-sm text-center justify-center">Submit entry for this contest</SubmitEntry>
                        </Link>
                      ) : (
                        <Link href="/account/login" passHref>
                          <SubmitEntry className="mt-3">Log In To Enter Contest</SubmitEntry>
                        </Link>
                      )}
                    </>
                  </div>
                </CardRule>

                <Card className="flex-[0.6] flex txt-base bg-pure">
                  <div className="flex w-full text-sm">
                    <div className="text-center w-full">
                      <h1>{res?.entries}</h1>
                      <span>Entries</span>
                    </div>
                    <div className="text-center w-full">
                      <h1>{res?.votes || 0}</h1>
                      <span>Votes</span>
                    </div>
                    <div className="text-center w-full">
                      <h1>{res?.views}</h1>
                      <span>Views</span>
                    </div>
                    <div className="text-center w-full">
                      <h1>{res?.score || "0"}</h1>
                      <span>Highest Score</span>
                    </div>
                  </div>
                  {/* <div className="flex w-full views-score">
                    <img src="/images/Crown.png" alt="Crown" className="Crown" />
                  </div> */}
                </Card>


              </div>
            </div>


            <div className="mt-10">
              <Leaderboard viewAll={false} id={res.id} contest_name={res?.name} accept_video={res.accept_video} accept_pic={res.accept_pic} />
            </div>
          </div>

          <aside className="right mt-10 md:mt-0">
            <Advertisement />

            <div className="mb-5">
              <JobCart />
            </div>
            <div className="mb-5">
              <CommunityBuzz />
            </div>
            <div>
              <SuccessStories />
            </div>
          </aside>
        </main>
      </Container>
    </>
  );
}

