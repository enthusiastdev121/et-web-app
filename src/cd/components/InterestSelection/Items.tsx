import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { rgba } from "polished";
import { Popup } from '@progress/kendo-react-popup';
import { HiPlus } from "react-icons/hi";
import { GoCheck } from "react-icons/go";

export default function Item({ id, label, setList, selected, sub = [] }: any) {
    const [open, setOpen] = useState(false);
    const anchor = useRef(null)
    const imgPath =
        label === "Acting"
            ? "/images/home-acting.png"
            : label === "Modeling"
                ? "/images/home-modeling.png"
                : label === "Tv & Reality"
                    ? "/images/home-tv.png"
                    : label === "Extras"
                        ? "/images/home-extras.png"
                        : label === "Musician"
                            ? "/images/home-music.png"
                            : label === "Film & Stage Crew"
                                ? "/images/home-filmstage.png"
                                : label === "Hair, Makeup, & Styling"
                                    ? "/images/home-hairmakeup.png"
                                    : label === "Presenter"
                                        ? "/images/home-presenter.png"
                                        : label === "Influencer"
                                            ? "/images/home-influencer.png"
                                            : label === "Photography"
                                                ? "/images/home-photo.png"
                                                : label === "Survival Jobs"
                                                    ? "/images/home-survival.png"
                                                    : label === "Dancing"
                                                        ? "/images/home-modeling.png"
                                                        : label === "Performing"
                                                            ? "/images/home-modeling.png"
                                                            : label === "Professional"
                                                                ? "/images/home-modeling.png"
                                                                : label === "Support"
                                                                    ? "/images/home-modeling.png"
                                                                    : label === "Technology"
                                                                        ? "/images/home-modeling.png"
                                                                        : label === "Other"
                                                                            ? "/images/home-modeling.png" : ""

    useEffect(() => {
        if (sub.map((i: any) => (i.selected === true ? true : false)).includes(true)) {
            setOpen(true)
            return;
        } else if (sub.length > 0) {
            setList((s: any) => {
                return s.map((i: any) => {
                    if (i.id === id) {
                        
                        return {
                            ...i,
                            
                            selected: false,
                        };
                    } else {
                        setOpen(false)
                        return i;
                    }
                });
            });

        }
    }, [sub, id]);

    const onClick = ({ parentId, id }: { parentId: number; id: number }) => {
        setList((s: any) => {
            const nn = s.map((i: any) => {
                if (i.id === parentId) {
                  
                    return {
                        ...i,
                        selected: true,
                        sub: i.sub.map((i2: any) => {
                            if (i2.id === id) {
                               
                                return {
                                    ...i2,
                                    selected: !i2.selected,
                                    
                                };
                            } else {
                                return i2;
                            }
                        }),
                    };
                } else {
                    return i;
                }
            });
            return nn;
        });
    };
    return (
        <>
            <Root className="cursor-pointer">
                <div>
                    <ImageBox
                        ref={anchor}
                        className="bg-black"
                        onClick={() => {


                            setList((s: any) => {
                                return s.map((i: any) => {
                                    if (i.id === id) {
                                        return {
                                            ...i,
                                            selected: !i.selected,
                                            sub: i.sub.map((i2: any) => {
                                                return {
                                                    ...i2,
                                                    selected: !i.selected ? true : false,
                                                };
                                            }),
                                        };
                                    } else {
                                        return i;
                                    }
                                });
                            });

                        }}
                    >
                        <div className="absolute grad left-0 bottom-0 z-10 h-full" />
                        <Image src={imgPath} alt={label} layout="fill" className="object-top object-cover"/>
                        <div
                            className="text-white font-semibold absolute bottom-2 left-1/2 z-30 text-xs sm:text-sm w-full text-center"
                            style={{ left: "50%", transform: "translateX(-50%)" }}
                        >
                            {label}
                        </div>

                        {selected && (
                            <div className="selected-overlay flex items-center justify-end flex-col p-3 absolute top-0 left-0 z-20 ">
                                <BsFillCheckCircleFill className="text-3xl mb-8 md:mb-10" />
                            </div>
                        )}
                    </ImageBox>
                </div>

                <Popup anchor={anchor.current} show={open}>
                    <div className="">
                        {sub.length > 0 && open && (
                            <ClickAwayListener onClickAway={() => setOpen(false)}>
                                <Dropdown2>
                                    <div className="flex flex-wrap gap-3 mx-auto">
                                        {sub.map((i: any) => {
                                            return (
                                                <SubItem
                                                    key={i.id}
                                                    className={i.selected ? "active" : ""}
                                                    onClick={() => onClick({ parentId: id, id: i.id })}
                                                >
                                                    <div className="icon text-sm marker: mr-1">
                                                        {i.selected ? <GoCheck /> : <HiPlus />}
                                                    </div>
                                                    <div className="text">{i.label}</div>
                                                </SubItem>
                                            );
                                        })}
                                    </div>
                                </Dropdown2>
                            </ClickAwayListener>
                        )}
                    </div>
                </Popup>

            </Root>
        </>
    );
}

const Root = styled.div`
   max-width: 800px;
   margin: auto;
   width: 100%;
  .selected-overlay {
    background: ${p => rgba(p.theme.primary, 0.6)};
    height: 100%;
    width: 100%;
    color: #fff;
  }
`;
const Dropdown2 = styled.div`
width: 100%;
min-width: 350px;
max-width: 600px;
padding: 15px;
margin: 0 auto;
background: ${p => p.theme.paper};
box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1),
  0px 4px 4px rgba(0, 0, 0, 0.05);
border-radius: 8px;
margin-left: -5%;
`
const SubItem = styled.div`
  display: flex;
  align-items: center;
  background: ${p => p.theme.pure};
  color: ${p => p.theme.primary};
  padding: 9px 10px;
  border-radius: 120px;
  cursor: pointer;

  .text {
    font-size: 13px;
  }

  &.active {
    color: #fff;
    background: ${p => p.theme.primary};
  }
`;
const ImageBox = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  @media (max-width:450px){
    height: 210px;
  }
  .grad {
    background: linear-gradient(180deg, rgba(17, 0, 0, 0) 0%, #000000 100%);
    width: 100%;
    border-radius: 0 0 8px 8px;
  }

`;
export const ChipBox = styled.div<{ active: boolean }>`
  background: ${(p) => (p.active ? p.theme.primary : rgba(p.theme.primary, 0.3))};
  color: ${(p) => (p.active ? "#fff" : p.theme.base)};
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: ${p => p.theme.primary};
    color: #fff;
  }
`;