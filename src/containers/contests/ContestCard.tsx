import { PrimaryBtn, PrimaryBtnWhite } from "@/styles/Btn.styled";
import { H2, Body1 } from "@/styles/Typography.styled";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from "date-fns";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContestItemD } from "types/contest";
import { Card, PhotoItem, ContestInfo } from "./Contests.styled";
import { formatContestDetailSlug, getTimeRemaining } from "utils/helper";
import RulesModal from "./RulesModal";
import Modal from "components/Modal";
import { useAuth } from "context/AuthContext";
import { getContestLeaderboardApi } from "network/apis/contest";
import { formatLeaderboardItem } from "network/apiFormatter/contest";

export default function ContestCard(props: ContestItemD) {
  const { name, id, desc, pic, endTime, createdAt, rules } = props;
  const {
    token
  } = useAuth();
  const [localEnd, setLocalEnd] = useState(new Date());
  const [isActive, setIsActive] = useState(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [Leaderboard, setLeaderboard] = useState<any>([]);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const [clock, setClock] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    let int: any;
    if (differenceInHours(new Date(endTime * 1000), new Date()) < 0) {
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

  useEffect(() => {
    const getData = async () => {
      const leaderboardRes = await getContestLeaderboardApi(id, 1, 8, token, "");
      setLeaderboard(leaderboardRes?.data)
    };
    getData();
  }, [])

  useEffect(() => {




    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(new Date(endTime * 1000));
      setClock({ days: t.days, hours: t.hours, minutes: t.minutes, seconds: t.seconds })

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);

    return () => clearInterval(timeinterval)

  }, [endTime, clock])


  return (
    <Card className="px-0 py-5 sm:p-5 mb-5">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showModal && (
          <Modal handleClose={close}>
            <RulesModal rules={rules} handleClose={close} />
          </Modal>
        )}
      </AnimatePresence>

      <Body1 className="flex flex-col items-center justify-center xl:flex-row">
        <div>
          <PhotoItem src={pic || ""} />
          {/* <img src={pic || ""} alt="cover" /> */}
          {/* </PhotoItem> */}
        </div>

        <div className="mt-3 px-5 xl:w-5/5  md:text-center textLeft xl:text-left">
          <h2 className="text-lg font-bold md:text-[25px] md:font-extrabold">
            <Link
              href={`/contests/${formatContestDetailSlug(name, id)}/`}
              passHref
            >
              <a className="txt-primary">{name}</a>
            </Link>
          </h2>
          <p className="description">{desc}</p>

          <div className="flex items-center justify-between">
            {
              isActive ? (<div className="blue text-left flex content-ending mt-3">
                <h6 className="font-semibold text-sm title txt-base">Ending in: &nbsp;&nbsp;</h6>
                <div className="text-2xl flex items-center justify-center time">
                  <span className="box">
                    {clock.days}d
                  </span>
                  <span className="mx-1"></span>
                  <span className="box">
                    {clock.hours}h
                  </span>
                  <span className="mx-1"></span>
                  <span className="box">{clock.minutes}m</span>
                  <span className="mx-1"></span>
                  <span className="box">{clock.seconds}s</span>
                </div>
              </div>) : (<div
                className="text-2xl font-semibold text-center"
                style={{ color: "rgb(248 113 113)" }}
              >
                The&nbsp;contest&nbsp;is&nbsp;closed
              </div>)
            }

            <div className="flex sm:hidden items-center justify-end space-x-2 mt-2 ml-auto">
              <div className="flex -space-x-2 overflow-hidden">
                {Leaderboard !== [] &&
                  Leaderboard.slice(0, 6).map((item: any, index: number, elements: any) => {
                    const res = formatLeaderboardItem(item);
                    return (
                      <img className="image-contribute" src={res?.pic} alt="" key={index} />
                    );
                  })}
              </div>
              <div className="font-semibold text-sm ml-1">
                <a href="#" className="txt-primary">{Leaderboard.length}+</a>
              </div>
            </div>
          </div>

          {/* {isActive ? (
            <div className="blue text-center">
              <h6 className="font-semibold text-sm">Entries Close on</h6>
              <div className="text-2xl flex items-center justify-center my-3">
                <span className="box">
                  {differenceInHours(new Date(endTime * 1000), new Date())}
                </span>
                <span className="mx-2">:</span>
                <span className="box">{60 - format(localEnd, "mm")}</span>
                <span className="mx-2">:</span>
                <span className="box">{60 - format(localEnd, "ss")}</span>
              </div>
            </div>
          ) : (
            <div
              className="text-2xl font-semibold text-center"
              style={{ color: "rgb(248 113 113)" }}
            >
              The&nbsp;contest&nbsp;is&nbsp;closed
            </div>
          )} */}

          <div className="flex flex-col gap-2 md:gap-0 sm:flex-row mt-5 items-center">
            <Link
              href={`/contests/${formatContestDetailSlug(name, id)}?page=1`}
              passHref
            >
              <PrimaryBtn className="rounded py-1 px-5 w-full sm:w-fit">View&nbsp;Contest</PrimaryBtn>
            </Link>

            <PrimaryBtnWhite className="btn rule" onClick={open}>
              Rules
            </PrimaryBtnWhite>

            <div className="hidden sm:flex items-center justify-end space-x-2 ml-auto">
              <div className="flex -space-x-2 overflow-hidden">
                {Leaderboard !== [] &&
                  Leaderboard.slice(0, 6).map((item: any, index: number, elements: any) => {
                    const res = formatLeaderboardItem(item);
                    return (
                      <img className="image-contribute" src={res?.pic} alt="" key={index} />
                    );
                  })}
              </div>
              <div className="font-semibold text-sm ml-1">
                <a href="#" className="txt-primary">{Leaderboard.length}+</a>
              </div>
            </div>

          </div>


        </div>



        {/* <ContestInfo className="xl:w-20pr"> */}
        {/* {isActive ? (
            <div className="blue text-center">
              <h6 className="font-semibold text-sm">Entries Close on</h6>
              <div className="text-2xl flex items-center justify-center my-3">
                <span className="box">
                  {differenceInHours(new Date(endTime * 1000), new Date())}
                </span>
                <span className="mx-2">:</span>
                <span className="box">{60 - format(localEnd, "mm")}</span>
                <span className="mx-2">:</span>
                <span className="box">{60 - format(localEnd, "ss")}</span>
              </div>
            </div> */}
        {/* ) : (
            <div
              className="text-2xl font-semibold text-center"
              style={{ color: "rgb(248 113 113)" }}
            >
              The&nbsp;contest&nbsp;is&nbsp;closed
            </div>
          )} */}

        {/* <div className="flex flex-col mt-5">
            <Link
              href={`/contests/${formatContestDetailSlug(name, id)}?page=1`}
              passHref
            >
              <PrimaryBtn className="btn">View&nbsp;Contest</PrimaryBtn>
            </Link>

            <PrimaryBtnWhite className="btn" onClick={open}>
              Contest&nbsp;Rules
            </PrimaryBtnWhite>
          </div>
        </ContestInfo> */}
      </Body1>
    </Card>
  );
}


{/* <div className="text-2xl flex items-center justify-center time">
                <span className="box">
                  {Math.round(differenceInHours(new Date(endTime * 1000), new Date()) / 60)}d
                </span>
                <span className="mx-1"></span>
                <span className="box">
                  {(differenceInHours(new Date(endTime * 1000), new Date())) - (Math.round(differenceInHours(new Date(endTime * 1000), new Date()) / 60) * 60)}h
                </span>
                <span className="mx-1"></span>
                <span className="box">{60 - format(localEnd, "mm")}m</span>
                <span className="mx-1"></span>
                <span className="box">{60 - format(localEnd, "ss")}s</span>
              </div> */}