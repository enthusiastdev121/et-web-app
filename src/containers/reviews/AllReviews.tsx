import Button from "components/Button";
import FeaturedTalent from "components/reviews/FeaturedTalent";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import { RiDoubleQuotesL, RiShieldStarFill } from "react-icons/ri";
import { TiVideo } from "react-icons/ti";
import styled from "styled-components";
import Pagination from "./Pagination";
import { Background, Card, Root } from "./styles";
import Header from "../../components/reviews/Header";
import { ReviewCard } from "components/reviews/ReviewCardText";

const data = [
  {
    id: 1,
    name: "Jonas S.",
    pic: "/images/jonas.png",
    cat: "Actor",
    rating: 5,
    date: "May 24, 2021",
    desc: "I have been signed up for about 4 months and have already worked 2 projects and have been paid generously. The opportunities seem endless and the options are amazing to be able to pick and choose. My experience with the agents/producers and talent scouts have been great.",
    type: "message",
  },
  {
    id: 2,
    name: "Michael J.",
    pic: "/images/henry.png",
    cat: "Actor",
    rating: 5,
    date: "Jan 4, 2022",
    desc: "I recently came back to ExploreTalent and booked 3 projects in 5 days ! I’m glad I decided to give Exploretalent  another try !",
    type: "message",
  },
  {
    id: 3,
    name: "Herny C.",
    pic: "/images/michael.png",
    cat: "Musician",
    rating: 4,
    date: "Feb 13, 2021",
    desc: "I have been signed up for about 4 months and have already worked 2 projects and have been paid generously. The opportunities seem endless and the options are amazing to be able to pick and choose. My experience with the agents/producers and talent scouts have been great.",
    type: "message",
  },
  {
    id: 4,
    name: "Alexander J.",
    pic: "/images/alexander.png",
    cat: "Actor",
    rating: 5,
    date: "Sep 21, 2021",
    type: "video",
    uri: "https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136017.mp4",
    thumbnail: "/images/alex-thumbnail.png",
  },
  {
    id: 5,
    name: "Moris O.",
    pic: "/images/anna.png",
    cat: "Model",
    rating: 4,
    date: "April 21, 2021",
    desc: "Today’s I got great news!!! I have my first audition and Iam so excited im never really never nervous so I’ll be sure to be ready and put a act on!!! I have confident im ready !!",
    type: "message",
  },
  {
    id: 6,
    name: "Anna K.",
    pic: "/images/moris.png",
    cat: "Model",
    rating: 5,
    date: "June 3, 2022",
    desc: "Wow I just got picked to do a photoshoot next week for modeling thanks to ExploreTalent, I'm so excited, dreams do come true, never give up no matter what, believe in yourself, have faith.",
    type: "message",
  },
  {
    id: 7,
    name: "Dwayne B.",
    pic: "/images/dwayne.png",
    cat: "Actor",
    rating: 5,
    date: "Nov 17, 2021",
    type: "video",
    uri: "https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136018.mp4",
    thumbnail: "/images/dwayne-thumbnail.png",
  },
  {
    id: 8,
    name: "Lewis J.",
    pic: "/images/lewis.png",
    cat: "Actor",
    rating: 5,
    date: "April 21, 2022",
    desc: "I look on here everyday and was scared because i didn't believe this was a real page etc..but now I see there are a lot of people and things going on. I'm booking my 1st commercial now!",
    type: "message",
  },
  {
    id: 9,
    name: "Karl C.",
    pic: "/images/karl.png",
    cat: "Extra, Crew",
    rating: 5,
    date: "May 18, 2021",
    desc: "Thank you so much ExploreTalent.com. I haven’t been here a month yet, already I’ve had an audition using a commercial script, I just completed my callback this morning! Now I’m accepted In Acting & Modeling Academy starting next week for 30 weeks! I say this to say everyone dreams do come true.",
    type: "message",
  },
  {
    id: 10,
    name: "Zairy S.",
    pic: "/images/zairy.png",
    cat: "Actor",
    rating: 5,
    date: "Jan 20, 2022",
    type: "video",
    uri: "https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136015.mp4",
    thumbnail: "/images/zairy-thumbnail.png",
  },
];

export default function AllReviews() {
  return (
    <Background className="padding-small">
      <Root>
        <div className="w-full">
          <Header active="all" />

          <main className="flex flex-col">
            <div className="flex flex-col gap-5 w-full">
              {data.map((i, index) => {
                if (index < 5) {
                  return (
                    <ReviewCard
                      key={i.id}
                      name={i?.name}
                      pic={i.pic}
                      category={i.cat}
                      rating={i.rating}
                      date={i.date}
                      type={i.type}
                      desc={i.desc}
                      uri={i.uri || ""}
                      thumbnail={i.thumbnail || ""}
                    />
                  );
                }
              })}
            </div>
            <div className="flex flex-col gap-5 mt-5 w-full second-column">
              {data.map((i, index) => {
                if (index >= 5) {
                  return (
                    <ReviewCard
                      key={i.id}
                      name={i?.name}
                      pic={i.pic}
                      category={i.cat}
                      rating={i.rating}
                      date={i.date}
                      type={i.type}
                      desc={i.desc}
                      uri={i.uri || ""}
                      thumbnail={i.thumbnail || ""}
                    />
                  );
                }
              })}
            </div>
          </main>

          {/* PAGINATION */}
          <div className="mt-10 ">
            {/* <Pagination postsPerPage={10} totalPosts={20} /> */}
          </div>
        </div>

        <aside className="" style={{ maxWidth: "330px" }}>
          <FeaturedTalent />
        </aside>
      </Root>
    </Background>
  );
}
