import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import styled from "styled-components";
import { Container } from "./styles";
import { motion } from "framer-motion";

export default function UpcomingAudition() {

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

                    transform: "rotate(180deg)"
                }}
                onClick={onClick}>
                <img src="/images/arrow-narrow-right-new.png" alt="" className="mx-auto" />
            </div>
        );
    }

    function SampleNextArrowtwo(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    zIndex: 99,

                }}
                onClick={onClick}>
                <img src="/images/cate-arrow.png" alt="" className="mx-auto checkbox-slider" />
            </div>
        );
    }

    function SamplePrevArrowtwo(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,

                    // transform: "rotate(180deg)"
                }}
                onClick={onClick}>
                <img src="/images/cate-arrow2.png" alt="" className="mx-auto" />
            </div>
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        initialSlide: 0.5,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    initialSlide: 0.2,
                    slidesToShow: 1.8,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    initialSlide: 0.2,
                    slidesToShow: 1.8,
                    slidesToScroll: 1,
                }
            },



        ]
    };

    const settingstwo = {
        dots: false,
        arrows: true,
        initialSlide: 0.5,
        slidesToShow: 7.5,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrowtwo />,
        prevArrow: <SamplePrevArrowtwo />,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    initialSlide: 0.5,
                    slidesToShow: 5.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    initialSlide: 0.5,
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    initialSlide: 0.5,
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    initialSlide: 0.5,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    return (
        <UpcomingSection>
            <Container>
                <motion.div className="xl:grid grid-cols-4 gap-4 upcoming-section px-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="upcoming-title">
                        <h6>Auditions & Jobs</h6>
                        <h4>Ongoing <span>Featured</span> Jobs for today</h4>
                    </div>
                    <div className="banner-upcoming relative col-span-3">
                        <div className="layer-audition"><img src="/images/audition-job-layer.png" alt="" /></div>
                        <Slider {...settings} className="slider-card">
                            <div className="single-card">
                                <h6>"111 Shrek the Musical" Auditions in WI</h6>
                                <div className="location-rate">
                                    <div className="location">
                                        <img src="/images/location.png" alt="" />
                                        <h5>Cleveland, OH</h5>
                                    </div>
                                    <div className="rate">
                                        <div className="dot"></div>
                                        <h5>$5,000 Rate</h5>
                                    </div>
                                </div>
                                <div className="deadline">
                                    <p>Ending In: </p>
                                    <h6>24d 42h 16m 6s</h6>
                                </div>
                            </div>


                            <div className="single-card">
                                <h6>"Shrek the Musical" Auditions in WI</h6>
                                <div className="location-rate">
                                    <div className="location">
                                        <img src="/images/location.png" alt="" />
                                        <h5>Cleveland, OH</h5>
                                    </div>
                                    <div className="rate">
                                        <div className="dot"></div>
                                        <h5>$5,000 Rate</h5>
                                    </div>
                                </div>
                                <div className="deadline">
                                    <p>Ending In: </p>
                                    <h6>24d 42h 16m 6s</h6>
                                </div>
                            </div>


                            <div className="single-card">
                                <h6>"Shrek the Musical" Auditions in WI</h6>
                                <div className="location-rate">
                                    <div className="location">
                                        <img src="/images/location.png" alt="" />
                                        <h5>Cleveland, OH</h5>
                                    </div>
                                    <div className="rate">
                                        <div className="dot"></div>
                                        <h5>$5,000 Rate</h5>
                                    </div>
                                </div>
                                <div className="deadline">
                                    <p>Ending In: </p>
                                    <h6>24d 42h 16m 6s</h6>
                                </div>
                            </div>


                            <div className="single-card">
                                <h6>"Shrek the Musical" Auditions in WI</h6>
                                <div className="location-rate">
                                    <div className="location">
                                        <img src="/images/location.png" alt="" />
                                        <h5>Cleveland, OH</h5>
                                    </div>
                                    <div className="rate">
                                        <div className="dot"></div>
                                        <h5>$5,000 Rate</h5>
                                    </div>
                                </div>
                                <div className="deadline">
                                    <p>Ending In: </p>
                                    <h6>24d 42h 16m 6s</h6>
                                </div>
                            </div>


                            <div className="single-card">
                                <h6>"Shrek the Musical" Auditions in WI</h6>
                                <div className="location-rate">
                                    <div className="location">
                                        <img src="/images/location.png" alt="" />
                                        <h5>Cleveland, OH</h5>
                                    </div>
                                    <div className="rate">
                                        <div className="dot"></div>
                                        <h5>$5,000 Rate</h5>
                                    </div>
                                </div>
                                <div className="deadline">
                                    <p>Ending In: </p>
                                    <h6>24d 42h 16m 6s</h6>
                                </div>
                            </div>
                        </Slider>


                        <div className="checkbox-custom">
                            <Slider  {...settingstwo}>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Featured</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Acting</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Extras</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Modeling</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Influencer</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Presenter</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Music</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">Dance</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark">TV & Reality</span>
                                    </label>
                                </div>

                            </Slider>
                        </div>
                    </div>


                </motion.div>
            </Container>
        </UpcomingSection>
    );
}

const UpcomingSection = styled.div`
  background: linear-gradient(180deg, rgba(250, 252, 255, 0) 0%, #ECF5FF 100%);
  padding:70px 0;

  .slider-card{
    .slick-slide{
        margin-right: 30px;
    }

    .slick-track{
        display:flex !important;
    }
  }

  @media (max-width:1340px){
    padding: 0 0 70px 0;
    overflow:hidden;
   }

    .checkbox-slider{
        background:#eef6ff;
        border-radius:50%;
    }



.upcoming-section{
    .upcoming-title{
        max-width:295px;
        padding-top:25px;

        @media (max-width:1340px){
            max-width:100%;
            margin-bottom:20px;
        }

        h6{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color: rgba(60, 60, 67, 0.6);

            @media (max-width:1680px){
                font-size: 16px;
               }
        }
        h4{
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
             color: ${p => p.theme.base};
            margin-top:10px;

            @media (max-width:1680px){
                font-size: 24px;
               }
            span{
                color:#0770B7;
            }
        }
    }

    .banner-upcoming{

     .layer-audition{
         position:absolute;
         right:0px;
         top:0;
         z-index:1;
         height:100%;

         img{
             height:100%;
         }

     }

        .slick-next{
            &:before{
                display:none;
            }
        }

        .single-card{
            background: #FFFFFF;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding:50px 30px;
            margin-right:30px;
            min-width:420px ;

            @media (max-width:768px){
                min-width:320px !important ;
                
        
               }

            h6{
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                 color: ${p => p.theme.base};
            }

            .location-rate{
                margin-top:15px;
                display:flex;
                align-items:center;

                .location{
                    display:flex;
                    align-items:center;

                    h5{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        color: #0770B7;
                        margin-left:5px;
                    }
                }

                .rate{
                    display:flex;
                    align-items:center;
                    margin-left:10px;
                    .dot{
                        width:6px;
                        height:6px;
                        background- color: ${p => p.theme.base};
                        border-radius:50%;
                    }
                    h5{
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                         color: ${p => p.theme.base};
                        margin-left:5px;

                    }
                }

            }

            .deadline{
                display:flex;
                align-items:center;
                margin-top:15px;

                p{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    color: rgba(60, 60, 67, 0.6);
                }

                h6{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                     color: ${p => p.theme.base};
                    margin-left:5px;
                }
            }
        }
    }

    .checkbox-custom{
        margin-top:30px;

        .slick-track {

      


        }

    }
    

}

`;
