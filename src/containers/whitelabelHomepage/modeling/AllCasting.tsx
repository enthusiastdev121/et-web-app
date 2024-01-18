import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";


export default function AllCasting() {


    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: "50px",
                    height: "50px",
                    zIndex: 99,
                }}
                onClick={onClick}>
                <img src="/images/trans-arrow.png" alt="" className="mx-auto" />
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: "50px",
                    height: "50px",
                    zIndex: "99",
                    transform: "rotate(180deg)"
                }}
                onClick={onClick}>
                <img src="/images/trans-arrow.png" alt="" className="mx-auto" />
            </div>
        );
    }

    const settings = {
        dots: false,
        initialSlide: 0.5,
        slidesToScroll: 1,
        infinite: true,
        slidesToShow: 9.5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 7.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    return (


        <AllCastSection className="px-5">
            <Container className="relative">
                <div className="layer-audition"><img src="/images/modeling-shadow.png" alt="" /></div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="main-title">All castings by category</h3>
                    <Slider {...settings}>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-acting.png" alt="" className="main-image" />
                            <h6>Acting</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-modeling.png" alt="" className="main-image" />
                            <h6>Modeling</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-extras.png" alt="" className="main-image" />
                            <h6>Extras</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-music.png" alt="" className="main-image" />
                            <h6>Musician</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-dance.png" alt="" className="main-image" />
                            <h6>Dancing</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-tv.png" alt="" className="main-image" />
                            <h6>TV &
                                Reality</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-filmstage.png" alt="" className="main-image" />
                            <h6>Film & Stage
                                Crew</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-presenter.png" alt="" className="main-image" />
                            <h6>Presenter</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-influencer.png" alt="" className="main-image" />
                            <h6>Influencer</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-photography.png" alt="" className="main-image" />
                            <h6>Acting</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-acting.png" alt="" className="main-image" />
                            <h6>Acting</h6>
                        </div>
                        <div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-acting.png" alt="" className="main-image" />
                            <h6>Acting</h6>
                        </div><div className="section-service">
                            <div className="bg-layer"></div>
                            <img src="/images/home-acting.png" alt="" className="main-image" />
                            <h6>Acting</h6>
                        </div>

                    </Slider>
                </motion.div>
            </Container>
        </AllCastSection>

    );
}

const AllCastSection = styled.div`
padding-top:20px;
padding-bottom:45px;

.layer-audition{
    display:none;
}

@media (min-width:768px){
    .layer-audition{
        position:absolute;
        right:0px;
        bottom:8px;
        z-index:1;
        height:146.25px;
        display:block;

        img{
            height:100%;
        }

    }
}

  .slick-prev {
  
      &:before{
        opacity:0 !important;
    }
    }

.main-title{
    color: #fff;
    opacity:0.6;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-bottom:20px;
}


.section-service{
    width: 146.25px !important;
    height: 146.25px;
    position:relative;

    .bg-layer{
        background: linear-gradient(180deg, rgba(17, 0, 0, 0) 0%, #000000 100%);
        width:100%;
        height:100%;
        position:absolute;
        border-radius:8px;

    }

    .main-image{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:8px;

    }

    h6{
        color:#fff;
        position:absolute;
        bottom:10px;
        width:100%;
        text-align:center;
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        color: #FFFFFF;
    }

}

`;