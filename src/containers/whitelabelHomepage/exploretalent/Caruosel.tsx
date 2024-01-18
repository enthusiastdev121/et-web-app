import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

function NextArrow(props: any) {
  const { onClick, ht, bg, clr } = props;
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
          backgroundColor: bg || "#fff",
          color: clr || "#191919",
          height: 50,
          width: 50,
          borderRadius: "100%",
          boxShadow:
            " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
          // position: "absolute",
          top: "50%",
          //   right: -10,
          //   transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        className="sm:-mr-[10px]"
      >
        <FaArrowRight />
      </div>
    </Next>
  );
}

function PrevArrow(props: any) {
  const { onClick, bg, clr } = props;
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
        height: 50,
        width: 50,
        borderRadius: "100%",
        boxShadow:
          " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 5,
        cursor: "pointer",
        backgroundColor: bg || "#fff",
        color: clr || "#191919",
      }}
    >
      <FaArrowLeft />
    </div>
  );
}

export default function CardCarousel({ children, ht, bg, clr }: any) {
  const CreateCard = {
    arrows: true,
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow ht={ht} bg={bg} clr={clr} />,
    prevArrow: <PrevArrow bg={bg} clr={clr} />,
    draggable: true,
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
  z-index: 5;
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
