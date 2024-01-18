import { interest } from "@/utils/constants/profile";
import { btnBackButton, btnNextActive, btnNextDisable } from "cd/containers/gettingStarted/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import styled, { useTheme } from "styled-components";
import Item from "./Items";

type propType = {
    authh: any,
}
export default function Interest({ authh }: propType) {
    const [list, setList] = useState<any[]>([]);
    const theme = useTheme();
    const [btnDisable, setBtnDisable] = useState(false)
    const [checkParent, setCheckParent] = useState<any>([]);

    useEffect(() => {
        const check = list.filter((i: any) => i.selected === true).map((i2) => ({ ...i2, sub: i2.sub.filter((k: any) => k.selected === true) }));
        setCheckParent(check)
    }, [list])
    console.log(checkParent, "checkParent")

    useEffect(() => {
        const dem = Object.keys(interest).map((i: any) => {
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
        if (list.every((i: { selected: boolean; }) => i.selected === false) === false) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)


        }
    }, [list])

    return (
        <InterestSection theme={theme}>
            <h1 className="font-bold sm:text-3xl text-2xl">
                Incredible, On what type of project do you need those talents?
            </h1>
            <p className="text-sm mt-5">
                Select as many talent that you are looking for.
            </p>
            <div className="project">
                {list.map((i) => (
                    <Item
                        key={i.id}
                        {...i}
                        setList={setList}
                    />
                )

                )}
            </div>

            <div className="flex items-center justify-between mt-5">
                <Link href={"/cd/getting-started?keyword=talents"}>
                    <a>
                        <button className={`${btnBackButton}`}>
                            <HiOutlineArrowNarrowLeft />
                            Back
                        </button>
                    </a>
                </Link>
                <Link href={"/cd/getting-started?keyword=organization"}>
                    <a>
                        <button
                            onClick={() => { authh(checkParent); }}
                            className={btnDisable ? `${btnNextDisable}` : `${btnNextActive}`} disabled={btnDisable}
                        >
                            Next
                            <HiOutlineArrowNarrowRight />
                        </button>
                    </a>
                </Link>
            </div >
        </InterestSection >
    );
}

const InterestSection = styled.section`
   max-width: 800px;
   width: 100%;
   margin: auto;
   padding: 20px;
   margin-top: 40px;
   .project {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 12px;
     margin-top: 20px;
     @media (max-width: 830px) {
        grid-template-columns: repeat(3, 1fr);
     }
     @media (max-width: 635px) {
        grid-template-columns: repeat(2, 1fr);
     }
     @media (max-width: 435px) {
        grid-template-columns: repeat(1, 1fr);
     }
   }
    button {
      background: #3c3c4399;
      border-radius: 4px;
      gap: 6px;
      color: ${(p) => p.theme.pure};
      padding: 10px 20px;
      transition: all 0.5s;
      svg {
        font-size: 22px;
      }
    }
    button:hover {
      box-shadow: rgb(0 0 0 / 54%) 0px 4px 13px;
    }
    button.next {
      background: ${(p) => p.theme.primary};
    }
    button.disable {
      opacity: 0.6;
      cursor: no-drop;
    }
    button.disable:hover {
      box-shadow: none;
    }
  
 
`