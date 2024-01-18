import React, { useState } from "react";

import { motion } from "framer-motion";
import { TitleBar } from "./StyledComponent";
import { TitleTiles } from "./StyledComponent";
import Circle from "./Circle";
import Router, { useRouter } from "next/router";
const fadein = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};


function GetStart() {
  const route = useRouter()

  const GoToSocialTour = () => {
    route.push('/profile/edit?keyword=app-tour#target9')
  }

  const GoToStunningTour = () => {
    route.push('/profile/edit?keyword=app-tour#target10')
  }

  const GoToVideoTour = () => {
    route.push('/profile/edit?keyword=app-tour#target11')
  }

  const GoToShowcaseTour = () => {
    route.push('/profile/edit?keyword=app-tour#target12')
  }

  const GoToAudioTour = () => {
    route.push('/profile/edit?keyword=app-tour#target13')
  }

  const GoToSpotlightsTour = () => {
    route.push('/profile/edit?keyword=app-tour#target11')
  }

  const GoToCreditsTour = () => {
    route.push('/profile/edit?keyword=app-tour#target15')
  }

  const GoToInterestTour = () => {
    route.push('/profile/edit?keyword=app-tour#target7')
  }

  const GoToDocumentsTour = () => {
    route.push('/profile/edit?keyword=app-tour#target16')
  }

  return (
    <>
      <motion.div
        className="mx-auto bg-pure txt-base hidden md:block"
        variants={fadein}
        initial="hidden"
        animate="visible"
      >
        <TitleBar>
          <h1>Getting started guide</h1>
          {/* <div>
            <Circle val="54" />
          </div> */}
        </TitleBar>
        <GetStarted
          icon_url="/svg/social_link.svg"
          name="Add social links"
          status="Pending"
          // pending_icon="/svg/done.svg"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToSocialTour}
        />
        <GetStarted
          icon_url="/svg/video-greeting.svg"
          name="Add video greeting"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToVideoTour}
        />
        <GetStarted
          icon_url="/svg/stunning-photos.svg"
          name="Add stunning photos"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToStunningTour}
        />
        <GetStarted
          icon_url="/svg/showcase-your-talent.svg"
          name="Add videos & showcase your talent"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToShowcaseTour}
        />
        <GetStarted
          icon_url="/svg/audio-recordings.svg"
          name="Add audio recordings"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToAudioTour}
        />
        <GetStarted
          icon_url="/svg/spotlights.svg"
          name="Add spotlights"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToSpotlightsTour}
        />
        <GetStarted
          icon_url="/svg/credits-experience.svg"
          name="List your credits & experience"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToCreditsTour}
        />
        <GetStarted
          icon_url="/svg/acting-interest.svg"
          name="Add more info on acting interest"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToInterestTour}
        />
        <GetStarted
          icon_url="/svg/modeling-interest.svg"
          name="Add info from your modeling interest"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToInterestTour}
        />
        <GetStarted
          icon_url="/svg/interest.svg"
          name="Add info from your extras interest"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToInterestTour}
        />
        {/* <GetStarted
          icon_url="/svg/professional-documents.svg"
          name="Add professional documents"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
          onClick={GoToDocumentsTour}
        /> */}
      </motion.div>
    </>
  );
}
export default GetStart;

export function GetStarted(props: any) {
  return (
    <div onClick={props.onClick} className="cursor-pointer">
      <TitleTiles onClick={props.onClick} className="bg-paper txt-base">
        <div onClick={props.onClick}>
          <img src={props.icon_url} alt={props?.name} />
          <p className={props.status}>{props?.name} </p>
        </div>
        <div onClick={props.onClick}>
          {/* <p className={props.status}>{props.status}</p> */}
          <img src={props.pending_icon} alt={props?.name} />
        </div>
      </TitleTiles>
    </div>
  );
}
