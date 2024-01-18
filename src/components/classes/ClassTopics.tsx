import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { rgba } from "polished";
import { Popup } from '@progress/kendo-react-popup';
import { interest } from "@/utils/constants/profile";
import Button from "components/Button";
import toast from "react-hot-toast";
import { useAuth } from "context/AuthContext";

export default function Classtopics({ loading, height, setActiveCall }: any) {
    const [list, setList] = useState<any[]>([]);
    const [data, setData] = useState([])
    const { token } = useAuth()
    const [loading2, setLoading2] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const dem = Object.keys(interest).map((i) => {
            return {
                ...interest[i],
                selected: false,
                sub: interest[i].sub.map((i2: any, index: number) => {
                    return {
                        ...i2,
                        selected: false,
                    };
                }),
            };
        });
        setList(dem);

        return () => { };
    }, []);

    useEffect(() => {
        if (!loader) {
            return;
        }
        setLoading2(loading)
    }, [loading])

    console.log("list is: ", list);

    return (
        <div>
            <div className="max-w-[1100px]">
                <h2>All class topics</h2>
                {/* <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-col-6 gap-2 relative justify-items-start sm:justify-items-start"> */}
                <div className="flex gap-1 lg:gap-3 relative flex-wrap">
                    {list.map((i) => (
                        <Item
                            key={i.id}
                            {...i}
                            setList={setList}
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    );
}

function Item({
    id,
    label,
    setList,
    selected,
    sub = []
}: any) {
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
        if (sub.map((i) => (i.selected === true ? true : false)).includes(true)) {
            return;
        } else if (sub.length > 0) {
            setList((s) => {
                return s.map((i) => {
                    if (i.id === id) {
                        return {
                            ...i,
                            selected: false,
                        };
                    } else {
                        return i;
                    }
                });
            });
        }
    }, [sub, id]);


    return (
        <>
            <Root className="cursor-pointer">
                <div>
                    <ImageBox
                        ref={anchor}
                        className="bg-black"
                        onClick={() => {
                            setList((s) => {
                                return s.map((i) => {
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
                        <div className="absolute grad left-0 bottom-0 z-[3] h-full" />
                        <Image src={imgPath} alt={label} layout="fill" />
                        {/* <img src={imgPath} alt={label} className="h-full w-full" /> */}
                        <div
                            className="text-white font-semibold absolute bottom-2 left-1/2 z-[5] text-xs md:text-sm w-full text-center"
                            style={{ left: "50%", transform: "translateX(-50%)" }}
                        >
                            {label}
                        </div>

                        {selected && (
                            <div className="selected-overlay flex items-center justify-end flex-col p-3 absolute top-0 left-0 z-[4] ">
                                <BsFillCheckCircleFill className="text-3xl mb-8 md:mb-10" />
                            </div>
                        )}
                    </ImageBox>
                </div>
            </Root>
        </>
    );
}

const Root = styled.div`
  .selected-overlay {
    background: ${p => rgba(p.theme.primary, 0.6)};
    height: 100%;
    width: 100%;
    color: #fff;
  }
`;
const ImageBox = styled.div`
  width: 123px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  .grad {
    background: linear-gradient(180deg, rgba(17, 0, 0, 0) 0%, #000000 100%);
    width: 123px;
    height: 120px;
    border-radius: 0 0 8px 8px;

    @media (max-width: 700px) {
      width: 100px; 
    }
    @media (min-width: 1678px) {
      width: 140px; 
    }
  }

  img {
    object-fit: cover;
  }

  @media (max-width: 700px) {
    width: 95px;
    height: 95px;
  }
  @media (min-width: 1678px) {
    width: 140px; 
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

