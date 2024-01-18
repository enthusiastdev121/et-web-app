import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

function NextArrow(props: any) {
  const { onClick, ht } = props;
  return (
    <Next ht={ht}>
      <div
        onClick={onClick}
        style={{
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#191919",
          background: "#38B6CD",
          height: 38,
          width: 38,
          borderRadius: "100%",
          boxShadow:
            " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
          // position: "absolute",
          top: "50%",
          //   right: -10,
          //   transform: "translateY(-50%)",
          cursor: "pointer",
          marginRight: "-10px",
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
        color: "#191919",
        background: "#38B6CD",
        height: 38,
        width: 38,
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

export default function AdorableKidsCardCarousel({ children, ht }: any) {
  const CreateCard = {
    arrows: true,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: false,
    initialSlide: 0.5,
    slidesToShow: 9,
    slidesToScroll: 1,
    nextArrow: <NextArrow ht={ht} />,
    prevArrow: <PrevArrow />,
    draggable: true,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          initialSlide: 0.5,
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1240,
        settings: {
          initialSlide: 0.5,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  };
  return (
    <DisplaySlide>
      <Slider {...CreateCard}>
        {/* <div className="end-grad absolute right-0 top-0"></div> */}
        {children}
      </Slider>
    </DisplaySlide>
  );
}

const DisplaySlide = styled.div`
  .slick-list {
    position: relative;
  }

  .slick-slide,
  .slick-active,
  .slick-current {
    width: fit-content !important;
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
`;

const Next = styled.div<{ ht: string }>`
  background: linear-gradient(
    270deg,
    rgba(244, 246, 250, 0.8) 21.92%,
    rgba(244, 245, 251, 0) 100%
  );
  @media (max-width: 600px) {
    background: transparent;
  }
  z-index: 20;
  // height: 94%;
  height: ${(p) => p.ht};
  // width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
`;
