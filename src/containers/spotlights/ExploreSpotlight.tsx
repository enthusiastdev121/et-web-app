import { useAuth } from 'context/AuthContext';
import { formatSpotlights } from 'network/apiFormatter/spotlights';
import { spotlightDataApi } from 'network/apis/spotlight';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { SpotlightItemD } from 'types/spotlight';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DisplaySlide, ImageAndAddMore, ImageUpload, SingleCardEvents } from 'containers/explore/Explore.styled';
import InstaStories from 'components/spotlights/InstaStories';
import AddSpotlightModal from './AddSpotlightModal';
import { useProfileStore } from 'context/ProfileStore';
import ExploreSpotlightSkel from './ExploreSpotlightSkel';
import Button from 'components/Button';
import Link from 'next/link';
import styled from 'styled-components';
import { Router, useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';

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
                borderRadius: '8px 0px 0px 8px'
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
        }}>More <FaArrowRight style={{ color: '#191919' }} className="ml-2" /></p> </div>
    );
}
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'none',
                lineHeight: 0,
                background: '#FFFFFF',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
                borderRadius: '0px 8px 8px 0px',
                padding: "22px 15px",
                zIndex: 10,
                width: 'fit-content'
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
                marginTop: -28
            }}><BsArrowLeftShort className="text-xl" /></p>
        </div>
    );
}
const ExploreSpotlight = () => {
    const LIMIT = 10;
    const [storiesDialog, setStoriesDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const { token } = useAuth();
    const [page, setPage] = useState(1);
    const [list, setList] = useState<SpotlightItemD[]>([]);
    const [total, setTotal] = useState(0);
    const [addSpotlightDialogue, setAddSpotlightDialogue] = useState(false)
    const [sortBy, setSortBy] = useState('')
    const {
        auth: { authenticated },
    } = useAuth();
    const { profile } = useProfileStore();
    const router = useRouter()

    const CreateYourSpotlight = {
        arrows: true,
        infinite: false,
        dots: false,
        slidesToShow: 4,
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

    const fetchList = useCallback(
        async (more = false) => {
            // if (!token) {
            //     return;
            // }
            try {
                setLoading(true);
                const res = await spotlightDataApi({
                    token,
                    page: page,
                    perPage: LIMIT,
                    sortBy: sortBy,
                });
                const data = res.data.map((i: any) => formatSpotlights(i));
                setTotal(Number(res.total));
                setList(data)
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log("Err", err);
            }
        }, [token, page]);

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return (
        <>
            {
                authenticated ?
                    loading ? <ExploreSpotlightSkel /> :
                        <>
                            <DisplaySlide className="bg-paper txt-base cursor-pointer">
                                <Slider {...CreateYourSpotlight}>
                                    {authenticated ? <SingleCardEvents>
                                        <ImageUpload style={{ margin: 'auto' }}>
                                            <img src={profile.pic} />
                                            <h2>Create your spotlight</h2>

                                            <div className="add cursor-pointer" onClick={() => router.push('/spotlights/add-spotlight')}>
                                                <FaPlus style={{ color: '#FFFFFF' }} />
                                            </div>
                                        </ImageUpload>
                                    </SingleCardEvents> : ''}

                                    {list.map((a, index) => {
                                        return (
                                            <SingleCardEvents key={index} onClick={() => { setStoriesDialog(true); setActiveIndex(index) }}>
                                                <ImageAndAddMore style={{ margin: 'auto' }}>
                                                    <img src={a.items[0].url === null ? '' : a.items[0].url} />
                                                    <h2>{a?.name}</h2>
                                                    <div className="person-profile">
                                                        <img src={a.pic === null ? './images/pro.png' : a.pic} />
                                                    </div>
                                                </ImageAndAddMore>
                                            </SingleCardEvents>
                                        )
                                    })}
                                    <div>
                                        <div className='flex items-center justify-center w-full h-[255px]'>
                                            <Link href="/spotlights">
                                                <a className="txt-primary -ml-10">View All</a>
                                            </Link>
                                        </div>
                                    </div>
                                </Slider>

                                <InstaStories open={storiesDialog} onClose={() => setStoriesDialog(false)} activeIndex={activeIndex} list={list}
                                    onView={(mediaId: any, spotlightId: any) => {
                                        setList(s => {
                                            return s.map((i) => {
                                                if (i.id === mediaId) {
                                                    const newArray = i.items.map((ia) => {
                                                        if (spotlightId === ia.id) {
                                                            return {
                                                                ...ia,
                                                                isView: false
                                                            }
                                                        } else {
                                                            return ia
                                                        }
                                                    })
                                                    return {
                                                        ...i,
                                                        items: newArray
                                                    }

                                                } else {
                                                    return i
                                                }
                                            })
                                        })
                                    }
                                    }>
                                </InstaStories>

                                <AddSpotlightModal open={addSpotlightDialogue} onClose={() => setAddSpotlightDialogue(false)} onUpdate={(e) => {
                                    // setList((s) => [...s])
                                    fetchList()
                                    setAddSpotlightDialogue(false)
                                }}></AddSpotlightModal>
                            </DisplaySlide>

                            <div className="flex justify-end mb-5">
                                <Link href="/spotlights" passHref>
                                    <Btn className="border px-5 py-2 rounded text-sm font-medium w-full text-center mx-2 mt-3 sm:w-fit">View all spotlights</Btn>
                                </Link>
                            </div>
                        </>

                    : ""
            }
        </>
    )
}

export default ExploreSpotlight;

const Btn = styled.a`
    border: 1px solid ${p => p.theme.primary};
    color: ${p => p.theme.primary};

    &:hover {
        color: #fff;
        background-color: ${p => p.theme.primary};
        transition: all 0.2s ease;
    }
`