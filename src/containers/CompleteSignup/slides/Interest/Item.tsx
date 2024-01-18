import Modal from "components/Modal";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { FiCheck } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import styled from "styled-components";
import { ChipBox } from "../Styles";
import { interest } from "@/utils/constants/profile";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { rgba } from "polished";

export default function Item({
  id,
  onUpdate,
  value,
  label,
  setList,
  selected,
  sub = [],
}: any) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(true);
  const [top, setTop] = useState(0);
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const areaRef = useRef(null)

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

  const onClick = ({ parentId, id }: { parentId: number; id: number }) => {
    setList((s) => {
      const nn = s.map((i) => {
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

  const getCoordinates = () => {
    console.log("coordinates: ", areaRef.current.getBoundingClientRect())
    console.log("scroll postion: ", areaRef.current.scrollTop)

    if (window.innerWidth - areaRef.current.getBoundingClientRect().x < 500) {
      setLeft(false)
    }
    window.innerWidth >= 1340 ? setTop(areaRef.current.getBoundingClientRect().bottom - areaRef.current.getBoundingClientRect().height - 62) : window.innerWidth >= 500 ? setTop(areaRef.current.getBoundingClientRect().y - 62) : setTop(areaRef.current.getBoundingClientRect().top + window.scrollY - 7)

  }

  return (
    <>
      <Root className="relative cursor-pointer" >
        <div onClick={getCoordinates} ref={areaRef}>
          <ImageBox
            className="bg-black"
            onClick={() => {
              setOpen((s) => !s);
              if (sub.length === 0) {
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
              }
            }}
          >
            <div className="absolute grad left-0 bottom-0 z-10 h-full" />
            <Image src={imgPath} alt={label} layout="fill" />
            <div
              className="text-white font-semibold absolute bottom-2 left-1/2 z-30 text-sm w-full text-center"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              {label}
            </div>

            {selected && (
              <div className="selected-overlay flex items-center justify-end flex-col p-3 absolute top-0 left-0 z-20 ">
                <BsFillCheckCircleFill className="text-4xl mb-10" />
              </div>
            )}
          </ImageBox>
        </div>
      </Root>


      {sub.length > 0 && open && (

        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Dropdown left={left} top={top}>
            <div className="flex flex-wrap gap-3 mx-auto">
              {sub.map((i: any) => {
                return (
                  <SubItem
                    key={i.id}
                    className={i.selected ? "active" : ""}
                    onClick={() => onClick({ parentId: id, id: i.id })}
                  >
                    <div className="icon text-sm marker: mr-1">
                      <FiCheck />
                    </div>
                    <div className="text">{i.label}</div>
                  </SubItem>
                );
              })}
            </div>
          </Dropdown>
        </ClickAwayListener>

      )}

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

const Dropdown = styled.div<{ left: boolean; top: number; }>`
width: 500px;
width: 100%;
margin: 0 auto;
max-width: 600px;
padding: 15px;
background: ${p => p.theme.paper};
box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1),
  0px 4px 4px rgba(0, 0, 0, 0.05);
border-radius: 8px;
position: absolute;
left: ${p => p.left ? "0" : ""};
right: ${p => !p.left ? "0" : ""};
top: 100%;
top: ${p => p.top}px;
z-index: 40;
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
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  .grad {
    background: linear-gradient(180deg, rgba(17, 0, 0, 0) 0%, #000000 100%);
    width: 120px;
    border-radius: 0 0 8px 8px;
  }
`;


/*
    {sub.length > 0 && open && (

 <Modal
   width={width > 768 ? "50%" : "100%"}
   handleClose={() => setOpen(false)}
 >
   <div className="dropdown">
     <div className="flex items-center justify-between p-2 border-b-2 mb-3 ">
       <div className="font-bold txt-link">{label}</div>

       <GrFormClose
         className="text-2xl cursor-pointer"
         onClick={() => setOpen(false)}
       />
     </div>

     <div className="flex flex-wrap gap-2 mx-auto">
       {sub.map((i: any) => {
         return (
           <SubItem
             key={i.id}
             className={i.selected ? "active" : ""}
             onClick={() => onClick({ parentId: id, id: i.id })}
           >
             <div className="icon text-sm marker: mr-1">
               <FiCheck />
             </div>
             <div className="text text-sm">{i.label}</div>
           </SubItem>
         );
       })}
     </div>
   </div>
 </Modal>
  )}
*/



// const Root = styled.div`
//   .dropdown {
//     width: 90%;
//     margin: 0 auto;
//     max-width: 600px;
//     padding: 15px;
//     background: #ffffff;
//     box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1),
//       0px 4px 4px rgba(0, 0, 0, 0.05);
//     border-radius: 8px;
//   }
// `;