import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiDoubleQuotesL } from "react-icons/ri";
import styled from "styled-components";
import { TestimonialD } from "types/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { BtnPrimary } from "components/home/buttons";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    pic: "/images/home-testimonial-1.png",
    text: `I don't know why it took me so long to sign up with you guys! You guys are great. I got a part playing a thug girl in a feature film called "Keepin' It Real. I also have auditions coming up very soon!!`,
    rating: 5,
    name: "Jesseal",
    cat: "Actor",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    pic: "/images/home-testimonial-2.png",
    text: `Explore Talent, I wanted to thank you for your wonderful services. I really enjoy checking my calendar to see what new and exciting casting calls are listed. Because of you I was cast as a featured extra (Big Tony's sexy girlfriend)in the short film TKO. `,
    rating: 5,
    name: "Jesseal",
    cat: "Actor",
    location: "Los Angeles, CA",
  },
  {
    id: 3,
    pic: "/images/home-testimonial-3.png",
    text: `Thank you guys very much! I have been on your website for about 3 weeks and I have already got one booking in Nashville and was signed to Alpha Model Group in Atlanta!!! I wouldn't have been able to get these without you, so I am very appreciative! God Bless!`,
    rating: 5,
    name: "Derek Yates",
    cat: "Model",
    location: "Los Angeles, CA",
  },
  {
    id: 4,
    pic: "/images/home-testimonial-4.png",
    text: `Got a part in a movie! I just recently got a part in the movie Totally Baked with National Lampoons and met with Michael Gaylord, the photographer, few production agencies and few agents that were interested in me!`,
    rating: 5,
    name: "Jesseal",
    cat: "Actor",
    location: "Los Angeles, CA",
  },
];

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
          background: "rgba(255, 255, 255, 0.1)",
          height: 50,
          width: 50,
          borderRadius: "100%",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
          // position: "absolute",
          top: "50%",
          //   right: -10,
          //   transform: "translateY(-50%)",
          cursor: "pointer",
          marginRight: "-170px",
        }}
      >
        <FaArrowRight style={{ color: "#fff" }} />
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
        background: "rgba(255, 255, 255, 0.1)",
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

const Card = ({ pic, text, rating, name, cat, location }: TestimonialD) => {
  const starred: Array<number> = [];
  const unstarred: Array<number> = [];
  for (let i = 0; i < rating; i++) {
    starred.push(i);
  }
  for (let i = 0; i < 5 - rating; i++) {
    unstarred.push(i);
  }
  return (
    <CardContainer className="flex flex-col lg:flex-row lg:gap-10 items-center justify-center">
      <div className="left">
        <Image src={pic} alt={name} width={350} height={405} />
      </div>

      <div className="right">
        <div>
          <RiDoubleQuotesL className="txt-link text-5xl" />
        </div>
        <p>{text}</p>
        <div className="mt-4 mb-6">
          <div className="flex gap-1 stars-container">
            {starred.map((i) => (
              <AiFillStar key={i} className="star-filled" />
            ))}
            {unstarred.map((i) => (
              <AiFillStar key={i} className="star" />
            ))}
          </div>
        </div>
        <div className="font-bold text-lg">
          {name} • {cat} •{" "}
          <span className="text-gray-400 font-semibold">{location}</span>{" "}
        </div>
      </div>
    </CardContainer>
  );
};

export default function Testimonials() {
  return (
    <div className="bg-black">
      <CardCarousel>
        {testimonials.map((i) => (
          <Card
            key={i.id}
            pic={i.pic}
            text={i.text}
            rating={i.rating}
            name={i?.name}
            cat={i.cat}
            location={i.location}
          />
        ))}

        <div
          style={{ maxWidth: 770, minHeight: "350px" }}
          className="mx-auto text-center flex flex-col justify-center items-center"
        >
          <h2
            className="mb-14 text-white mx-auto 2xl:mt-36 xl:mt-28 lg:mt-24 md:mt-52 sm:mt-60 mt-40 ready"
            style={{
              fontWeight: 600,
              fontSize: 36,
              lineHeight: "180%",
              maxWidth: 770,
            }}
          >
            Are you ready to take the next big step for your career?
          </h2>
          <Link href="/join/talentb" passHref>
            <BtnPrimary>Join Explore Talent</BtnPrimary>
          </Link>
        </div>
      </CardCarousel>
    </div>
  );
}

const CardContainer = styled.div`
  background: #000;
  color: #fff;
  max-width: 1530px;
  // width: 80vw;
  margin: 0 auto;
  position: relative;
  z-index: 20;
  // padding: 20px 71px 20px 0;
  padding: 20px;

  @media (min-width:1680px) {
    padding: 60px 20px;

  }

  .star {
    color: #c5c5c5;
    font-size: 24px;
  }
  .star-filled {
    color: #ffb543;
    font-size: 24px;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;

    @media (max-width: 500px) {
      font-size: 15px;
      line-height: 160%;
    }

    @media (min-width: 1050px) {
      font-size: 20px;
      line-height: 160%;
    }

    @media (min-width: 1630px) {
      font-size: 28px;
      line-height: 180%;
    }
  }

  img {
    width: 382.09px;
    height: 405.42px;
  }

  .left {
    width: 40%;
    @media (max-width: 1050px) {
      width: 100%;
      text-align: center;
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }

  .right {
    width: 60%;
    @media (max-width: 1050px) {
      width: 100%;
      text-align: center;

      .stars-container {
        justify-content: center;
      }
    }
  }

}

`;

const DisplaySlide = styled.div`
  max-width: 1530px;
  width: 80vw;
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
