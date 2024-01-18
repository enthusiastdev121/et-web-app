import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";


export default function LookingHire() {


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
        arrows: true,
        initialSlide: 0.5,
        slidesToShow: 1.5,
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
                <div className="xl:grid 2xl:grid-cols-2 xl:grid-cols-3 gap-4 hiresection">
                    <div className="looking-hire 2xl:col-span-1 col-span-1 pr-4">
                        <h2>¿Buscas contratar?</h2>
                        <h6>Consigue talento profesional y caras nuevas realizando un casting gratuito. Vea la experiencia de los solicitantes, fotos, videos, audio y más. Clasifique fácilmente las aplicaciones, tome notas sobre ellas y seleccione el talento perfecto. Contacta y reserva talento directo.</h6>
                        <button>+ List a job (FREE)</button>
                    </div>
                    <div className="testimonial relative 2xl:col-span-1 xl:col-span-2 xl:mt-0 mt-12">
                        <div className="testimonial-header">
                            <h5>Lo que dicen nuestras felices clientes</h5>

                        </div>

                        <div className="layer-audition"><img src="/images/modeling-shadow.png" alt="" /></div>

                        <Slider {...settings} className="slider-card">
                            <div className="single-testimonial">
                                <img src="/images/testimonial-one.png" alt="" />
                                <h5>Tamzine walshe</h5>
                                <h6>Connect Entertainment</h6>
                                <p>“¡Talento es el proveedor número 1 de referencias a nuestra página de registro en todas las regiones durante todo el recorrido!”</p>
                            </div>
                            <div className="single-testimonial">
                                <img src="/images/testimonial-one.png" alt="" />
                                <h5>Tamzine walshe</h5>
                                <h6>Connect Entertainment</h6>
                                <p>“¡Talento es el proveedor número 1 de referencias a nuestra página de registro en todas las regiones durante todo el recorrido!”</p>
                            </div>
                            <div className="single-testimonial">
                                <img src="/images/testimonial-one.png" alt="" />
                                <h5>Tamzine walshe</h5>
                                <h6>Connect Entertainment</h6>
                                <p>“¡Talento es el proveedor número 1 de referencias a nuestra página de registro en todas las regiones durante todo el recorrido!”</p>
                            </div>
                            <div className="single-testimonial">
                                <img src="/images/testimonial-one.png" alt="" />
                                <h5>Tamzine walshe</h5>
                                <h6>Connect Entertainment</h6>
                                <p>“¡Talento es el proveedor número 1 de referencias a nuestra página de registro en todas las regiones durante todo el recorrido!”</p>
                            </div>

                        </Slider>
                    </div>
                </div>

            </Container>
        </HireSection >
    );
}



const HireSection = styled.div`
    margin-top:160px;

    @media (max-width:786px){
        margin-top:60px;

       }

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
.hiresection{
    padding:52px 0 0 50px;
    background: #111111;
    border-radius: 8px;
    // height:524px;
    padding-bottom:20px;

    @media (max-width:768px){
        padding:25px;
        

       }

   .looking-hire{
    padding-top:100px;



    @media (max-width:1680px){
        padding-top:40px;

       }

     

       h2{
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        color: #fff;
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
        color: #fff;
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

       button{
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1));
        border-radius: 8px;
        border: 1px solid #fff;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #fff;
        padding:15px 24px;
        margin-top:30px;
     
        @media (max-width:786px){
            font-size: 14px;
           }
       }
   } 
   
   .testimonial{

.layer-audition{
    display:none;
}
    @media (min-width:768px){
    .layer-audition{
        position:absolute;
        right:-1px;
        display:block;
        bottom:0;
        z-index:1;
        height:100%;
        width:150px;
        height:430px;
        img{
            height:100%;
        }

    }
}
    .testimonial-header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:20px;

        h5{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.6);

            @media (max-width:786px){
                font-size: 14px;
               }
        }

        .arrow-key{
            display:flex;
            align-items:center;
            padding-right:50px;
        }
    }
    .single-testimonial{
        padding:60px 00px 80px 00px;
        background: #000;
        box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.02), 0px 7px 8px 2px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        min-width:450px !important;

        @media (max-width:768px){
            min-width:100% !important ;
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
            color: #fff;
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
            color: rgba(255, 255, 255, 0.6);
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
            color: #ffffff;
            margin-top:17px;
 
            @media (max-width:786px){
                font-size: 14px;
               }
        }

    }
   }
}
`;
