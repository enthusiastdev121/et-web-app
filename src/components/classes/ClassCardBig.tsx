import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { TiPlus } from "react-icons/ti";
import styled from "styled-components";
import { ClassCardBigD } from "types/classes";

export default function ClassCardBig({ item, imgWidth }: { item: ClassCardBigD, imgWidth: number }) {
    const router = useRouter()
    const [fav, setFav] = useState(item.isFav)
    const starred: Array<number> = [];
    const unstarred: Array<number> = [];

    for (let i = 0; i < item.rating; i++) {
        starred.push(i);
    }

    for (let i = 0; i < 5 - item.rating; i++) {
        unstarred.push(i);
    }

    const likeChange = () => {
        setFav(!fav)
    };

    return (
        <Root imgWidth={imgWidth}>
            <img src={item.img} alt="class" className="cursor-pointer" />

            <div className="py-5 xl:py-10 px-[20px]">
                <div className="text-base sm:text-lg font-bold cursor-pointer">{item.title}</div>
                <div className="text-sm my-[10px]">{item.desc}</div>

                <div className="text-[13px] flex flex-wrap items-center gap-1">
                    <div className="font-semibold">Updated at {item.updatedAt}</div>
                    <span>•</span>
                    <div>{item.duration} hours</div>
                    <span>•</span>
                    <div>{item.lecturesCount} lectures</div>
                    <span>•</span>
                    <div>{item.difficultyLevel}</div>
                </div>

                <div className="flex items-center text-xs mt-[10px] mb-[12px]">
                    <div className="opacity-60 font-semibold">{item.cat} <span className="mx-1">•</span> </div>

                    <div className="flex gap-2 items-center">
                        <div className="flex gap-1 stars-container">
                            {starred.map((i) => (
                                <AiFillStar key={i} className="star-filled" />
                            ))}
                            {unstarred.map((i) => (
                                <AiFillStar key={i} className="star" />
                            ))}
                        </div>
                        <div className="text-sm font-bold" style={{ color: "#ffb543" }}>
                            {item.rating}
                        </div>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="font-bold">${item.price}</div>
                    <div>{item.tags.map(tag => (
                        <Tag
                            key={tag}
                            bg={tag === "New" ? "#149D54" : tag === "Best seller" ? "#E53D3E" : tag === "Highest rated" ? '#D97706' : "#777"}
                            className="text-xs">{tag}</Tag>
                    ))}</div>
                </div>

                {router.pathname !== "/classes/browse-classes" && <div className="flex items-center gap-2 mt-4">
                    <button
                        className="rounded bg-primary text-white flex items-center jsutify-center gap-2 px-[40px] py-[8px] text-sm font-semibold"
                    ><TiPlus className="text-base" /> Buy this class</button>
                    <button className="text-2xl py-[6px] px-[15px] rounded border border-slate-500"><HiShoppingCart /></button>
                </div>}
            </div>

            <FavIcon
                fav={fav}
                className="rounded-full p-[6px] absolute top-3 right-3"
                style={{ border: fav ? "1px solid #E53D3E" : "1px solid #E5E7EB" }}>
                <span
                    className="active-fav block w-fit cursor-pointer"
                    onClick={() => likeChange()}
                >
                    {!fav ? <><FaRegHeart style={{ fontSize: 14, color: '#A1A1AA' }} /></> : <><FaHeart style={{ fontSize: 14, color: 'white' }} /></>}
                </span>
            </FavIcon>
        </Root>
    )
}

const Root = styled.div<{ imgWidth: number }>`
    background: ${p => p.theme.pure}; 
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    min-height: 250px;
    height: fit-content;
    overflow: hidden;
    position: relative;
    @media (max-width: 767px) {
        flex-direction: column;
    }
    
    img {
        width: ${p => p.imgWidth}%;
        height: auto;
        object-fit: cover;
        display: block;

        @media (max-width: 767px) {
            width: 100%;
        }
    }

    .stars-container {
        .star {
            color: #c5c5c5;
            font-size: 15px;
        }
        .star-filled {
            color: #ffb543;
            font-size: 15px;
        }
        font-size: 20px;
    }
`

const Tag = styled.div<{ bg: string }>`
    background: ${p => p.bg};
    font-size: 13px;
    padding: 4px 10px;
    border-radius: 100px;
    color: #fff;
    font-weight: 600;
`

const FavIcon = styled.div<{ fav: boolean }>`
    background: ${p => p.fav ? "#E53D3E" : "transparent"};
    
    @media (max-width: 768px) {
        background: ${p => p.fav ? "#E53D3E" : "hsla(220, 13%, 91%, 1)"};
    }
`