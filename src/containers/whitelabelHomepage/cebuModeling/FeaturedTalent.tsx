import { BtnPrimaryOutline } from "components/home/buttons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getFeaturedTalentApi } from "network/apis/featuredTalent";
import { motion } from "framer-motion";
import Link from "next/link";

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
          background: "#A1A1AA",
          height: 50,
          width: 50,
          borderRadius: "100%",
          boxShadow:
            " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
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
        background: "#A1A1AA",
        height: 50,
        width: 50,
        borderRadius: "100%",
        boxShadow:
          " 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
        position: "absolute",
        top: -30,
        right: 70,
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
    infinite: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    draggable: true,
  };

  return (
    <DisplaySlide>
      <Slider {...CreateCard}>{children}</Slider>
    </DisplaySlide>
  );
};

export default function FeaturedTalent() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {

      try {

        const res = await getFeaturedTalentApi();
        setData(res.data);
        setLoading(false);
      }
      catch (err) {

      }
    };
    getData();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="hidden xl:block"
        style={{
          background:
            "radial-gradient(circle, rgba(255,166,102,1) 0%, #F8F9FB 75%)",
          height: "200%",
          width: "80%",
          position: "absolute",
          bottom: -800,
          left: 0,
          opacity: 0.5,
        }}
      ></div>
      <div
        className="hidden xl:block"
        style={{
          background:
            "radial-gradient(circle, rgba(185,226,255,1) 0%, rgba(255,255,255,1) 73%)",
          height: "200%",
          width: "20%",
          position: "absolute",
          bottom: -800,
          right: 0,
          opacity: 0.5,
        }}
      ></div>
      <div
        className="hidden xl:block"
        style={{
          background: "#F8F9FB",
          height: 179,
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      ></div>
      <Root className="flex flex-col lg:flex-row gap-5 lg:justify-between">
        <div>
          <motion.div
            className="md:w-1/2 hidden md:block"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image
              src="/images/cebuModeling/home-star.png"
              width={86}
              height={86}
              alt="star"
              priority={true}
            />
          </motion.div>

          <h2>Featured Talents</h2>
          <p style={{ maxWidth: 647 }}>
            Talents who are one step ahead of the game. As the competition of
            millions of talents that are grabbing the opportunity to showcase
            their talent in the big world of showbiz industry.
          </p>
          <button className="learn_button">Learn more</button>
        </div>

        <FeaturedTalentContainer>
          <CardCarousel>
            {data?.filter(
              (i: any) =>
                i?.profile_picture_path !== "" && i?.profile_picture_path !== null
            )?.map((i: any) => (
              <div key={i}>
                <Link href={`/${i?.talentlogin}`}>
                  <a className="img-container cursor-pointer">
                    <Image layout="fill" src={i?.profile_picture_path} alt={i?.fname} />
                  </a>
                </Link>

              </div>
            ))}
          </CardCarousel>
        </FeaturedTalentContainer>
      </Root>
    </div>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 130px auto;
  position: relative;
  z-index: 20;
   color: ${p => p.theme.base};
  
  h2 {
    font-weight: 700;
    font-size: 50px;
    line-height: 150%;

    @media (max-width: 510px) {
      line-height: 130%;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    margin-top: 20px;
    margin-bottom: 60px;
  }
  .learn_button{
  
  border: 1px solid  ${p => p.theme.primary};
  background: transparent;
  color: ${p => p.theme.primary};
  padding: 5px 20px;
  border-radius: 5px;

  &:hover {
    color: #ffffff;
    background:  ${p => p.theme.primary};
    transition: all 0.2s ease;
  }

  &:active {
    transform: translateY(1px);
  }
  }
`;

const FeaturedTalentContainer = styled.div`
  max-width: 672px;

  @media (max-width: 1050px) {
    max-width: 850px;
  }

  .img-container {
    height: 298px;
    width: 198px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #000;
    position: relative;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const DisplaySlide = styled.div`
  .slick-slide,
  .slick-active,
  .slick-current {
    width: 198px !important;
    margin: 5px 10px 0 0;
  }

  .slick-track {
    // width: 672px !important;
    // max-width: 672px !important;
  }

  .slick-next {
    right: 5px;
    width: 70px;
    height: 45px;
    padding: 16px 10px;
    display: flex !important;
    justify-content: flex-end;
    top: 150px;
  }

  .slick-next:before {
    content: "";
    font-size: 0px;
    width: 70px;
    line-height: 0 !important;
    padding: 16px 10px;
  }

  .slick-prev {
    display: none;
  }
`;

const Next = styled.div`
  position: absolute;
  right: 0px;
  top: -55px;
`;
