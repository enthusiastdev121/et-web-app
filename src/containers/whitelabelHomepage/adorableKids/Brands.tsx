import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Brands() {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    return (
        <BrandSection>
            <Container className="main_container">
                <motion.div className="lg:grid grid-cols-4 gap-4 our-brands"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className="2xl:col-span-1 col-span-2">
                        <div className="our-brand-title">
                            <p>Our talents have been featured on</p>
                        </div>
                    </div>
                    <div className="2xl:col-span-3 col-span-2">
                        <Slider {...settings}>
                            <div>
                                <img src="/images/disney-1.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/endemol-1.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/mtv-1.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/xfactor.png" alt="" />
                            </div>

                            <div>
                                <img src="/images/utv.png" alt="" />
                            </div>

                            <div>
                                <img src="/images/thevoice.png" alt="" />
                            </div>

                            <div>
                                <img src="/images/topmodel.png" alt="" />
                            </div>

                            <div>
                                <img src="/images/elitr.png" alt="" />
                            </div>

                            <div>
                                <img src="/images/elitr.png" alt="" />
                            </div>


                        </Slider>
                    </div>
                </motion.div>

            </Container>
        </BrandSection >
    );
}


const BrandSection = styled.div`
.main_container{
   @media (max-width:450px){
    width:80%;
   }
}
.our-brands{
    max-width:1400px;
    line-height:67px;
    margin-top:65px !important;
    margin:0 auto;
    margin-bottom:40px !important;
    
    p{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: ${p => p.theme.base};
        line-height: initial;
        @media (max-width:450px){
            font-size: 20px;
            
        }
    }
}

`;
