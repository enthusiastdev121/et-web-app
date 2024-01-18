import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";

const CardCarousel = ({ children }: any) => {
  const CreateCard = {
    arrows: false,
    infinite: true,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 7,
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
    // <div className="flex gap-4 lg:gap-10 flex-wrap md:flex-nowrap justify-center ">
    <DisplaySlide>
      <Slider {...CreateCard}>{children}</Slider>
    </DisplaySlide>
    // </div>
  );
};

export default function Brands() {

  return (
    <Root className="flex gap-5 flex-col lg:flex-row items-center lg:gap-10 justify-center">
      <h2>Our&nbsp;talents&nbsp;have&nbsp;been&nbsp;featured&nbsp;on</h2>
      <>
        <CardCarousel>

          <div className="bg-gray">
            <Image
              src="/images/disney.png"
              alt="Disney"
              height={60}
              width={72}
              priority={true}
            />
          </div>
          <Image
            src="/images/endemol.png"
            alt="Endemol"
            height={60}
            width={72}
            priority={true}
          />
          <Image
            src="/images/mtv.png"
            alt="mtv"
            height={60}
            width={72}
            priority={true}
          />
          <Image
            src="/images/x-factor-new.png"
            alt="X Factor"
            height={60}
            width={72}
            priority={true}
          />
          <Image
            src="/images/itv.png"
            alt="itv"
            height={60}
            width={72}
            priority={true}
          />
          <Image
            src="/images/the-voice.png"
            alt="The Voice"
            height={60}
            width={72}
            priority={true}
          />
          <Image
            src="/images/top-modal.png"
            alt="Top Modal"
            height={60}
            width={72}
            priority={true}
          />
          <Image
            src="/images/elite.png"
            alt="Elite"
            height={60}
            width={72}
            priority={true}
          />
        </CardCarousel>
      </>
    </Root>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 80px auto;
  position: relative;
  z-index: 20;
  color: rgba(60, 60, 67, 0.6);

  @media (max-width: 510px) {
    margin: 40px auto;
  }

  h2 {
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
  }

  img {
    filter: grayscale(80%);
    background-blend-mode: difference;
  }

  .bg-gray {
    // background-color: red;
    // background-blend-mode: difference;
  }
`;

const DisplaySlide = styled.div`
  width: 100%;
  max-width: 50vw;
  margin: 0 auto;

  @media(max-width: 900px) {
    max-width: 80vw;
  }

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