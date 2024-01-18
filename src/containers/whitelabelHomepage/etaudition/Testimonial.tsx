import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";


export default function Testimonial() {

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
        <TestimonialSection className="px-5">
            <Container>
                <Slider {...settings}>
                    <div>
                        <div className="testimonial-section">
                            <div className="hexagon">
                                <img src="/images/home-testimonial-1.png" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <img src="/images/quote-audition.png" alt="" />
                                <h3>I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin' It Real. I also have auditions coming up very soon!!</h3>
                                <div className="flex items-center mt-4">
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                </div>
                                <h5>Jesseal • Actor • <span>Los Angeles, CA</span></h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-section">
                            <div className="hexagon">
                                <img src="/images/home-testimonial-2.png" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <img src="/images/quote-audition.png" alt="" />
                                <h3>I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin' It Real. I also have auditions coming up very soon!!</h3>
                                <div className="flex items-center mt-4">
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                </div>
                                <h5>Jesseal • Actor • <span>Los Angeles, CA</span></h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-section">
                            <div className="hexagon">
                                <img src="/images/home-testimonial-3.png" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <img src="/images/quote-audition.png" alt="" />
                                <h3>I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin' It Real. I also have auditions coming up very soon!!</h3>
                                <div className="flex items-center mt-4">
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                    <img src="/images/star 3.png" alt="" className="mr-2" />
                                </div>
                                <h5>Jesseal • Actor • <span>Los Angeles, CA</span></h5>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </TestimonialSection>
    );
}

const TestimonialSection = styled.div`
background-color:#000000;
padding-top:70px;
padding-bottom:70px;

.slick-prev{



    &:before{
        display:none;
    }
    &:after{
        display:none;
    }
}



.testimonial-section{
    max-width:1200px;
    margin:0 auto;
    display:flex;
    align-items:center;


    @media (max-width:991px){
        display:grid;

       }

    .hexagon{
        img{
            transform:rotate(-60deg);
            @media (max-width:1050px){
                margin:0 auto;
                width:50%;
            }
        }
    }
    .testimonial-content{
        padding-left:45px;
        img{

        }

        h3{
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            color: #FFFFFF;
            max-width:769px;
            margin-top:15px;
            @media (max-width:1680px){
                font-size: 22px;
               }

               @media (max-width:786px){
                font-size: 18px;
               }
        }

        h5{
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #FFFFFF;
            margin-top:25px;
            @media (max-width:1680px){
                font-size: 17px;
               }

            span{
                color: rgba(255, 255, 255, 0.6);
            }
        }
    }
}

`;
