import { THEME } from "@/utils/constants/theme";
import { motion, AnimatePresence } from "framer-motion";
import { rgba } from "polished";
import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import styled from "styled-components";
import { iconBtnCommon } from "./Styles";
import ClickAwayListener from "react-click-away-listener";

const anim = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function DotOptions({ actions, dark }: { actions: any[]; dark?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Root>
        <Btn dark={dark} onClick={() => setOpen((s) => !s)}>
          <IoMdMore size={THEME.iconSize.root} />
        </Btn>
        <AnimatePresence initial={false}>
          {open && (
            <OptionBg variants={anim} initial="hidden" animate="visible" exit="exit">
              <OptionContent>
                <OptionItems>
                  <Option>Demo</Option>
                  <Option>Yes</Option>
                  <Option>None</Option>
                </OptionItems>
              </OptionContent>
            </OptionBg>
          )}
        </AnimatePresence>
      </Root>
    </ClickAwayListener>
  );
}

const Root = styled.div`
  position: relative;
`;
const Btn = styled.div`
  ${iconBtnCommon};
  background: ${(p) => (p.dark ? "rgba(0,0,0,0.2)" : rgba(p.theme.base, 0.08))};

  color: ${(p) => (p.dark ? "#fff" : p.theme.base)};
  &:hover {
    background-color: ${(p) => (p.dark ? "rgba(0,0,0,0.6)" : rgba(p.theme.base, 0.16))};
  }
`;
const OptionBg = styled(motion.div)`
  position: absolute;
  top: 100%;
  background: ${(p) => p.theme.paper};
  border-radius: 8px;
  right: 0;
`;
const OptionContent = styled.div``;
const OptionItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 160px;
  font-size: 1rem;
  &:hover {
    background: ${(p) => rgba(p.theme.base, 0.08)};
  }
`;
