import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { rgba } from "polished";
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const ROUTES = [
  {
    id: 1,
    route: "/messages",
    label: "Messages",
  },
  {
    id: 2,
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    id: 3,
    route: "/media",
    label: "media",
  },
  {
    id: 4,
    route: "/applications",
    label: "Application",
  },
  {
    id: 5,
    route: "/profile",
    label: "My Account",
  },
];

export default function SideMenuTwo({ open, onClose }: Props) {
  const theme: any = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style["overflow"] = "hidden";
    } else {
      document.body.style["overflow"] = "auto";
    }
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <Root>
            <Overlay
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Paper
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.6 }}
            >
              <Link href="/" passHref>
                <Logo>
                  <Image
                    alt="Logo"
                    src={
                      theme.type === "light"
                        ? "/svg/logo.svg"
                        : "/svg/logo-light.svg"
                    }
                    layout="fill"
                  />
                </Logo>
              </Link>
              <Items>
                {ROUTES.map((i: any, index: number) => {
                  return (
                    <>
                      {i.route !== "" ? (
                        <Link href={i.route} key={i.id} passHref>
                          <Item
                            className="flex items-center gap-1"
                            onClick={() => {
                              if (i.subLabels) {
                                setIsOpen(!isOpen);
                              }
                            }}
                          >
                            {i.label}{" "}
                            {i.subLabels && (
                              <div onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? (
                                  <TiArrowSortedUp />
                                ) : (
                                  <TiArrowSortedDown />
                                )}
                              </div>
                            )}
                          </Item>
                        </Link>
                      ) : (
                        <Item
                          key={i.id}
                          className="flex items-center gap-1"
                          onClick={() => {
                            if (i.subLabels) {
                              setIsOpen(!isOpen);
                            }
                          }}
                        >
                          {i.label}{" "}
                          {i.subLabels && (
                            <div onClick={() => setIsOpen(!isOpen)}>
                              {isOpen ? (
                                <TiArrowSortedUp />
                              ) : (
                                <TiArrowSortedDown />
                              )}
                            </div>
                          )}
                        </Item>
                      )}
                      {isOpen && (
                        <ul className="ml-10">
                          {i.subLabels?.map((item: any) => (
                            <li key={item.id}>
                              <Link href={item.route} key={item.id} passHref>
                                <Item>{item.label}</Item>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  );
                })}
              </Items>
            </Paper>
          </Root>
        )}
      </AnimatePresence>
    </>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

const Root = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;
const Overlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 600;
`;
const Paper = styled(motion.div)`
  background: ${(p: any) => p.theme.paper};
  width: 80%;
  height: 100%;
  z-index: 700;
  padding: 10px 18px;
  overflow: auto;
`;
const Logo = styled(motion.a)`
  height: 36px;
  width: 100%;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;
const Items = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const Item = styled(motion.a)`
  padding: 1rem 0.8rem;
  font-weight: 600;
  border-radius: 12px;
  opacity: 0.6;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 1;
    background: ${(p: any) => rgba(p.theme.base, 0.08)};
    padding-left: 1.4rem;
  }
`;

// Users have requested the ability to search data within tables 2

// Fix JavaScript Errors in UI Kit 2
