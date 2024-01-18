import { useAuth } from "context/AuthContext"
import { getOwnContestApi } from "network/apis/ownProfile"
import { useEffect, useState } from "react"
import { BsArrowLeftShort } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components"
import { MedalStar } from 'iconsax-react';
import ZSkel from "components/ZSkel";
import Slider from "react-slick";
import Link from "next/link";
import { formatContestDetailSlug } from "@/utils/helper";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                lineHeight: 0,
                background: '#FFFFFF',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px 0px 0px 8px',
                marginTop: 20
            }}
            onClick={onClick}
        ><p style={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: '#191919'
        }}>Next <FaArrowRight style={{ color: '#191919' }} className="ml-2" /></p> </div>
    );
}
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                lineHeight: 0,
                background: '#FFFFFF',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
                borderRadius: '0px 8px 8px 0px',
                padding: "22px 15px",
                zIndex: 10,
                width: 'fit-content',
                marginTop: -10
            }}
            onClick={onClick}
        >
            <p style={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: '#191919',
                marginTop: -30
            }}><BsArrowLeftShort className="text-xl" /> Prev</p>
        </div>
    );
}

export default function ContestEntries({ own = false }: { own?: boolean }) {
    const { token } = useAuth()
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchContestEntries = async () => {
            try {
                setLoading(true)
                const res = await getOwnContestApi(token)
                setList(res?.data)
                console.log("contest entries res:", res?.data)
                setLoading(false)
            } catch (err) {
                console.log("Err:", err)
                setLoading(false)
            }
        }
        fetchContestEntries()
    }, [token])

    const CreateYourSpotlight = {
        arrows: true,
        infinite: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1049,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
            {
                list?.length > 0 &&
                <Container>
                    <h2 className="profile-box-title txt-base flex items-center gap-3 mb-7">
                        <MedalStar className="mt-[2px]" /> Contest Entries
                    </h2>

                    {
                        loading ?
                            <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", padding: "10px 10px", gap: 20 }} >
                                {[1, 2, 3, 4, 5].map((i) => {
                                    return (
                                        <div key={i} style={{ width: 249, height: 339, position: 'relative', overflow: 'hidden' }}>
                                            <ZSkel />
                                        </div>
                                    );
                                })}
                            </div>
                            :
                            <>
                                <Slider {...CreateYourSpotlight}>
                                    {list.map((a, index) => {
                                        return (
                                            <SingleCardEvents className="flex-start mr-auto" key={index}>
                                                <Link href={`/contests/${formatContestDetailSlug(a?.contest_name, a?.contest_id)}?page=1`} passHref>
                                                    <img
                                                        src={a?.media_path_full}
                                                        alt="contest"
                                                        className="rounded cursor-pointer main-img"
                                                    />
                                                </Link>

                                                <p className="mt-2 font-semibold text-sm">{a?.contest_name}</p>
                                            </SingleCardEvents>
                                        )
                                    })}
                                </Slider>
                            </>

                    }
                </Container>
            }
        </>
    )
}

const Container = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  background: ${(p: any) => p.theme.pure};
  padding: 1em 2em 3em 2em;
  border-radius: 5px;

  .slick-track {
    margin-left: 0;
  }

  .kPqhqA .slick-next {
    right: 0;
  }

  .main-img {
    height: 300px;
    width: 450px;
    object-fit: cover;
  }
`;

const SingleCardEvents = styled.div`
  width: fit-content; 
  border-radius: 8px;
  margin-right: 10px;
  position: relative;
  width: fit-content !important;

.bin {
    background-color: ${p => p.theme.pure};
    width: fit-content;
    padding: 10px;
    border-radius: 100%;
    position: absolute;
    bottom: -5px;
    right: -5px;
    z-index: 12;
}

.bin:hover {
    color: #eb4444;
    transition: all 0.1s ease;
}
`;