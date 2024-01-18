import { motion } from "framer-motion";
import Circle from "./Circle";
import { GetStarted } from "./GetStart";
import { TitleBar } from "./StyledComponent";

const fadein = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

function ActivityGuide() {
  return (
    <>
      <motion.div variants={fadein} initial="hidden" animate="visible">
        <TitleBar>
          <h1>Activity guide</h1>
          <div>
            <Circle val="90" />
          </div>
        </TitleBar>
        <GetStarted
          icon_url="/svg/participate.svg"
          name="Participate in a contest"
          status="Done"
          pending_icon="/svg/done.svg"
        />
        <GetStarted
          icon_url="/svg/news-feed.svg"
          name="Post and explore news feed"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
        />
        <GetStarted
          icon_url="/svg/Connect-follow.svg"
          name="Connect & follow other talents"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
        />
        <GetStarted
          icon_url="/svg/message-share-info.svg"
          name="Message & share information with other talents"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
        />
        <GetStarted
          icon_url="/svg/community.svg"
          name="Add a post in community buzz"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
        />
        <GetStarted
          icon_url="/svg/audition.svg"
          name="Apply for audition / jobs"
          status="Pending"
          pending_icon="/svg/right-arrow.svg"
        />
      </motion.div>
    </>
  );
}

export default ActivityGuide;
