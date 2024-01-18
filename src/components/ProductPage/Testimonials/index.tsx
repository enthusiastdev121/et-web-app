import { GreenBadge } from "@/styles/Btn.styled";
import Button from "components/Button";
import VideoPlayerModal from "components/VideoPlayerModal";
import { formatSuccessStoryRes } from "network/apiFormatter/successStories";
import { getSuccessStoriesApi } from "network/apis/successStories";
import Image from "next/image";
import Link from "next/link";
import { basename } from "path";
import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { IoPlay, IoArrowRedoCircleOutline } from "react-icons/io5";
// import { SuccessStoryItemD } from "types/testimonials";
import Pagination from "./Pagination";
import SuccessSkel from "./skel";
import {
  Banner,
  CelebImg,
  Content,
  Overlay,
  Paper,
  Root,
  SuccessCard,
} from "./styles";

const LIMIT = 200;

export default function TestimonialPage({ stories }) {
  const [fullVideo, setFullVideo] = useState(false);
  const [uri, setUri] = useState("");
  // const [stories, setStories] = useState<SuccessStoryItemD[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const [totalPosts, setTotalPosts] = useState(0)

  // useEffect(() => {
  //   const getStories = async () => {
  //     try {
  //       setLoading(true)
  //       const res = await getSuccessStoriesApi(currentPage, LIMIT);
  //       setTotalPosts(res?.total)
  //       const data = res.data.map((i: any) => formatSuccessStoryRes(i));
  //       setStories(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //     }
  //   };

  //   getStories();
  // }, [currentPage]); 

  return (
    <Root>
      <VideoPlayerModal
        uri={uri}
        open={fullVideo}
        onClose={() => setFullVideo(false)}
      />
      <Banner className="hidden md:block">
        <div className="overlay flex flex-col items-center justify-center gap-5">
          <h1 className="-mt-10">Success Stories</h1>
          <Link href="/about/suggestions">
            <a>
              <Button primary>
                <BsPlusLg /> <span className="ml-1">Share us your story</span>
              </Button>
            </a>
          </Link>
        </div>
        <Image
          src="/images/success-stories.png"
          alt="actor performing in front of camera"
          layout="fill"
          priority
        />
      </Banner>

      <div className="md:-mt-10">
        <Paper className="relative z-20">
          <h2 className="text-center txt-base">Trusted by famous celebirties</h2>

          <div className="my-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
            <div className="w-fit">
              <CelebImg>
                <Overlay>
                  <IoPlay className="cursor-pointer" onClick={() => {
                    setFullVideo(true)
                    setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136013.mp4")
                  }} />
                </Overlay>
                <Image
                  src="/images/snoop.png"
                  alt="snoop dogg"
                  height={188}
                  width={188}
                  priority
                />
              </CelebImg>
              <div className="text-base font-bold text-center mt-3">
                Snoop Dogg
              </div>
            </div>

            <div style={{ maxWidth: "188px" }}>
              <CelebImg>
                <Overlay>
                  <IoPlay className="cursor-pointer" onClick={() => {
                    setFullVideo(true)
                    setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/135973.mp4")
                  }} />
                </Overlay>
                <Image
                  src="/images/usher.png"
                  alt="usher"
                  height={188}
                  width={188}
                  priority
                />
              </CelebImg>
              <div className="text-base font-bold text-center mt-3">Usher</div>
            </div>

            <div style={{ maxWidth: "188px" }}>
              <CelebImg>
                <Overlay>
                  <IoPlay className="cursor-pointer" onClick={() => {
                    setFullVideo(true)
                    setUri("https://www.youtube.com/watch?v=QCMJr4iunHQ&t=3s")
                  }} />
                </Overlay>
                <Image
                  src="/images/joan-rivers.png"
                  alt="Joan Rivers"
                  height={188}
                  width={188}
                  priority
                />
              </CelebImg>
              <div className="text-base font-bold text-center mt-3">
                Joan Rivers
              </div>
            </div>

            <div style={{ maxWidth: "188px" }}>
              <CelebImg>
                <Overlay>
                  <IoPlay className="cursor-pointer" onClick={() => {
                    setFullVideo(true)
                    setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/135976.mp4")
                  }} />
                </Overlay>
                <Image
                  src="/images/piers-morgan.png"
                  alt="Piers Morgan"
                  height={188}
                  width={188}
                  priority
                />
              </CelebImg>
              <div className="text-base font-bold text-center mt-3">
                Piers Morgan
              </div>
            </div>

            <div style={{ maxWidth: "188px" }}>
              <CelebImg>
                <Overlay>
                  <IoPlay className="cursor-pointer" onClick={() => {
                    setFullVideo(true)
                    setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/135978.mp4")
                  }} />
                </Overlay>
                <Image
                  src="/images/akon.png"
                  alt="akon"
                  height={188}
                  width={188}
                  priority
                />
              </CelebImg>
              <div className="text-base font-bold text-center mt-3">Akon</div>
            </div>

            <div style={{ maxWidth: "188px" }}>
              <CelebImg>
                <Overlay>
                  <IoPlay className="cursor-pointer" onClick={() => {
                    setFullVideo(true)
                    setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/135975.mp4")
                  }} />
                </Overlay>
                <Image
                  src="/images/vampire-diaries.png"
                  alt="vampire diaries"
                  height={188}
                  width={188}
                  priority
                />
              </CelebImg>
              <div className="text-base font-bold text-center mt-3">
                Vampire Diaries
              </div>
            </div>
          </div>
        </Paper>

        {/* {loading ? <SuccessSkel /> :} */}


        <Content
          style={{ backgroundColor: "transparent" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center md:justify-items-start"
        >
          {
            currentPage === 1 &&
            <SuccessCard className="flex flex-col">
              <div className="relative">
                <GreenBadge className="absolute top-3 right-3 z-10">
                  Success
                </GreenBadge>
                <Image
                  src="/images/testimonial-1.png"
                  alt="profile"
                  height={382}
                  width={361}
                />
                <div className="absolute bottom-3 right-3">
                  <Overlay style={{ fontSize: "30px", height: "95%" }}>
                    <IoPlay className="cursor-pointer" onClick={() => {
                      setFullVideo(true)
                      setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136014.mp4")
                    }} />
                  </Overlay>
                  <Image
                    src="/images/testimonial-sm-1.png"
                    alt="thumbnail"
                    height={102}
                    width={102}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* <div className="text-white font-semibold text-base mx-2 -mt-3 relative z-10">
              {"Julia has appears on the television show Chuck as lead character"
                .split(" ")
                .map((i: any, index: number) => (
                  <span key={index} className="bg-black py-1">
                    {i}{" "}
                  </span>
                ))}
            </div> */}

              <div className="p-3">
                <Link href={"/"}>
                  <a>
                    <h3 className="mb-3 mt-1">Bobby Banhart</h3>
                  </a>
                </Link>

                <p>
                  Bobby Banhart talks with Explore Talent. Bobby got discovered for A Shot At Love with Tila Tequila by being a member of Explore Talent. Bobby is a true &ldquo;overnight success&rdquo; story.
                </p>
              </div>

              {/* <div
                className="flex items-center gap-1 p-3 mb-2 mt-auto"
                style={{ color: "rgba(60, 60, 67, 0.6)" }}
              >
                <IoArrowRedoCircleOutline className="text-3xl" />
                <span>Share</span>
              </div> */}
            </SuccessCard>
          }

          {
            currentPage === 1 &&
            <SuccessCard className="flex flex-col">
              <div className="relative">
                <GreenBadge className="absolute top-3 right-3 z-10">
                  Success
                </GreenBadge>
                <Image
                  src="/images/success-img.png"
                  alt="profile"
                  height={382}
                  width={361}
                />
                <div className="absolute bottom-3 right-3">
                  <Overlay style={{ fontSize: "30px", height: "95%" }}>
                    <IoPlay className="cursor-pointer" onClick={() => {
                      setFullVideo(true)
                      setUri("https://vjs.zencdn.net/v/oceans.mp4")
                    }} />
                  </Overlay>
                  <Image
                    src="/images/testimonial-sm-2.png"
                    alt="thumbnail"
                    height={102}
                    width={102}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* <div className="text-white font-semibold text-base mx-2 -mt-3 relative z-10">
              {"Julia has appears on the television show Chuck as lead character"
                .split(" ")
                .map((i: any, index: number) => (
                  <span key={index} className="bg-black py-1">
                    {i}{" "}
                  </span>
                ))}
            </div> */}

              <div className="p-3">
                <Link href={"/"}>
                  <a>
                    <h3 className="mb-3 mt-1">Julia Ling</h3>
                  </a>
                </Link>

                <p>  Julia began her career with a membership at ExploreTalent.
                  Julia&apos;s credits include &ldquo;Buffy the Vampire
                  Slayer&rdquo;, &ldquo;Alias&rdquo;, &ldquo;The OC&rdquo;,
                  &ldquo;ER&rdquo;, &ldquo;House&rdquo;, &ldquo;Studio 60&rdquo;,
                  and &ldquo;Grey&apos;s Anatomy&rdquo;. Julia is currently
                  enjoying success as a lead character Anna Wu on
                  &ldquo;Chuck&rdquo;.
                </p>
              </div>

              {/* <div
                className="flex items-center gap-1 p-3 mb-2 mt-auto"
                style={{ color: "rgba(60, 60, 67, 0.6)" }}
              >
                <IoArrowRedoCircleOutline className="text-3xl" />
                <span>Share</span>
              </div> */}
            </SuccessCard>
          }

          {
            currentPage === 1 &&
            <SuccessCard className="flex flex-col">
              <div className="relative">
                <GreenBadge className="absolute top-3 right-3 z-10">
                  Success
                </GreenBadge>
                <Image
                  src="/images/testimonial-3.png"
                  alt="profile"
                  height={382}
                  width={361}
                />
                <div className="absolute bottom-3 right-3">
                  <Overlay style={{ fontSize: "30px", height: "95%" }}>
                    <IoPlay className="cursor-pointer" onClick={() => {
                      setFullVideo(true)
                      setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136015.mp4")
                    }} />
                  </Overlay>
                  <Image
                    src="/images/testimonial-sm-3.png"
                    alt="thumbnail"
                    height={102}
                    width={102}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* <div className="text-white font-semibold text-base mx-2 -mt-3 relative z-10">
              {"Julia has appears on the television show Chuck as lead character"
                .split(" ")
                .map((i: any, index: number) => (
                  <span key={index} className="bg-black py-1">
                    {i}{" "}
                  </span>
                ))}
            </div> */}

              <div className="p-3">
                <Link href={"/"}>
                  <a>
                    <h3 className="mb-3 mt-1">Zairy Shakur</h3>
                  </a>
                </Link>

                <p>
                  Since signing with Explore Talent, 29-year-old war veteran and single mother of five Zairy Shakur has achieved her dream of becoming an actress, host, and singer. She has described her experience working with the company as both &ldquo;great&rdquo; and &ldquo;helpful&rdquo;. Zairy added that the success she has achieved now was truly worth the time and investment. After a mere 8 weeks, Zairy got to audition for the Samsung S7 commercial and managed to land a stint with Disney.  </p>
              </div>

              {/* <div
                className="flex items-center gap-1 p-3 mb-2 mt-auto"
                style={{ color: "rgba(60, 60, 67, 0.6)" }}
              >
                <IoArrowRedoCircleOutline className="text-3xl" />
                <span>Share</span>
              </div> */}
            </SuccessCard>
          }

          {
            currentPage === 1 &&
            <SuccessCard className="flex flex-col">
              <div className="relative">
                <GreenBadge className="absolute top-3 right-3 z-10">
                  Success
                </GreenBadge>
                <Image
                  src="/images/testimonial-4.png"
                  alt="profile"
                  height={382}
                  width={361}
                />
                <div className="absolute bottom-3 right-3">
                  <Overlay style={{ fontSize: "30px", height: "95%" }}>
                    <IoPlay className="cursor-pointer" onClick={() => {
                      setFullVideo(true)
                      setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136018.mp4")
                    }} />
                  </Overlay>
                  <Image
                    src="/images/testimonial-sm-4.png"
                    alt="thumbnail"
                    height={102}
                    width={102}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* <div className="text-white font-semibold text-base mx-2 -mt-3 relative z-10">
              {"Julia has appears on the television show Chuck as lead character"
                .split(" ")
                .map((i: any, index: number) => (
                  <span key={index} className="bg-black py-1">
                    {i}{" "}
                  </span>
                ))}
            </div> */}

              <div className="p-3">
                <Link href={"/"}>
                  <a>
                    <h3 className="mb-3 mt-1">Dwayne Benson</h3>
                  </a>
                </Link>

                <p>
                  The talented Dwayne Benson expresses his gratitude for Explore Talent. Dwayne had been a long time pro-member with Explore Talent, which opened several doors such as a television pilot, several stage productions, and a blockbuster movie with Jennifer Lopez. Dwayne proves that with hard work and perseverance, you can truly make it big in the acting industry.
                </p>
              </div>

              {/* <div
                className="flex items-center gap-1 p-3 mb-2 mt-auto"
                style={{ color: "rgba(60, 60, 67, 0.6)" }}
              >
                <IoArrowRedoCircleOutline className="text-3xl" />
                <span>Share</span>
              </div> */}
            </SuccessCard>
          }


          {/* <SuccessCard className="flex flex-col">
            <div className="relative">
              <GreenBadge className="absolute top-3 right-3 z-10">
                Success
              </GreenBadge>
              <Image
                src="/images/testimonial-5.png"
                alt="profile"
                height={382}
                width={361}
              />
              <div className="absolute bottom-3 right-3">
                <Overlay style={{ fontSize: "30px", height: "95%" }}>
                  <IoPlay className="cursor-pointer" onClick={() => {
                    setFullVideo(true)
                    setUri("https://d11zrb1u0ut884.cloudfront.net/media2/videos/media014/0000145198/136017.mp4")
                  }} />
                </Overlay>
                <Image
                  src="/images/testimonial-sm-5.png"
                  alt="thumbnail"
                  height={102}
                  width={102}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="text-white font-semibold text-base mx-2 -mt-3 relative z-10">
              {"Julia has appears on the television show Chuck as lead character"
                .split(" ")
                .map((i: any, index: number) => (
                  <span key={index} className="bg-black py-1">
                    {i}{" "}
                  </span>
                ))}
            </div>

            <div className="p-3">
              <Link href={"/"}>
                <a>
                  <h3 className="mb-3 mt-1">Alexander Jackson</h3>
                </a>
              </Link>

              <p>
                To anyone who has their doubts with Explore Talent, let Alexander Jackson&apos;s success story put your mind at ease. He has appeared in several productions including the 2016 adaptation of Chekhov&apos;s &ldquo;Seagull&rdquo;, retitled as &ldquo;The New Colossus&rdquo;. His hard work and versatility have led him towards several opportunities in show business. Alexander credits Explore Talent for helping his career grow and is looking to open more doors in the future.
              </p>
            </div>

            <div
              className="flex items-center gap-1 p-3 mb-2 mt-auto"
              style={{ color: "rgba(60, 60, 67, 0.6)" }}
            >
              <IoArrowRedoCircleOutline className="text-3xl" />
              <span>Share</span>
            </div>
          </SuccessCard> */}

          {
            stories?.map((story: any) => (
              <SuccessCard className="flex flex-col" key={story?.id} id={story.id}>
                <div className="relative">
                  <GreenBadge className="absolute top-3 right-3 z-10">
                    Success
                  </GreenBadge>
                  <Link href={`/${story?.talentlogin}`} passHref>
                    <img
                      src={story?.profile_picture}
                      alt="profile"
                      style={{ aspectRatio: 0.66, width: '100%', cursor: 'pointer' }}
                    />
                  </Link>
                </div>

                <div className="p-3">
                  <Link href={`/${story?.talentlogin}`}>
                    <a>
                      <h3 className="mb-3 mt-1">{story?.name}</h3>
                    </a>
                  </Link>

                  <p>
                    {story?.desc?.length > 250 ?

                      <>
                        {story?.desc.slice(0, 250)}<Link href="#"><a className="semibold txt-primary">...read more</a></Link>
                      </>

                      :

                      story?.desc}
                  </p>
                </div>

                {/* <div
                    className="flex items-center gap-1 p-3 mb-2 mt-auto"
                    style={{ color: "rgba(60, 60, 67, 0.6)" }}
                  >
                    <IoArrowRedoCircleOutline className="text-3xl" />
                    <span>Share</span>
                  </div> */}
              </SuccessCard>
            ))
          }

        </Content>



        {/* <Pagination postsPerPage={LIMIT} totalPosts={totalPosts} paginate={paginate} /> */}
      </div>
    </Root>
  );
}
