import styled from "styled-components";
import SuccessStories from "../SuccessStories";
import { useAuth } from "context/AuthContext";
import BackToTop from "components/BackToTop";
import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import { FaArrowRight } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { ExploreFeedItemD } from "types/explore";
import { getExploreArticlesApi, getExploreFeedApi } from "network/apis/explore";
import { formatExploreFeedArticleItem, formatExploreFeedPicItem } from "network/apiFormatter/explore";
import PicPost from "./PicPost";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ArticlePost from "./ArticlePost";
import SimpleListSkel from "components/SimpleListSkel";
import { InView, useInView } from "react-intersection-observer";
import { AdSense } from "components/AdSense";

TimeAgo.addDefaultLocale(en);

const LIMIT = 10;
const POST_LIMIT = 3;

export default function AllExploreTalent({ res }: any) {
  const {
    auth: { authenticated },
    token
  } = useAuth();
  const [list, setList] = useState<ExploreFeedItemD[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [lastPage, setlastPage] = useState<number>(1);

  useEffect(() => {
    if (!res?.data) return;
    const data = res?.data?.map((i: any) => formatExploreFeedPicItem(i));
    setlastPage(9999999)
    setList(data);
  }, [res])

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          lineHeight: 0,
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px 0px 0px 8px",
        }}
        onClick={onClick}
      >
        <p
          style={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#191919",
          }}
        >
          {" "}
          <FaArrowRight style={{ color: "#191919" }} className="ml-2" />
        </p>{" "}
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ display: "none" }} onClick={onClick} />;
  }

  const upcomingExplore = {
    arrows: true,
    infinite: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const fetchList = useCallback(
    async () => {

      let active = true;

      try {
        let res: any;
        setLoading(true);

        res = await getExploreFeedApi({
          token,
          page: page,
          perPage: LIMIT,
        });

        setlastPage(99999999)

        const data = res.data.map((i: any) => formatExploreFeedPicItem(i));

        const res2 = await getExploreArticlesApi({
          page: page,
          perPage: POST_LIMIT,
        });

        let newData = data;

        if (res2?.length > 0) {
          const articleData = res2.map((i: any) =>
            formatExploreFeedArticleItem(i),
          );
          newData = [{ type: 'ad' }, ...data.slice(0, 3), { type: 'ad' }, ...articleData, { type: 'ad' }, ...data.slice(3)];
        }


        if (active) {
          setTotal(Number(res.total));

          if (inView) {
            setList((s) => [...s, ...newData]);
          } else {
            setList(newData);
          }

          // setList((s) => [...s, ...newData])
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("Err", err);
      }

      return () => {
        active = false;
      }

    },



    [page, token]
  );

  useEffect(() => {
    if (page === 1) return;
    fetchList();
  }, [fetchList, page]);

  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (!inView) return;

    if (lastPage > page) {
      setPage((prev: number) => prev + 1)
    }
  }, [inView])

  return (
    <Container className="padding-small">
      <BackToTop />
      <Root className="lg:flex gap-10" style={{ maxWidth: "1150px", margin: "0 auto" }}>
        <div className="left">

          {/* <Spotlight /> */}
          {/* <ExploreSpotlight /> */}

          {/* <ShareContent className="px-2 py-3 bg-pure txt-base">
            <ContentMessage className="bg-pure txt-base">
              <img className="main-image" style={{ objectFit: "cover" }} src="https://snusercontent.global.ssl.fastly.net/member-profile-full/21/3938021_10032359.jpg" />
              <input type="text" className="rounded border-2" placeholder="Hey Adam, Want to share something?" />
              <img className="second-image" src="../../images/gallery.png" />
            </ContentMessage>
          </ShareContent> */}

          {/* <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({ });` }} /> */}

          {/* {loading && <SimpleListSkel />} */}
          {list.map(i => {
            if (i.type === 'pic') {
              return (
                <>
                  <PicPost {...i} key={i.id} />
                </>
              )
            } else if (i.type === 'ad') {
              return (
                <>
                  <AdSense {...i} key={i.id} />
                </>
              )
            } else if (i.type === 'article') {
              return (
                <>
                  <ArticlePost {...i} key={i.id} />
                </>
              )
            }
          })}

          <div ref={ref}>
            {
              loading && <SimpleListSkel />
            }
          </div>

          {/* {!loading && total > LIMIT && (
            <div className="flex justify-center pb-6">
              <Skeleton />
              <Pagination
                current={page}
                total={total}
                pageSize={LIMIT}
                onChange={(e) => {
                  // scrollPos.current?.scrollIntoView();
                  setPage(e);
                }}
              />
            </div>
          )} */}
        </div>

        <div></div>

        <aside className="right">
          <Advertisement />

          <div className="mb-5">
            <JobCart />
          </div>
          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div>
            <SuccessStories />
          </div>
        </aside>
      </Root >
    </Container >
  );
}



const Root = styled.div`
  max-width: 100% !important;
`
export const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};

  .left {
    @media (min-width: 1050px) {
      width: 65%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 35%;
    }
  }
`;
/*

 <Feeds>
            <FeedMessage className="px-5 pt-5">
              <FeedHeader>
                <img className="profile-image" src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />
              </FeedHeader>
              <TitleHeader>
                <h3 className="title">
                  <span> Maxx Weissner </span> <FollowButton>Follow</FollowButton>
                </h3>
                <h5 className="txt-base">
                  8 min • <span className="font-semibold">Editor’s</span> <span className="font-semibold txt-primary">Favorite Photo</span>
                </h5>
              </TitleHeader>
              <HiDotsHorizontal style={{ color: "rgba(60, 60, 67, 0.6)", fontSize: "14px", fontWeight: 400, marginLeft: "auto", marginTop: 8 }} />
            </FeedMessage>

            <MainFeedContent>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />

              <div className="flex justify-between items-center px-5 pb-5">
                <span className="flex justify-between items-center">
                  <span
                    className="active-fav block w-fit cursor-pointer"
                  // onClick={() => setFav(!fav)}
                  >
                    <FaRegHeart
                      style={{
                        fontSize: 30.77,
                      }}
                    />
                  </span>
                  <span className="like-title">{"Like"}</span>
                </span>

                <span className="total-like">231 Likes</span>
              </div>
            </MainFeedContent>
          </Feeds>

          <Feeds>
            <FeedMessage className="px-5 pt-5">
              <FeedHeader>
                <img className="profile-image" src="https://snusercontent.global.ssl.fastly.net/member-profile-full/55/3625355_10451425.jpg" />
              </FeedHeader>
              <TitleHeader>
                <h3 className="title">
                  <span> Maxx Weissner </span> <FollowButton>Follow</FollowButton>
                </h3>
                <h5 className="txt-base">
                  8 min • <span className="font-semibold">Editor’s</span> <span className="font-semibold txt-primary">Favorite Photo</span>
                </h5>
              </TitleHeader>
              <HiDotsHorizontal style={{ color: "rgba(60, 60, 67, 0.6)", fontSize: "14px", fontWeight: 400, marginLeft: "auto", marginTop: 8 }} />
            </FeedMessage>

            <MainFeedContent>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/55/3625355_10451425.jpg" />

              <div className="flex justify-between items-center px-5 pb-5">
                <span className="flex justify-between items-center">
                  <span
                    className="active-fav-like block w-fit cursor-pointer"
                  // onClick={() => setFav(!fav)}
                  >
                    <FaHeart
                      style={{
                        fontSize: 30.77,
                        color: "#fff",
                      }}
                    />
                  </span>
                  <span className="like-title">{"Liked"}</span>
                </span>

                <span className="total-like">231 Likes</span>
              </div>
            </MainFeedContent>
          </Feeds>

          <Feeds>
            <FeedMessage className="px-5 pt-5">
              <FeedHeader>
                <img className="profile-image" src="../../images/explor.png" />
              </FeedHeader>
              <TitleHeader>
                <h3 className="title">
                  <span> Maxx Weissner </span> <FollowButton>Follow</FollowButton>
                </h3>
                <h5 className="txt-base">
                  8 min • <span className="font-semibold">Editor’s</span> <span className="font-semibold txt-primary">Favorite Photo</span>
                </h5>
              </TitleHeader>
              <HiDotsHorizontal style={{ color: "rgba(60, 60, 67, 0.6)", fontSize: "14px", fontWeight: 400, marginLeft: "auto", marginTop: 8 }} />
            </FeedMessage>

            <MainFeedContent>
              <img src="../../images/now.png" className="casting-remote" />

              <h1 className="big-title px-5">Now Casting: Our 2022 Curve & Brawn Model Search is BACK + 3 Other Remote Opportunities!</h1>
              <h2 className="small-title px-5 pb-5">Looking for remote opportunities? We’ve got you covered! Check them out and apply today...</h2>

               <div className="flex justify-between items-center">
                <span className="flex justify-between items-center">
                  <span
                    className="active-fav-like block w-fit cursor-pointer"
                  // onClick={() => setFav(!fav)}
                  >
                    <FaHeart style={{
                      fontSize: 30.77,
                      color: '#fff'
                    }} />
                  </span><span className="like-title">{"Liked"}</span></span>

                <span className="total-like">231 Likes</span>
              </div> 
            </MainFeedContent >
          </Feeds >

          <Feeds>
            <FeedMessage className="px-5 pt-5">
              <FeedHeader>
                <img className="profile-image" src="../../images/explor.png" />
              </FeedHeader>
              <TitleHeader>
                <h3 className="title">
                  <span> Maxx Weissner </span> <FollowButton>Follow</FollowButton>
                </h3>
                <h5 className="txt-base">
                  8 min • <span className="font-semibold">Editor’s</span> <span className="font-semibold txt-primary">Favorite Photo</span>
                </h5>
              </TitleHeader>
              <HiDotsHorizontal style={{ color: "rgba(60, 60, 67, 0.6)", fontSize: "14px", fontWeight: 400, marginLeft: "auto", marginTop: 8 }} />
            </FeedMessage>
            <MainFeedContent>
              <img src="../../images/nowcasting.png" className="casting-remote" />

              <h1 className="big-title px-5">Now Casting: Our 2022 Curve & Brawn Model Search is BACK + 3 Other Remote Opportunities!</h1>
              <h2 className="small-title px-5 pb-5">Looking for remote opportunities? We’ve got you covered! Check them out and apply today...</h2>

              {/* <div className="flex justify-between items-center">
                <span className="flex justify-between items-center">
                  <span
                    className="active-fav-like block w-fit cursor-pointer"
                  // onClick={() => setFav(!fav)}
                  >
                    <FaHeart style={{
                      fontSize: 30.77,
                      color: '#fff'
                    }} />
                  </span><span className="like-title">{"Liked"}</span></span>

                <span className="total-like">231 Likes</span>
              </div> 
            </MainFeedContent>
          </Feeds>

          <MatchJobMain>
            <MatchjobExplor>
              <h2 className="txt-base">
                <img src="../../images/star.png" />
                Matched Jobs just for you
              </h2>
            </MatchjobExplor>

            <MatchJobList>
              <Slider {...upcomingExplore}>
                <MatchJobCardContainer>
                  <h3>Mary Poppins Jr. Auditions in Michigan</h3>
                  <h3>Role: “Beth Harrison”</h3>

                  <div className="flex items-center location">
                    <IoLocation className="txt-primary" style={{ marginRight: "7.73px" }} /> Cleveland, OH
                  </div>

                  <div className="flex items-center location">
                    <HiBriefcase className="txt-primary" style={{ marginRight: "7.73px" }} /> Theatre - Non-Equity
                  </div>

                  <button className="apply-btn">Apply</button>
                </MatchJobCardContainer>

                <MatchJobCardContainer>
                  <h3>Mary Poppins Jr. Auditions in Michigan</h3>
                  <h3>Role: “Beth Harrison”</h3>

                  <div className="flex items-center location">
                    <IoLocation className="txt-primary" style={{ marginRight: "7.73px" }} /> Cleveland, OH
                  </div>

                  <div className="flex items-center location">
                    <HiBriefcase className="txt-primary" style={{ marginRight: "7.73px" }} /> Theatre - Non-Equity
                  </div>

                  <button className="apply-btn">Apply</button>
                </MatchJobCardContainer>

                <MatchJobCardContainer>
                  <h3>Mary Poppins Jr. Auditions in Michigan</h3>
                  <h3>Role: “Beth Harrison”</h3>

                  <div className="flex items-center location">
                    <IoLocation className="txt-primary" style={{ marginRight: "7.73px" }} /> Cleveland, OH
                  </div>
                </MainFeedContent>
              </Feeds>

                  <div className="flex items-center location">
                    <HiBriefcase className="txt-primary" style={{ marginRight: "7.73px" }} /> Theatre - Non-Equity
                  </div>

                  <button className="apply-btn">Apply</button>
                </MatchJobCardContainer>

                <MatchJobCardContainer>
                  <h3>Mary Poppins Jr. Auditions in Michigan</h3>
                  <h3>Role: “Beth Harrison”</h3>

                  <div className="flex items-center location">
                    <IoLocation className="txt-primary" style={{ marginRight: "7.73px" }} /> Cleveland, OH
                  </div>

                  <div className="flex items-center location">
                    <HiBriefcase className="txt-primary" style={{ marginRight: "7.73px" }} /> Theatre - Non-Equity
                  </div>

                  <button className="apply-btn">Apply</button>
                </MatchJobCardContainer>

                <MatchJobCardContainer>
                  <h3>Mary Poppins Jr. Auditions in Michigan</h3>
                  <h3>Role: “Beth Harrison”</h3>

                  <div className="flex items-center location">
                    <IoLocation className="txt-primary" style={{ marginRight: "7.73px" }} /> Cleveland, OH
                  </div>

                  <div className="flex items-center location">
                    <HiBriefcase className="txt-primary" style={{ marginRight: "7.73px" }} /> Theatre - Non-Equity
                  </div>

                  <button className="apply-btn">Apply</button>
                </MatchJobCardContainer>
              </Slider>
            </MatchJobList>
          </MatchJobMain>

          <Feeds>
            <FeedMessage className="px-5 pt-5">
              <FeedHeader>
                <img className="profile-image" src="https://snusercontent.global.ssl.fastly.net/member-profile-full/21/3938021_10032359.jpg" />
              </FeedHeader>
              <TitleHeader>
                <h3 className="title">
                  Maxx Weissner<FollowButton>Follow</FollowButton>
                </h3>
                <h5 className="txt-base">
                  8 min • <span className="font-semibold">Editor’s</span> <span className="font-semibold txt-primary">Favorite Photo</span>
                </h5>
              </TitleHeader>
              <HiDotsHorizontal style={{ color: "rgba(60, 60, 67, 0.6)", fontSize: "14px", fontWeight: 400, marginLeft: "auto", marginTop: 8 }} />
            </FeedMessage>

            <MainFeedContent>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/21/3938021_10032359.jpg" />

              <div className="flex justify-between items-center px-5 pb-5">
                <span className="flex justify-between items-center">
                  <span
                    className="active-fav-like block w-fit cursor-pointer"
                  // onClick={() => setFav(!fav)}
                  >
                    <FaHeart
                      style={{
                        fontSize: 30.77,
                        color: "#fff",
                      }}
                    />
                  </span>
                  <span className="like-title">{"Liked"}</span>
                </span>

                <span className="total-like">231 Likes</span>
              </div>
            </MainFeedContent>
          </Feeds>
        </div>

        <aside className="right">
          <Advertisement />

*/