import { darken } from "polished";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { HiArchive, HiArrowRight, HiShare, HiStar } from "react-icons/hi";
import { RiFolderReduceFill } from "react-icons/ri";
import styled from "styled-components";
import { OwnClassCardD } from "types/classes";

export default function OwnClassCard({ item }: { item: OwnClassCardD }) {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <Container>
            {/* thumbnail */}
            <img src={item.thumbnail} alt="thumbnail" />

            {/* Options */}
            <Options onClick={() => setShowDropdown(true)}>
                <BsThreeDotsVertical />
            </Options>

            {showDropdown &&
                <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
                    <Dropdown>
                        <li className={item.fav ? "text-[#E53D3E]" : ""} onClick={() => setShowDropdown(false)}><AiFillStar className="text-lg" /> {item.fav ? "Remove from favorites" : "Add to favorite"}</li>
                        <li onClick={() => setShowDropdown(false)}><HiShare className="text-lg" /> Share</li>
                        <li onClick={() => setShowDropdown(false)}><HiArchive className="text-lg" /> Add to archive</li>
                    </Dropdown>
                </ClickAwayListener>
            }

            {/* fav */}
            {
                item.fav &&
                <FavBtn>
                    <AiFillStar />
                </FavBtn>
            }

            {/* content */}
            <div className="py-[15px] px-[10px]">
                <h2>{item.title}</h2>
                <p className="text-sm">{item.desc}</p>

                <div className="mt-[20px] mb-[34px]">
                    {
                        item.status === 3 ?
                            <div className="flex justify-center flex-wrap gap-5">
                                <Button status={2}>Start&nbsp;again</Button>
                                <Button status={1}>Rate&nbsp;this&nbsp;class <HiStar className="text-lg" /></Button>
                            </div> : item.status === 4 ?
                                <Button status={item.status}><div className="mt-[1px]">Remove from archive</div> <RiFolderReduceFill className="text-lg" /></Button> :
                                <Button status={item.status}>{item.status === 1 ? "Start class" : "Continue"} <HiArrowRight className="text-lg" /></Button>
                    }
                </div>

                <div className={item.status === 1 ? "text-[13px] -mb-2 opacity-60" : item.status === 2 ? "text-[13px] -mb-2" : item.status === 4 ? "text-[13px] -mb-2 opacity-60" : "text-[#149D54] text-[13px] -mb-2 font-semibold"}>
                    {item.status === 2 ? item.progress + "% Complete" : item.status === 3 ? <span className='flex items-center gap-2'><BsFillCheckCircleFill className="text-base" /> {item.progress} % Complete</span> : item.status === 4 ? "Class on Archive" : "Class not started yet"}
                </div>
            </div>

            {/* progress bar */}
            <div className="absolute bottom-0 left-0 w-full">
                <div className={item.status === 2 ? "bg-primary" : item.status === 4 ? "transparent" : "bg-[#149D54]"} style={{ width: item.progress + "%", height: 3 }}></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background: ${p => p.theme.pure};
    maxWidth: 347px;
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }

    h2 {
        font-size: 16px;
    }
`

const Button = styled.button<{ status: number }>`
    background: ${p => p.status === 1 ? p.theme.primary : "transparent"};
    border: 1px solid ${p => p.status === 1 ? p.theme.primary : p.status === 4 ? "#E53D3E" : p.theme.base};
    color: ${p => p.status === 1 ? '#fff' : p.status === 4 ? "#E53D3E" : p.theme.base};
    border-radius: 4px;
    font-size: 14px;
    padding: 7.5px 24px;
    // margin-top: 20px;
    // margin-bottom: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-weight: 600;
`

const Options = styled.button`
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding: 11px 10px;
    color: ${p => p.theme.pure};
    position: absolute;
    top: 10px;
    right: 10px;

    &:focus, &:hover {
        background: ${p => p.theme.pure};
        color: ${p => p.theme.base};
        transition: all 0.2s ease;
    }
`

const FavBtn = styled.button`
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding: 11px 10px;
    color: #F59E0B;
    position: absolute;
    top: 55px;
    right: 10px;
`

const Dropdown = styled.ul`
    background-color: ${p => p.theme.pure};
    border-radius: 6px;
    width: 94%;
    padding: 16px 14px;
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    z-index: 2;

    li {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
        cursor: pointer;
        padding: 6px;

        &:hover {
            background-color: ${(p) => darken(0.05, p.theme.paper)};
            border-radius: 5px;
            transition: all 0.2s ease;
        }
    }
`