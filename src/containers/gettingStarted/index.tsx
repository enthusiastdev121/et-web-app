import Banner from "./Banner";
import React, { useEffect, useState } from "react";
import { Tab } from "./StyledComponent";
import ActivityGuide from "./ActivityGuide";
import GetStart from "./GetStart";
import VideoGuide from "./VideoGuide";
import { BannerComp1, BannerComp2, BannerComp3 } from "./Banner";
import { Bgimg } from "./StyledComponent";

export default function GettingStarted() {
  const [tabvalue, setTabvalue] = useState("1");
  const [activetab, setActivetab] = useState("1");

  useEffect(
    () => {
      localStorage.removeItem("firstTourDone")
    }, []
  )

  return (
    <>
      <Bgimg>
        {activetab == "1" ? (
          <BannerComp1 />
        ) : activetab == "2" ? (
          <BannerComp2 />
        ) : (
          <BannerComp3 />
        )}
      </Bgimg>

      <div className="md:p-[20px] min-h-[800px] bg-pure">
        {/* <Tab>
          <button
            className={activetab == "1" ? "active" : ""}
            onClick={() => {
              setTabvalue("1");
              setActivetab("1");
            }}
          >
            Geting started
          </button>
          <button
            className={activetab == "2" ? "active" : ""}
            onClick={() => {
              setTabvalue("2");
              setActivetab("2");
            }}
          >
            Activity guide
          </button>
          <button
            className={activetab == "3" ? "active" : ""}
            onClick={() => {
              setTabvalue("3");
              setActivetab("3");
            }}
          >
            Videos Guide
          </button>
        </Tab> */}
        {tabvalue == "1" ? (
          <>
            <GetStart />
          </>
        ) : tabvalue == "2" ? (
          <>
            <ActivityGuide />
          </>
        ) : (
          <>
            <VideoGuide />
          </>
        )}
      </div>
    </>
  );
}
