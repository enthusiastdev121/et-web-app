
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
                <img src="/images/arrow-narrow-right-new.png" alt="" className="mx-auto" />
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
                    // transform: "rotate(180deg)"
                }}
                onClick={onClick}>
                <img src="/images/arrow-narrow-left-new.png" alt="" className="mx-auto" />
            </div>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    initialSlide: 1,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    initialSlide: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <FeatureSectionBg>
            <FeatureSection>
                <Container>
                    <div className="parent__class featuresection px-5">
                        <div className="feature_content">
                            <h3>Featured Talents</h3>
                            <p>Talents who are one step ahead of the game. As the competition of millions of talents that are grabbing the opportunity to showcase their talent in the big world of showbiz industry.</p>
                            <button>Submit a Photo</button>
                        </div>
                        <div className="feature__class">
                            <Slider {...settings} className="slider-card">
                                <div className="single_image"><img src="/images/feature_talent_child1.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child2.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child3.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child1.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child2.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child3.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child1.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child2.png" alt="" /></div>
                                <div className="single_image"><img src="/images/feature_talent_child3.png" alt="" /></div>
                            </Slider>
                        </div>
                    </div>
                </Container>
            </FeatureSection>
        </FeatureSectionBg>
    )
}

const FeatureSectionBg = styled.div`
padding:30px 0px;
.parent__class {
    display: flex;
}
@media (max-width:1024px){
    .parent__class {
    flex-direction:column;
}
}
`
const FeatureSection = styled.div`
.single_image img{
    margin:auto;
    padding: 10px;
    @media (max-width:1024px){
    margin-top: 50px;
}
}

@media (min-width:768px) {
.slick-prev{
    top:50% !important;
    &:before{
        display:none;
    }
}
.slick-next{
    top:50% !important;

    &:before{
        display:none;
    }
}
}
.featuresection{
    padding-top:54px;
    .feature_content{
        margin: 0px 30px 0px 0px;
        width:34%;
        @media (max-width:1024px){
            width: 100%;
        }
        h3{
            font-style: normal;
            font-weight: 700;
            font-size: 50px;
            width: 440px;
            color: ${p => p.theme.base};
            @media (max-width:1680px){
                font-size: 40px;
               }
            @media (max-width:786px){
                font-size: 30px;
               }
            @media (max-width:450px){
                width: unset;
            }
        }
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
             color: ${p => p.theme.base};
            margin-top:20px;
            line-height:32px;
            @media (max-width:1680px){
                font-size: 16px;
               }
        }
        button{
           
            border-radius: 4px;
            margin-top:36px;
            
            font-weight: 700;
            font-size: 18px;
            padding:12px 24px;
            color: #fff;
            background:${p => p.theme.primary}
        }
    }
    .feature__class {
        
            width: 610px !important;
            margin: auto;
        @media (max-width:768px){
            width:auto !important;
            margin: unset;
        }
    }
    @media (max-width:1024px){
        .feature__class{
            width: auto;
        }
    }
    
}

`;
