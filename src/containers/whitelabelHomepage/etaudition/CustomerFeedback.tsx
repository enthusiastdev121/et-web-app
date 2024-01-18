import styled from "styled-components";
import { Container, P1 } from "./styles";
import Slider from "react-slick";

const FEEDBACK = [
    {
        id: 1,
        src: "/images/audition/feedback/feedback.png",
        alt: "feedback",
        title: "Tim B.",
        subTitle: "ohn L. Scott Real Estate",
        text: `I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin" It Real. I also have auditions coming up very soon!!`,
    },
    {
        id: 2,
        src: "/images/audition/feedback/feedback.png",
        alt: "feedback",
        title: "Tim B.",
        subTitle: "ohn L. Scott Real Estate",
        text: `I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin" It Real. I also have auditions coming up very soon!!`,
    },
    {
        id: 3,
        src: "/images/audition/feedback/feedback.png",
        alt: "feedback",
        title: "Tim B.",
        subTitle: "ohn L. Scott Real Estate",
        text: `I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin" It Real. I also have auditions coming up very soon!!`,
    },
    {
        id: 4,
        src: "/images/audition/feedback/feedback.png",
        alt: "feedback",
        title: "Tim B.",
        subTitle: "ohn L. Scott Real Estate",
        text: `I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin" It Real. I also have auditions coming up very soon!!`,
    },
    {
        id: 5,
        src: "/images/audition/feedback/feedback.png",
        alt: "feedback",
        title: "Tim B.",
        subTitle: "ohn L. Scott Real Estate",
        text: `I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin" It Real. I also have auditions coming up very soon!!`,
    },
]

const testimonials = [
    {
        id: 1,
        src: "/images/home-testimonial-1.png",
        text: `I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin' It Real. I also have auditions coming up very soon!!`,
        rating: 5,
        alt: 'feedback',
        title: "Jesseal",
        cat: "Actor",
        subTitle: "Los Angeles, CA",
    },
    {
        id: 2,
        src: "/images/home-testimonial-2.png",
        text: `Explore Talent, I wanted to thank you for your wonderful services. I really enjoy checking my calendar to see what new and exciting casting calls are listed. Because of you I was cast as a featured extra (Big Tony's sexy girlfriend)in the short film TKO. `,
        rating: 5,
        alt: 'feedback',
        title: "Jesseal",
        cat: "Actor",
        subTitle: "Los Angeles, CA",
    },
    {
        id: 3,
        src: "/images/home-testimonial-3.png",
        text: `Thank you guys very much! I have been on your website for about 3 weeks and I have already got one booking in Nashville and was signed to Alpha Model Group in Atlanta!!! I wouldn't have been able to get these without you, so I am very appreciative! God Bless!`,
        rating: 5,
        alt: 'feedback',
        title: "Derek Yates",
        cat: "Model",
        subTitle: "Los Angeles, CA",
    },
    {
        id: 4,
        src: "/images/home-testimonial-4.png",
        text: `Got a part in a movie! I just recently got a part in the movie Totally Baked with National Lampoons and met with Michael Gaylord, the photographer, few production agencies and few agents that were interested in me!`,
        rating: 5,
        alt: 'feedback',
        title: "Jesseal",
        cat: "Actor",
        subTitle: "Los Angeles, CA",
    },
    {
        id: 5,
        src: "/images/home-testimonial-4.png",
        text: `Got a part in a movie! I just recently got a part in the movie Totally Baked with National Lampoons and met with Michael Gaylord, the photographer, few production agencies and few agents that were interested in me!`,
        rating: 5,
        alt: 'feedback',
        title: "Jesseal",
        cat: "Actor",
        subTitle: "Los Angeles, CA",
    },
];

const CustomerFeedback = () => {

    const topsettings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        // initialSlide: 0.5,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        // centerMode: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    const bottomsettings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        rtl: true,
        // initialSlide: 4,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        // centerMode: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };


    const feedbackBox = testimonials.map(({ id, src, alt, title, subTitle, text }: { id: number, src: string, alt: string, title: string, subTitle: string, text: string }) => {
        return (
            <div className="feedback-box p-8" key={id}>
                <div className="flex gap-3">
                    <div className="h-[60px] aspect-square rounded-[100%]">
                        <img src={src} alt={alt} />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="text-white text-xl">{title}
                        </h4>
                        <p className="text-white text-sm">{subTitle}</p>
                    </div>
                </div>
                <div className="underline my-4 h-[1px] w-full"></div>
                <div>
                    <P1 className="text-white">{text}
                    </P1>
                </div>
            </div>
        )
    })

    return (
        <>
            <Root className="md:my-24 my-12">
                {/* <Container> */}
                <div className="feedback-wrapper flex flex-col md:gap-14 gap-10">
                    <h2 className="text-white text-center h2">Customer Feedback
                    </h2>
                    <Feedback className="flex flex-col gap-5">
                        <Slider {...topsettings} className="SliderRoot-card">
                            {feedbackBox}
                        </Slider>
                        <Slider {...bottomsettings} className="SliderRoot-card">
                            {feedbackBox}
                        </Slider>
                    </Feedback>
                </div>
                {/* </Container> */}
            </Root>
        </>
    )
}

export default CustomerFeedback;

const Root = styled.div`
    background-color: ${(p) => p.theme.secondary};
    padding: 5rem 0;
    max-width: 100%;
    @media screen and (max-width: 767px) {
        padding: 3rem 0; 
    }
`;

const Feedback = styled.div`
    gap: 2rem;
    .feedback-box{
        background-color: ${(p) => p.theme.lghtBlack};
        border: 1px solid ${(p) => p.theme.lghtBlack};
        border-radius: 20px;
        /* margin: 0 1rem; */
        margin-left: 1.2rem;
        &:hover {
            border: 1px solid ${(p) => p.theme.yellow};
        }
        .underline {
            background-color: #939393;
            opacity: 0.7;
        }
    }
    .slick-track{
        display: flex !important;
        gap: 2rem;
        @media screen and (max-width: 1025px) {
            gap: 1rem;
        }
    }
    @media screen and (max-width: 1025px) {
        gap: 1rem;
        .feedback-box{
            margin-left: 0.5rem;
        }
            
    }
`;
