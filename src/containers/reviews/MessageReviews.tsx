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
    name: "Patricia M.",
    pic: "/images/patricia.png",
    cat: "Actor",
    rating: 5,
    date: "Dec 21, 2021",
    type: "message",
    desc: "Hello I’m back!! So great news I’m filming with the new color purple cast, thanks so much all casting!! Really thankful for the opportunity to work with Oprah, Warner Brothers, Steven Spielberg, and the rest of this cast! No major role but hopefully once I’m done with this project I’ll get more bookings for bigger roles. It’s such an honor, thank you to the casting team that reached out to me for this opportunity!",
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
    name: "Sasha S.",
    pic: "/images/sasha.png",
    cat: "Actor",
    rating: 4,
    date: "March 22, 2022",
    type: "message",
    desc: `I payed the membership fee, on a Monday. Several days later I applied for the movie “The Color Purple “. Two weeks went by and I got selected for a non-speaking role. Wow!
    Unfortunately, I had a business trip overseas and couldn’t answer my emails until I returned back to the USA.
    Hopefully, lighting strikes again and I get selected for another film.`,
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
    name: "Yin S.",
    pic: "/images/michael.png",
    cat: "Actor",
    rating: 5,
    date: "Feb 19, 2022",
    type: "message",
    desc: `I have cast in 4 featured films, appeared on Greenleaf, and TVOne -Fatal Attraction several times, along with national TV commercials. AllCasting is getting me noticed, as well as my agent in SC. Thanks!`,
    thumbnail: "/images/zairy-thumbnail.png",
  },
];

export default function MessageReviews() {
  return (
    <Background className="padding-small"  >
      <Root>
        <div className="w-full">
          <Header active="messages" />

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
                    />
                  );
                }
              })}
            </div>
          </main>

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
