import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";


export default function MomMoments() {


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
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    return (
        <HireSection>
            <Container>
                <div className="md:grid md:grid-cols-2 gap-4 hiresection">
                    <div className="looking-hire 2xl:col-span-1 col-span-1 pr-4 feature_content">
                        <h3>Mom Moments</h3>
                        <p>Being a Mom can be wonderful, scary, frustrating, or overwhelming. Share the most memorable moments!</p>
                        <button>Submit a Photo</button>
                    </div>
                    <div className="testimonial relative 2xl:col-span-1 xl:col-span-1 xl:mt-0 mt-12">

                        <Slider {...settings} className="slider-card">
                            <div className="single_testimonial">
                                <p> &quot; My daughter who is almost two and working on potty training, applauded me at restaurant shouting &apos; yay mommy you went potty on the potty! &quot;
                                </p>
                                <img src="/images/anna.png" alt="Profile Picture" />
                                <h4>Ryan Medicine</h4>
                            </div>
                            <div className="single_testimonial">
                                <p> &quot; My daughter who is almost two and working on potty training, applauded me at restaurant shouting &apos; yay mommy you went potty on the potty! &quot;
                                </p>
                                <img src="/images/anna.png" alt="Profile Picture" />
                                <h4>Ryan Medicine</h4>
                            </div>
                            <div className="single_testimonial">
                                <p> &quot; My daughter who is almost two and working on potty training, applauded me at restaurant shouting &apos; yay mommy you went potty on the potty! &quot;
                                </p>
                                <img src="/images/anna.png" alt="Profile Picture" />
                                <h4>Ryan Medicine</h4>
                            </div>
                            <div className="single_testimonial">
                                <p> &quot; My daughter who is almost two and working on potty training, applauded me at restaurant shouting &apos; yay mommy you went potty on the potty! &quot;
                                </p>
                                <img src="/images/anna.png" alt="Profile Picture" />
                                <h4>Ryan Medicine</h4>
                            </div>

                        </Slider>
                    </div>
                </div>

            </Container>
        </HireSection >
    );
}


const HireSection = styled.div`

  

    @media (min-width:768px){
    .slider-card{
        .slick-slide{
            margin-right: 30px;
        }
      }
    }
    .slick-track{
        display:flex !important;
    }

@media (min-width:768px){
    .slick-prev{
    left:-30px;
    top:50% !important;
    &:before{
        display:none;
    }
    @media (max-width: 768px) {
        left:-20px;
    }
}
.slick-next{
    right:-30px;
    top:50% !important;
    &:before{
        display:none;
    }
    @media (max-width: 768px) {
        right:-20px;
    }

}

}
.hiresection{
   .looking-hire{
    padding-top:100px;
    @media (max-width:1680px){
        padding-top:40px;   
       }
       h2{
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
         color: ${p => p.theme.base};

        @media (max-width:1680px){
            font-size: 32px;
    
           }
           @media (max-width:786px){
            font-size: 24px;
           }
    

       }
       h6{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
         color: ${p => p.theme.base};
        margin-top:20px;
        line-height:32px;
        max-width:550px;

        @media (max-width:1340px){
            max-width:100%;
    
           }

           @media (max-width:786px){
            font-size: 14px;
           }
       }
       @media (max-width:1680px){
        font-size: 14px;
       }
   } 
.testimonial{
    .single_testimonial{
        padding:20px 30px;
        background: #FFFFFF;
        box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.02), 0px 7px 8px 2px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        margin:30px 10px;
        width:300px !important;
        text-align:center;

        @media (max-width:768px){
            /* min-width:100% !important ; */
            padding:30px 10px 30px 10px ;
           }
        img{
            margin:0 auto;
        }
        h5{
            max-width:400px;
            text-align:center;
            margin:0 auto;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: ${p => p.theme.base};
            margin-top:10px;
            @media (max-width:786px){
                font-size: 16px;
               }
        }
        h6{
            max-width:400px;
            text-align:center;
            margin:0 auto;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: rgba(60, 60, 67, 0.6);
            margin-top:10px;
            @media (max-width:786px){
                font-size: 14px;
               }
        }
        p{
            max-width:400px;
            text-align:center;
            margin:0 auto;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: ${p => p.theme.base};
            margin: 18px 0px;

            @media (max-width:786px){
                font-size: 14px;
               }
        }
    }
    @media (max-width:450px){
    width: 92%;
    margin: auto;
    }
   }
}
.feature_content{
        /* max-width: 60%; */
        margin:auto;
        @media (max-width:786px){
            max-width: 100%;
               }
        h3{
            font-style: normal;
            font-weight: 700;
            font-size: 50px;
             color: ${p => p.theme.base};
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
            font-size: 20px;
             color: ${p => p.theme.base};
            margin-top:20px;
            line-height:32px;
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
`;
