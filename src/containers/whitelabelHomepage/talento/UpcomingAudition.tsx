import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import styled from "styled-components";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getFeaturedCastingApi, getHomeAllCastingApi } from "network/apis/homePage";
import { Card } from "../exploretalent/CastingCalls";
import ZSkel from "components/ZSkel";
import { searchJobsApi } from "network/apis/jobs";
import { useAuth } from "context/AuthContext";
// import { NavItem } from "components/Layout/Header/Styles";


export const NavItem = ({ children, activeBtn, onClick }: { children: any, activeBtn: boolean, onClick: any }) => {
    // const [active, setActive] = useState(activeBtn);
    return (
        <button
            className={
                activeBtn
                    ? "nav-btn-active"
                    : "nav-btn"
            }
            onClick={() => {
                // setActive(!active)
                onClick()
            }}
        >
            {children}
        </button>
    );
};



export default function UpcomingAudition() {
    const [castingData, setCastingData] = useState([])
    const [category, setCategory] = useState("Featured")
    const [loading, setLoading] = useState(true)

    const { token } = useAuth();

    const getAllJobs = async () => {

        try {
            let res = await searchJobsApi({
                token: token || '',
                perPage: 20,
                // ageMax: ageRange[1],
                // ageMin: ageRange[0],
                // categories: selected.map((i: any) => i.id),
                // subcategories: selected
                //   .map((i: any) => i.sub?.map((i2: any) => i2.id))
                //   .flat(),
                // distance: location.city ? distance : null,
                // gender: gender,
                // lat: location.lat || null,
                // lon: location.lon || null,
                // nationwide: zip.length > 0 ? true : null,
                // searchstring: searchTerm,
                // page: page,
                // ethnicity: ethnicity
                //   ? ethnicity === "Any"
                //     ? null
                //     : ethnicity
                //   : null,
                // perPage: CASTING_LIMIT,
                // orderBy: orderBy,
                // orderDirection: orderDirection,
                // // categories: categories,
                // casting_preferences_categories: categories,
            })
            console.log(res.data, "mytalentoall")

            setLoading(false)

            setCastingData(res.data)

        } catch (err) {
            console.log("Err", err)

            setLoading(true)
        }
    }

    useEffect(() => {

        getAllJobs()


    }, [])


    const filters = [
        'Featured',
        "Acting",
        'Modeling',
        'Musicians',
        'Dance',
        'Crew'

    ]



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
                <img src="/images/cate-arrow.png" alt="" className="mx-auto" />
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
                    transform: "rotate(180deg)"
                }}
                onClick={onClick}>
                <img src="/images/cate-arrow.png" alt="" className="mx-auto" />
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
                        <h6>Casting de llamadas</h6>
                        <h4>En curso Destacados
                            Castings para hoy</h4>
                    </div>
                    <div className="banner-upcoming relative col-span-3">

                        <Slider {...settings} className="slider-card">

                            {loading ? (
                                [1, 2, 3].map((i) => {
                                    return (
                                        <div
                                            key={i} className='aspect-video relative br' style={{ width: '380px', minHeight: '220px', }} >
                                            <ZSkel />
                                        </div>
                                    );
                                })
                            ) : (
                                castingData.map((i: any) => {
                                    
                                    return (

                                        <Card
                                            key={i.casting_id}
                                            name={i?.name}
                                            location={i.location}
                                            time={i.asap}
                                            rate={i.rate}
                                            zip={i.zip}
                                            casting_id={i.casting_id}

                                        />
                                    )
                                })
                            )

                            }

                        </Slider>

                        {/* <nav className="md:flex items-center md:gap-5 mt-5 md:mt-11 md:ml-8 flex-wrap md:text-sm xl:text-base grid grid-cols-3 gap-1 text-xs">
                            {filters.map((i: string, index: number) => (

                                <NavItem activeBtn={
                                    i === category ? true : false
                                } onClick={() => {
                                    setCategory(i)
                                    console.log(i, "hlel")
                                }} key={i}
                                >{i}</NavItem>
                            ))}
                        </nav> */}

                    </div>


                </motion.div>
            </Container>
        </UpcomingSection>
    );
}

const UpcomingSection = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(12, 205, 133, 0.04) 100%);
  padding:70px 0;

  .talento-checkmark{
    background: #222222;
    border: 1px solid #222222;
    border-radius: 100px;
    color:#fff;


    &:hover{
    background: #F31212 !important;
    border: 1px solid #F31212 !important;
    border-radius: 100px;
    color:#fff;
    }

  }

 .br *{
  border-radius: 16px;
  opacity: 0.3;
 }

  .slider-card{
    .slick-slide{
        margin-right: 30px;
    }

    .slick-prev{
        &:before{
            opacity:0;
            z-index:-1;
        }
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
            color: #fff;
            opacity:0.6;
        

            @media (max-width:1680px){
                font-size: 16px;
               }
        }
        h4{
            font-style: normal;
            font-weight: 600;
            font-size: 26px;
            color: #fff;
            margin-top:10px;
      
            @media (max-width:1680px){
                font-size: 24px;
               }
            // span{
            //     color:#0CCD85;
            // }
        }
    }
    .nav-btn {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 100px;
    padding: 1em 1.125em;
  }

  .nav-btn-active {
    background: ${p => p.theme.primary};
    border-radius: 100px;
    color: #fff;
    padding: 1em 1.125em;
    border: 1px solid ${p => p.theme.primary};
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
            background: #222222;
            box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.02), 0px 7px 8px 2px rgba(0, 0, 0, 0.05);
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
                color: #fff;
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
                        color: #ffffff;
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
                        background-color: #ffffff;
                        border-radius:50%;
                    }
                    h5{
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        color: #ffffff;
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
                    color: #fff;
                    opacity:0.6;
                }

                h6{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    color: #ffffff;
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
