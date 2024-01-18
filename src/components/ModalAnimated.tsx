import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const anim = {
  hidden: {
    transform: "scale(.6)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1)",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
    },
  },
  exit: {
    transform: "scale(0.6)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const ModalPaper = (props: any) => {
  return (
    <Root {...props} variants={anim} initial="hidden" animate="visible" exit="exit">
      {props.children}
    </Root>
  );
};

export default function ModalAnimated({ onClose, open, children }: { open: boolean; onClose?: () => any; children?: any }) {
  return (
    <>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {open && (
          <Outer>
            <Backdrop
              id="bg"
              onClick={(e) => {
                if (onClose) {
                  onClose();
                }
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {children}
          </Outer>
        )}
      </AnimatePresence>
    </>
  );
}

const Outer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 60;
`;

const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
`;
const Root = styled(motion.div)`
  z-index: 10;
  max-width: 90%;
`;
