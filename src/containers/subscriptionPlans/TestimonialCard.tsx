import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "components/Button";

const TESTIMONIALS = [
    {
        imgUrl: "/images/subscription/card-pic.png",
        alt: "Tyra pic",
        name: "Tyra",
        profession: "Talent",
        desc: "I am beyond over the moon with my experience here with ExploreTalent! I did not expect for things to be going so well and for them to be progressing this quickly. Truly blessed and thankful for this opportunity ❤️ Thrilled to see how far I’ll go!"
    },
    {
        imgUrl: "/images/subscription/card-pic.png",
        alt: "Tyra pic",
        name: "Tyra",
        profession: "Talent",
        desc: "I am beyond over the moon with my experience here with ExploreTalent! I did not expect for things to be going so well and for them to be progressing this quickly. Truly blessed and thankful for this opportunity ❤️ Thrilled to see how far I’ll go!"
    },
    {
        imgUrl: "/images/subscription/card-pic.png",
        alt: "Tyra pic",
        name: "Tyra",
        profession: "Talent",
        desc: "I am beyond over the moon with my experience here with ExploreTalent! I did not expect for things to be going so well and for them to be progressing this quickly. Truly blessed and thankful for this opportunity ❤️ Thrilled to see how far I’ll go!"
    },
]

export default function TestimonialCard() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Root className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-3xl w-[95%] rounded-lg">
                <Slider {...settings}>
                    {
                        TESTIMONIALS.map((t, ind) => {
                            const { imgUrl, alt, name, profession, desc } = t;
                            return (
                                <div key={ind} className="md:px-14 px-8 py-8 bg-white rounded-lg">
                                    <div className="text-center flex flex-col gap-5 relative" >
                                        <div>
                                            <div className="mb-2">
                                                <img src={imgUrl} alt={alt} className="m-auto" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{name}</h3>
                                            <p>{profession}</p>
                                        </div>
                                        <p>{desc}</p>
                                        {/* <div className='text-center'>
                                            <Button primary>
                                                <span className="px-5 py-1">
                                                    it’s your turn now
                                                </span>
                                            </Button>
                                        </div> */}
                                        <div className="absolute top-0 right-0">
                                            <img src="/images/subscription/quote.png" alt="quote" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Root>
        </>

    )
}

const Root = styled.div`
    box-shadow: 1px 6px 33px rgba(0, 0, 0, 0.25);
    .slick-dots {
        bottom: -40px;
        & li button{
            &:before {
            content: "";
            background-color: ${p => p.theme.bgFooterLower};
            border-radius: 50%;
            width: 13px;
            height: 13px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            }
            &:hover{
                &:before {
                    background-color: ${p => p.theme.abs.blue};
                }
            }
        }
        & li.slick-active button:before{
            color: ${p => p.theme.abs.blue};
            content: "";
            background-color: ${p => p.theme.abs.blue};
            border-radius: 50%;
            width: 13px;
            height: 13px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        & li.slick-active button:after{
            content: "";
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            border: 2px solid ${p => p.theme.abs.blue};
            border-radius: 50%;
            z-index: -1;

        }
    }
`;