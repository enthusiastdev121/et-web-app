
import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";

export default function FeatureTalent() {


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
                            <img src="/images/modeling-images/star.png" alt="" />
                            <h3>Featured Talents</h3>
                            <p>Talents who are one step ahead of the game. As the competition of millions of talents that are grabbing the opportunity to showcase their talent in the big world of showbiz industry.</p>
                            <button>Learn more</button>
                        </div>
                        <div className="feature-gallary xl:mt-0 mt-20">
                            <Slider {...settings}>
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
                            </Slider>
                        </div>
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
background-image:url("/images/modeling-bg-test.png");
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
            line-height:32px;
            @media (max-width:1680px){
                font-size: 16px;
               }
        }

        button{
            border: 1px solid #0CCD85;
            filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1));
            border-radius: 8px;
            margin-top:50px;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            padding:12px 24px;
            color: #0CCD85;
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