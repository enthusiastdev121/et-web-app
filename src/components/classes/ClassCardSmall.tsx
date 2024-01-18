import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { ClassCardSmallD } from "types/classes";

export default function ClassCardSmall({ item, width }: { item: ClassCardSmallD, width: number }) {
    const starred: Array<number> = [];
    const unstarred: Array<number> = [];

    for (let i = 0; i < item.rating; i++) {
        starred.push(i);
    }

    for (let i = 0; i < 5 - item.rating; i++) {
        unstarred.push(i);
    }
    return (
        <Root width={width}>
            <img src={item.img} alt="et class" />

            <div className="mb-1 font-bold text-sm mt-2">{item.title}</div>

            <div className="flex items-center text-xs">
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
        </Root>
    )
}

const Root = styled.div<{ width: number }>`
    max-width: ${p => p.width}px;
    width: 100%;

    img {
        object-fit: cover;
        width: 100%;
        height: 140px;
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