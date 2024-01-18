import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import CardCarousel from "./Caruosel";

const category = [
  {
    id: 1,
    name: "Acting",
    pic: "/images/home-acting.png",
  },
  {
    id: 2,
    name: "Modeling",
    pic: "/images/home-modeling.png",
  },
  {
    id: 3,
    name: "Extras",
    pic: "/images/home-extras.png",
  },
  {
    id: 4,
    name: "Musician",
    pic: "/images/home-music.png",
  },
  {
    id: 5,
    name: "Dancing",
    pic: "/images/home-dance.png",
  },
  {
    id: 6,
    name: "TV & Reality",
    pic: "/images/home-tv.png",
  },
  {
    id: 7,
    name: "Film & Stage Crew",
    pic: "/images/home-filmstage.png",
  },
  {
    id: 8,
    name: "Presenter",
    pic: "/images/home-presenter.png",
  },
  {
    id: 9,
    name: "Influencer",
    pic: "/images/home-influencer.png",
  },
  {
    id: 10,
    name: "Photography",
    pic: "/images/home-photography.png",
  },
  {
    id: 11,
    name: "Survival Jobs",
    pic: "/images/home-acting.png",
  },
  {
    id: 12,
    name: "Hair, Makeup & Styling",
    pic: "/images/makeup-artists.png",
  },
];

export default function AllCasting() {
  return (
    <Root>
      <div className="heading">All castings by category</div>

      <div className="-ml-7">
        <CardCarousel ht={"94%"}>
          {category.map((i) => (
            <Link href="/auditions/all-jobs" key={i.id}>
              <a>
                <Card>
                  <div className="bottom-shadow"></div>
                  <Image layout="fill" src={i.pic} alt={i?.name} />
                  <h3 className="font-bold text-white">{i?.name}</h3>
                </Card>
              </a>
            </Link>
          ))}
        </CardCarousel>
      </div>
    </Root>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 30px auto 100px auto;
  position: relative;
  z-index: 20;

  .heading {
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: rgba(60, 60, 67, 0.6);
  }
`;

const Card = styled.div`
  width: 146.25px !important;
  height: 146.25px;
  background: linear-gradient(180deg, rgba(17, 0, 0, 0) 0%, #000000 100%);
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  display: flex !important;
  flex-direction: column;
  cursor: pointer;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  h3 {
    position: relative;
    z-index: 10;
    text-align: center;
    margin-top: auto;
    margin-bottom: 12px;
  }

  .bottom-shadow {
    width: 100%;
    height: 100px;
    background: linear-gradient(180deg, rgba(17, 0, 0, 0) 0%, #000000 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9;
  }
`;
