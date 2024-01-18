import styled from "styled-components";
import { Container, P1 } from "./styles";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getFeaturedTalentApi } from "network/apis/featuredTalent";
import Link from "next/link";
import ZSkel from "components/ZSkel";



const FeatureTalent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {

            try {


                const res = await getFeaturedTalentApi({ page: 1, perPage: 50 });
                setData(res.data)
                setLoading(false)
                console.log("please", res.data)
            }
            catch (err) {

            }
        }

        getData();


    }, [])


    const topsettings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        // initialSlide: 0.5,
        slidesToShow: 6,
        slidesToScroll: 1,
        // variableWidth: true,
        infinite: true,
        // centerMode: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 767,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    const bottomsettings = {
        dots: false,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        rtl: true,
        // initialSlide: 4,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        // variableWidth: true,
        infinite: true,
        // centerMode: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

        ]
    };


    return (
        <>
            <Root className="md:my-24 my-12">
                {/* <Container> */}
                <div className="feedback-wrapper flex flex-col md:gap-20 gap-10">
                    <Container>
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="txt-secondary h2 text-center">Featured Talents
                            </h2>
                            <P1 className="max-w-[580px] text-center">Talents who are one step ahead of the game. As the competition of millions of talents that are grabbing the opportunity to showcase their talent in the big world of showbiz industry.
                            </P1>
                        </div>
                    </Container>
                    <Feedback className="flex flex-col gap-5 relative">



                        {loading ? (<Slider {...topsettings} className="SliderRoot-card">
                            {
                                [1, 2, 3, 4, 5, 6].map((i: any) => {
                                    return (
                                        <div className="feature-box w-full flex flex-col gap-8 p-2" key={i}>
                                            <div className="2xl:h-[300px] xl:h-[340px] lg:h-[250px] md:h-[230px] h-[200px] ">
                                                <div className="aspect-video relative h-full w-full rounded-[50px] ">
                                                    <ZSkel />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                        ) : (
                            <Slider {...topsettings} className="SliderRoot-card">
                                {
                                    [...data]?.slice(0, 25).filter((i: any) => i?.profile_picture_path !== "" && i?.profile_picture_path !== null).map((i: any) => {
                                        return (
                                            <div className="feature-box w-full   flex flex-col gap-8 p-2" key={i}>
                                                <div className="2xl:h-[300px] xl:h-[340px] lg:h-[250px] md:h-[230px] h-[200px]">
                                                    <Link href={`/${i?.talentlogin}`}>
                                                        <img className="rounded-[20px] m-auto w-full h-full object-cover" src={i?.profile_picture_path} alt={i?.fname} />
                                                    </Link>
                                                </div>
                                            </div>


                                        )
                                    })
                                }

                            </Slider>
                        )}


                        {
                            loading ? (
                                <Slider {...topsettings} className="SliderRoot-card">
                                    {
                                        [1, 2, 3, 4, 5, 6].map((i: any) => {
                                            return (
                                                <div className="feature-box w-full   flex flex-col gap-8 p-2" key={i}>
                                                    <div className="2xl:h-[300px] xl:h-[340px] lg:h-[250px] md:h-[230px] h-[200px]">
                                                        <div className="aspect-video relative h-full w-full rounded-[20px] ">
                                                            <ZSkel />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </Slider>

                            ) : (
                                <Slider {...bottomsettings} className="SliderRoot-card">
                                    {
                                        [...data]?.slice(26, 50).filter((i: any) => i?.profile_picture_path !== "" && i?.profile_picture_path !== null).map((i: any) => {
                                            return (
                                                <div className="feature-box w-full   flex flex-col gap-8 p-2" key={i}>
                                                    <div className="2xl:h-[300px] xl:h-[340px] lg:h-[250px] md:h-[230px] h-[200px]">
                                                        <Link href={`/${i?.talentlogin}`}>
                                                            <img className="rounded-[20px] m-auto w-full h-full object-cover" src={i?.profile_picture_path} alt={i?.fname} />
                                                        </Link>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            )
                        }

                        <div className="center-img h-[110%] md:block hidden">
                            <img className="h-full" src="/images/audition/feature/center.png" alt="audition" />
                        </div>
                    </Feedback>
                </div>
                {/* </Container> */}
            </Root>
        </>
    )
}

export default FeatureTalent;

const Root = styled.div`
    max-width: 100%;
`;

const Feedback = styled.div`
    .feature-box{
        background-color: #fff;
        border: 1px solid #EAEAEA;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.09);
        border-radius: 20px;
    }
    .slick-track{
        display: flex !important;
        gap: 1.8rem;
        @media screen and (max-width: 767px) {
            gap: 1rem;
        }
    }
    .center-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
