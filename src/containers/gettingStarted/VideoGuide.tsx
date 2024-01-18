import { motion } from "framer-motion";
import { TitleBar } from "./StyledComponent";
import { VideoTile } from "./StyledComponent";
const fadein = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

function VideoGuide() {
  return (
    <>
      <motion.div variants={fadein} initial="hidden" animate="visible">
        <TitleBar>
          <h1>Videos guide</h1>
        </TitleBar>
        <VideoTile>
          <div>
            <img src="/images/upgrade-to-Pro.png" alt="" />
            <h1>Why upgrade to Pro?</h1>
          </div>
          <div>
            <img src="/images/Pro-Membership.png" alt="" />
            <h1>Snoop Dogg Pro Membership Promo</h1>
          </div>
          
        </VideoTile>
      </motion.div>
    </>
  );
}
export default VideoGuide;
