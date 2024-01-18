import FeaturedTalent from "components/reviews/FeaturedTalent";
import Pagination from "./Pagination";
import { Background, Card, Root } from "./styles";
import Header from "../../components/reviews/Header";
import { ReviewCard } from "components/reviews/ReviewCardText";

const data = [
  {
    id: 1,
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
    id: 2,
    name: "Dwayne B.",
    pic: "/images/dwayne.png",
    cat: "Actor",
    rating: 5,
    date: "May 16, 2021",
    type: "video",
    uri: "https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136018.mp4",
    thumbnail: "/images/dwayne-thumbnail.png",
  },
  {
    id: 3,
    name: "Zairy S.",
    pic: "/images/zairy.png",
    cat: "Actor",
    rating: 4,
    date: "Jan 20, 2022",
    type: "video",
    uri: "https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136015.mp4",
    thumbnail: "/images/zairy-thumbnail.png",
  },
  {
    id: 4,
    name: "Kaycie C.",
    pic: "/images/kaycie.png",
    cat: "Model",
    rating: 3,
    date: "Jul 19, 2021",
    type: "video",
    uri: "https://dev2ru4m9wyc9.cloudfront.net/website_media/video_testimonials/Kaycie_Chapman.mp4",
    thumbnail: "/images/kaycie-thumbnail.png",
  },
  {
    id: 5,
    name: "Cary A. & Joseph V.",
    pic: "/images/cary.png",
    cat: "Actor",
    rating: 4,
    date: "Aug 13, 2021",
    type: "video",
    uri: "https://dev2ru4m9wyc9.cloudfront.net/website_media/video_testimonials/Cary_Ann_&_Joseph_Villani.mp4",
    thumbnail: "/images/cary-thumbnail.png",
  },
  {
    id: 6,
    name: "AJ C.",
    pic: "/images/aj.png",
    cat: "Actor",
    rating: 5,
    date: "Feb 26, 2022",
    type: "video",
    uri: "https://dev2ru4m9wyc9.cloudfront.net/website_media/video_testimonials/AJ_Coleman.mp4",
    thumbnail: "/images/aj-thumbnail.png",
  },
  {
    id: 7,
    name: "Yvonne Lu Grace Y.",
    pic: "/images/lu.png",
    cat: "Actor, Model",
    rating: 5,
    date: "Jan 13, 2021",
    type: "video",
    uri: "https://dev2ru4m9wyc9.cloudfront.net/website_media/video_testimonials/Yvonne_Lu_Grace_Yang.mp4",
    thumbnail: "/images/lu-thumbnail.png",
  },
  {
    id: 8,
    name: "Michael P.",
    pic: "/images/piper.png",
    cat: "Actor",
    rating: 4,
    date: "Jul 23, 2021",
    type: "video",
    uri: "https://dev2ru4m9wyc9.cloudfront.net/website_media/video_testimonials/Michael_Piper.mp4",
    thumbnail: "/images/piper-thumbnail.png",
  },
];

export default function VideoReviews() {
  return (
    <Background className="padding-small">
      <Root>
        <div className="w-full">
          <Header active="videos" />

          <main className="">
            <div className="grid xl:grid-cols-2 gap-5">
              {data.map((i, index) => (
                <ReviewCard
                  key={i.id}
                  name={i?.name}
                  pic={i.pic}
                  category={i.cat}
                  rating={i.rating}
                  date={i.date}
                  type={i.type}
                  uri={i.uri || ""}
                  thumbnail={i.thumbnail || ""}
                />
              ))}
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
