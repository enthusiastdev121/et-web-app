import { useState } from "react"
import { ClassCardBigD } from "types/classes";
import ClassCardBig from "./ClassCardBig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const featuredClassesList = [
    {
        id: 1,
        img: '/images/classes/all-class-1.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 59.00,
        isFav: false,
        tags: ["New"],
    },
    {
        id: 2,
        img: '/images/classes/all-class-2.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 4.0,
        desc: 'Your project will look better the moment it sounds better! Learn to use lavaliers correctly as well as tools for the job and turn it into a incredible, best successful career you will ever have in industry of...',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 199.00,
        isFav: false,
        tags: ["Best seller"],
    },
    {
        id: 3,
        img: '/images/classes/all-class-3.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 19.00,
        isFav: false,
        tags: ["Highest rated"],
    },
    {
        id: 4,
        img: '/images/classes/all-class-4.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 199.00,
        isFav: false,
        tags: [],
    },
    {
        id: 5,
        img: '/images/classes/all-class-5.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 59.00,
        isFav: false,
        tags: [],
    },
]

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <Next>
            <div
                onClick={onClick}
                style={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    background: "#000",
                    height: 50,
                    width: 50,
                    borderRadius: "100%",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                    top: "50%",
                    cursor: "pointer",
                    marginRight: "-130px",
                }}
            >
                <FaArrowRight />
            </div>
        </Next>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            style={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background: "#000",
                height: 50,
                width: 50,
                borderRadius: "100%",
                boxShadow:
                    " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                zIndex: 10,
                cursor: "pointer",
            }}
        >
            <FaArrowLeft style={{ color: "#fff" }} />
        </div>
    );
}

const CardCarousel = ({ children }: any) => {
    const CreateCard = {
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <DisplaySlide>
            <Slider {...CreateCard}>{children}</Slider>
        </DisplaySlide>
    );
};

export default function FeaturedClasses() {
    // const [FeaturedClassesList, setFeaturedClassesList] = useState<ClassCardBigD[]>([])

    return (
        <div>
            <h2 className="-ml-2 sm:mx-0">Featured classes</h2>

            <div className="-mx-5 sm:mx-0">
                <CardCarousel ht={"0%"} bg="#000" clr="#fff">
                    {
                        featuredClassesList.map((item: any) => (
                            <div key={item.id}>
                                <ClassCardBig item={item} imgWidth={50} />
                            </div>
                        ))
                    }
                </CardCarousel>
            </div>
        </div>
    )
}


const DisplaySlide = styled.div`
  width: 100%;
  margin: 0 auto;

  .slick-list {
    position: relative;
  }

  .slick-slide,
  .slick-active,
  .slick-current {
    // width: fit-content !important;
    padding: 16px 10px;
  }

  .slick-next {
    right: 5px;
    width: fit-content;
    height: fit-content;
    padding: 16px 10px;
    display: flex !important;
    justify-content: flex-end;
    top: 150px;
  }

  .slick-next:before {
    content: "";
    font-size: 0px;
    width: fit-content;
    line-height: 0 !important;
    padding: 16px 10px;
  }

  .slick-prev {
    display: none;
  }

  .ready {
    @media (max-width: 510px) {
      line-height: 130% !important;
    }
  }
`;

const Next = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
`;