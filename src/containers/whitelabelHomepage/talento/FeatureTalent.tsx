
import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getFeaturedTalentApi } from "network/apis/featuredTalent";
import { FeaturedTalentContainer } from "../exploretalent/FeaturedTalent";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <Next>
            <div
                onClick={onClick}
                style={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    background: "#A1A1AA",
                    height: 50,
                    width: 50,
                    borderRadius: "100%",
                    boxShadow:
                        " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                }}
            >
                <FaArrowRight style={{ color: "#fff" }} />
            </div>
        </Next>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            style={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background: "#A1A1AA",
                height: 50,
                width: 50,
                borderRadius: "100%",
                boxShadow:
                    " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                top: -30,
                right: 70,
                transform: "translateY(-50%)",
                zIndex: 10,
                cursor: "pointer",
            }}
        >
            <FaArrowLeft style={{ color: "#fff" }} />
        </div>
    );
}

export const CardCarousel = ({ children }: any) => {


    const CreateCard = {
        arrows: true,
        infinite: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        draggable: true,
    };

    return (
        <DisplaySlide>
            <Slider {...CreateCard}>{children}</Slider>
        </DisplaySlide>
    );
};

export default function FeatureTalent() {

    const [featuredData, setFeaturedData] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchFeaturedData = async () => {
        try {

            const res = await getFeaturedTalentApi();
            setFeaturedData(res.data)
            console.log(res.data, 'talenntooto')
        }
        catch (err) {

        }

    }

    useEffect(() => {
        fetchFeaturedData()
    }, [])



    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: "50px",
                    height: "50px",
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
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (

        <FeatureSectionBg>
            <FeatureSection>
                <Container>
                    <div className="xl:grid grid-cols-2 gap-4 featuresection px-5">
                        <div className="feature-content">
                            <img src="/images/talento/star.png" alt="" />
                            <h3>Talento destacado</h3>
                            <p>Talentos que están un paso por delante del juego. Como la competencia de millones de talentos que aprovechan la oportunidad de mostrar su talento en el gran mundo de la industria del espectáculo.</p>
                            <button>aprende más</button>
                        </div>
                        {/*<div className="feature-gallary xl:mt-0 mt-20">*/}


                        <FeaturedTalentContainer>
                            <CardCarousel>
                                {featuredData?.filter(
                                    (i: any) =>
                                        i?.profile_picture_path !== "" && i?.profile_picture_path !== null
                                )?.map((i: any) => (
                                    <div key={i}>
                                        <Link href={`/${i?.talentlogin}`}>
                                            <a className="img-container cursor-pointer">
                                                <Image layout="fill" src={i?.profile_picture_path} alt={i?.fname} />
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                            </CardCarousel>
                        </FeaturedTalentContainer>
                        {/* <Slider {...settings}>
                                <div>
                                    <div className="flex xl:justify-between justify-center inner-slide">
                                        <div>
                                            <div className="flex justify-between">
                                                <img src="/images/test-one.png" alt="" />
                                                <img src="/images/test-two.png" alt="" />
                                                <img src="/images/test-three.png" alt="" />
                                            </div>
                                            <div className="flex justify-between">
                                                <img src="/images/test-four.png" alt="" />
                                                <img src="/images/test-five.png" alt="" />
                                                <img src="/images/test-six.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between  inner-slide">
                                        <div>
                                            <div className="flex justify-between">
                                                <img src="/images/test-three.png" alt="" />
                                                <img src="/images/test-two.png" alt="" />
                                                <img src="/images/test-one.png" alt="" />
                                            </div>
                                            <div className="flex justify-between">
                                                <img src="/images/test-six.png" alt="" />
                                                <img src="/images/test-five.png" alt="" />
                                                <img src="/images/test-four.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider> */}
                        {/* </div> */}
                    </div>
                </Container>
            </FeatureSection>
        </FeatureSectionBg>
    )
}

const FeatureSectionBg = styled.div`
    background-color:#000000;
    height:850px;

    @media (max-width:1340px){
        height:auto;

       }
`;

const FeatureSection = styled.div`
background-image:url("/images/talento/test-bg.png");
background-size:cover;
background-repeat:no-repeat;
background-position:center;
height:700px;

@media (max-width:1340px){
    height:auto;

   }


@media (min-width:768px) {

.slick-prev{
    left:initial !important;
    right:90px;
    top:-60px !important;

    &:before{
        display:none;
    }
}

.slick-next{
    left:initial !important;
    right:40px  !important;
    top:-35px !important;

    &:before{
        display:none;
    }
}
}

.featuresection{
    padding-top:150px;

    .feature-content{
        img{
        }
        h3{
            font-style: normal;
            font-weight: 700;
            font-size: 50px;
            color: #fff;
            font-family: "RobotoSlab-Regular";
            @media (max-width:1680px){
                font-size: 40px;
               }

               @media (max-width:786px){
                font-size: 30px;
               }
        }
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #fff;
            margin-top:20px;
            font-family: "RobotoSlab-Regular";
            line-height:32px;
            @media (max-width:1680px){
                font-size: 16px;
               }
        }

        button{
            border: 1px solid #fff;
            filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1));
            border-radius: 8px;
            margin-top:50px;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            padding:12px 24px;
            color: #fff;
            font-family: "RobotoSlab-Regular";
        }
    }

    .feature-gallary{
        .inner-slide{
            img{
                margin-left:30px;
                margin-bottom:30px;
                width: 200px;
                height: 300px;
                object-fit:cover;

                @media (max-width:1680px){
                    margin-left:10px;
                    margin-bottom:10px;
                    width: 160px;
                    height: 230px;
                }
            }
        }
    }
}

`;


const Next = styled.div`
  position: absolute;
  right: 0px;
  top: -55px;
`;


export const DisplaySlide = styled.div`
  .slick-slide,
  .slick-active,
  .slick-current {
    width: 198px !important;
    margin: 5px 10px 0 0;
  }

  .slick-track {
    // width: 672px !important;
    // max-width: 672px !important;
  }

  .slick-next {
    right: 5px;
    width: 70px;
    height: 45px;
    padding: 16px 10px;
    display: flex !important;
    justify-content: flex-end;
    top: 150px;
  }

  .slick-next:before {
    content: "";
    font-size: 0px;
    width: 70px;
    line-height: 0 !important;
    padding: 16px 10px;
  }

  .slick-prev {
    display: none;
  }
`;