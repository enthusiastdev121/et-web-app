import styled from "styled-components";
import Slider from "react-slick";
import { Container } from "./styles";
import Link from "next/link";

const BRANDS = [
    {
        id: 1,
        src: "/images/audition/brand-m.png",
        alt: "brand",
    },
    {
        id: 2,
        src: "/images/audition/elite.png",
        alt: "elite",
    },
    {
        id: 3,
        src: "/images/audition/brand-3.png",
        alt: "brand",
    },
    {
        id: 4,
        src: "/images/audition/top-model.png",
        alt: "top-model",
    },
    {
        id: 5,
        src: "/images/audition/disnep.png",
        alt: "disnep",
    },
    {
        id: 6,
        src: "/images/audition/disnep.png",
        alt: "disnep",
    },
    {
        id: 7,
        src: "/images/audition/top-model.png",
        alt: "top-model",
    },
    {
        id: 8,
        src: "/images/audition/elite.png",
        alt: "elite",
    },
    {
        id: 9,
        src: "/images/audition/brand-x.png",
        alt: "brand",
    },
    {
        id: 10,
        src: "/images/audition/itv.png",
        alt: "itv",
    },
]

const SLIDES = [
    {
        id: 1,
        src: "/images/audition/slide-1.png",
        alt: "Dancing",
        text: "Dancing",
    },
    {
        id: 2,
        src: "/images/audition/slide-2.png",
        alt: "Musician",
        text: "Musician",
    },
    {
        id: 3,
        src: "/images/audition/slide-3.png",
        alt: "Influencer",
        text: "Influencer",
    },
    {
        id: 4,
        src: "/images/audition/slide-4.png",
        alt: "TV & Reality",
        text: "TV & Reality",
    },
    {
        id: 5,
        src: "/images/audition/slide-1.png",
        alt: "Dancing",
        text: "Dancing",
    },
    {
        id: 6,
        src: "/images/audition/slide-2.png",
        alt: "Musician",
        text: "Musician",
    },
    {
        id: 7,
        src: "/images/audition/slide-3.png",
        alt: "Influencer",
        text: "Influencer",
    },
    {
        id: 8,
        src: "/images/audition/slide-4.png",
        alt: "TV & Reality",
        text: "TV & Reality",
    },
]

const Brands = () => {

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className="next-arrow arrow"
                style={{
                    // ...style,
                    width: "50px",
                    height: "50px",
                }}
                onClick={onClick}>
                <img src="/images/audition/next-arrow.svg" alt="" className="mx-auto" />
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className='prev-arrow arrow'
                style={{
                    // ...style,
                    width: "50px",
                    height: "50px",
                    // zIndex: "99",
                    // transform: "rotate(180deg)"
                }}
                onClick={onClick}>
                <img src="/images/audition/prev-arrow.svg" alt="" className="mx-auto" />
            </div>
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 100,
        initialSlide: 0.5,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 4,
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

    // const settings = {
    //     dots: false,
    //     initialSlide: 0.5,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     slidesToShow: 9.5,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     responsive: [
    //         {
    //             breakpoint: 1680,
    //             settings: {
    //                 slidesToShow: 7.5,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 1400,
    //             settings: {
    //                 slidesToShow: 5.5,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 1050,
    //             settings: {
    //                 slidesToShow: 4.5,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 850,
    //             settings: {
    //                 slidesToShow: 3.5,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 630,
    //             settings: {
    //                 slidesToShow: 2.5,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 500,
    //             settings: {
    //                 slidesToShow: 1.5,
    //                 slidesToScroll: 1,
    //             }
    //         },

    //     ]
    // };


    return (
        <>
            <Root className="bg-secondary">
                <Container>
                    <SliderRoot>
                        <Slider {...settings} className="SliderRoot-card">

                            {
                                SLIDES.map((elm: any, ind: number) => {
                                    return (
                                        <Link href='auditions/all-jobs'>
                                            <a >
                                                <div className={`single-testimonial ${ind % 2 ? "" : "relative top-14"}`} key={elm.id}>
                                                    <img className="slide-img" src={elm.src} alt={elm.alt} />
                                                    <div className="slide-content w-[60%] pl-4 pb-4">
                                                        <div className="text-white flex items-center gap-2">
                                                            <div>{ind + 1}</div>
                                                            <div className="underline"></div>
                                                        </div>
                                                        <div className="text-white">{elm.text}</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                })
                            }

                        </Slider>
                        <div className="m-auto text-center md:pt-10 pt-16">
                            <Link href='auditions/all-jobs'>
                                <button className="yellow-btn slider-btn txt-secondary text-lg">View All</button>
                            </Link>
                        </div>
                    </SliderRoot>
                    <BrandsRoot className="md:mt-0 -mt-20">
                        <h3 className="text-white text-center pb-10 h3">We've helped 1,000's of brands such as
                        </h3>
                        <div className="grid md:grid-cols-5 grid-cols-3 brands">
                            {
                                BRANDS.map((elm: any) => {
                                    return (
                                        <div className="brand" key={elm.id}>
                                            <img src={elm.src} alt={elm.alt} />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </BrandsRoot>
                </Container>
            </Root>
        </>
    )
}

export default Brands;

const Root = styled.div`
    padding-bottom: 5rem;
    margin-top: 15rem;
    @media screen and (max-width: 767px) {
            padding-bottom: 3rem;
            margin-top: 11rem;
        }
`;

const SliderRoot = styled.div`
    position: relative;
    top: -120px;
    .slider-btn {
        padding: 0.6rem 3.5rem;
        font-weight: 600;
    }
.prev-arrow, .next-arrow {
    position: absolute;
    left: 0;
    bottom: -2rem;
    cursor: pointer;
}
.next-arrow {
    margin-left: 4rem;
}
 .slick-track{
        display:flex !important;
        /* gap: 1rem; */
    }
    .slick-prev:before, .slick-next:before {
        display: none;
    }
    .slick-list {
        padding-bottom: 8rem;
        @media screen and (max-width: 767px) {
            padding-bottom: 6rem;
        }
    }
     
      .single-testimonial{
       /* margin: 0 1rem; */
       position: relative;
       .slide-content{
        position: absolute;
        bottom: 0;
        left: 0;
        .underline {
            background-color: #fff;
            width: 100%;
            height: 1px;
        }
       }
       .slide-img {
            max-width: 94%;
            max-height: 380px;
            margin: auto;
        }
      }
`;

const BrandsRoot = styled.div`
   
    .brands {
        /* border: 1px solid #ffffffc6; */
        .brand {
            border: 1px solid #ffffffc6;
            display: flex;
            align-items: center;
            justify-content: center;
            border-collapse: collapse;
            padding: 1rem;
            margin-top: -1px;
            margin-left: -1px;
        }
    }
`;
