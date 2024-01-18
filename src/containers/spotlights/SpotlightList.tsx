import styled from "styled-components";
import { useAuth } from "context/AuthContext";
import { useCallback, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import InstaStories from 'components/spotlights/InstaStories';
import { spotlightDataApi } from "network/apis/spotlight";
import { is, it } from "date-fns/locale";
import { formatSpotlights } from "network/apiFormatter/spotlights";
import { SpotlightItemD } from "types/spotlight";
import Height from "containers/CompleteSignup/slides/Height";
import Pagination from "components/Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Skel from "./Skel";
import index from "pages/spotlights";
import { debounce } from "lodash";
import VideoImageThumbnail from 'react-video-thumbnail-image';

export default function SpotlightListMain() {
    const LIMIT = 20;
    const [storiesDialog, setStoriesDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState();
    const { token } = useAuth();
    const [page, setPage] = useState(1);
    const [dataAry, setDataAry] = useState([])
    const [list, setList] = useState<SpotlightItemD[]>([]);
    const [total, setTotal] = useState(0);
    const [sortBy, setSortBy] = useState('')
    const [searchstring, setsearchstring] = useState("")
    const [selectedTab, setSelectedTab] = useState(1);
    const {
        auth: { authenticated },
    } = useAuth();
    const [type, setType] = useState("all")

    useEffect(() => {
        console.log('Og list is: ', list)
    }, [list])

    // const fetchList = useCallback(

    //     debounce(async (more = false) => {
    //         try {
    //             setLoading(true);
    //             const res = await spotlightDataApi({
    //                 token,
    //                 page: page,
    //                 perPage: LIMIT,
    //                 sortBy: sortBy,
    //                 searchstring
    //             });
    //             const data = res.data.map((i: any) => formatSpotlights(i));
    //             setTotal(Number(res.total));
    //             setList(data);
    //             setLoading(false);
    //         } catch (err) {
    //             setLoading(false);
    //             console.log("Err", err);
    //         }
    //     }, 500)
    //     , [token, sortBy, page, searchstring]);

    // const [selectedTab, setSelectedTab] = useState(1);

    // useEffect(() => {
    //     fetchList();
    // }, [fetchList])

    useEffect(() => {
        let active = true;
        const fetchList = debounce(async (more = false) => {
            try {
                setLoading(true);
                const res = await spotlightDataApi({
                    token,
                    page: page,
                    perPage: LIMIT,
                    sortBy: sortBy,
                    searchstring
                });
                const data = res.data.map((i: any) => formatSpotlights(i));
                if (active) {
                    setTotal(Number(res.total));
                }
                if (active) {
                    setList(data);
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log("Err", err);
            }
        }, 500)

        fetchList();

        return () => {
            active = false;
        }
    }, [token, sortBy, page, searchstring])

    return (
        <main>
            <div className="flex align-top justify-start px-4 md:px-0">
                <div className='md:hidden flex justify-center items-center gap-2 cursor-pointer w-24' onClick={() => { setStoriesDialog(true); setActiveIndex(0) }}>
                    <span className=' text-center text-sm txt-primary'>Play all</span>
                    <Image
                        src="/svg/play.svg"
                        height={15}
                        width={13}
                        alt="play"
                        priority
                    />
                </div>
            </div>

            <Container style={{ display: 'flex', paddingBottom: 50 }}>
                <main className="lg:flex gap-10 w-[100%]">
                    <div className='w-[100%]'>
                        <div className="lg:flex justify-between items-center md:px-0 px-4 w-[100%]">

                            {/* TABS */}
                            <TabContainer>
                                <div
                                    className={`${selectedTab == 1 ? "selected_tab" : ""} tab_following`}
                                    onClick={() => {
                                        setSelectedTab(1);
                                        setSortBy('')
                                    }}
                                >
                                    All <span>{sortBy === '' ? list.length : ''}</span>
                                </div>

                                <div
                                    className={`${selectedTab == 3 ? "selected_tab" : ""} tab_following`}
                                    onClick={() => {
                                        setSelectedTab(3);
                                        setSortBy('friends')
                                    }}
                                >
                                    Connections <span>{sortBy === 'friends' ? list.length : ''}</span>
                                </div>

                                <div
                                    className={`${selectedTab == 2 ? "selected_tab" : ""} tab_following`}
                                    onClick={() => {
                                        setSelectedTab(2);
                                        setSortBy('followers')
                                    }}
                                >
                                    Followers <span>{sortBy === 'followers' ? list.length : ''}</span>
                                </div>

                                <div
                                    className={`${selectedTab == 4 ? "selected_tab" : ""} tab_following`}
                                    onClick={() => {
                                        setSelectedTab(4);
                                        setSortBy('following')
                                    }}
                                >
                                    Following <span>{sortBy === 'following' ? list.length : ''}</span>
                                </div>
                            </TabContainer>

                            {/* SEARCH AND PLAY ALL */}
                            <div className="relative 2xl:col-span-2 lg:mb-0 mb-10 flex justify-between gap-6">
                                <AiOutlineSearch className="absolute left-3 opacity-50" style={{ top: "12px", fontSize: 20, color: "rgba(60, 60, 67, 0.6)" }} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="block w-full text-inherit bg-pure"
                                    style={{
                                        padding: "0.5em 2.5em",
                                        outline: "none",
                                        border: "1px solid #E5E7EB",
                                        borderRadius: "100px",
                                    }}
                                    onChange={e => {
                                        setsearchstring(e.target.value)
                                    }}
                                />

                                <div className='hidden md:flex justify-center items-center gap-2 cursor-pointer w-32' onClick={() => {
                                    setStoriesDialog(true);
                                    setActiveIndex(0)
                                }}>
                                    <span className='md:text-left text-center' style={{ color: '#0070F4' }}>Play all</span>
                                    <Image
                                        src="/svg/play.svg"
                                        height={19}
                                        width={17}
                                        alt="play"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>


                        {/* ****************************  Card Section *************************** */}
                        {
                            loading ? (
                                <>
                                    <Skel />
                                </>
                            )
                                : (
                                    <div className='min-h-[350px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-3'>
                                        {list.map((a, index) => {
                                            return (
                                                <>
                                                    <Card key={index} onClick={() => { setStoriesDialog(true); setActiveIndex(index) }} >
                                                        {/* <StyledImg src={a.items[0].url}
                                                            width={204}
                                                            height={361} /> */}
                                                        <PicBox>
                                                            {
                                                                a?.items[a.items.length - 1].type == 'image' ?
                                                                    <img src={a?.items[a.items.length - 1].url} /> :
                                                                    <VideoImageThumbnail videoUrl={a?.items[a.items.length - 1].url} alt="spotlight image " />
                                                            }
                                                        </PicBox>
                                                        <div className='flex justify-center items-center absolute left-0 bottom-0 gap-2 ml-1 mb-1'>
                                                            <UserImageCard>
                                                                <UserImg src={a.pic === null ? '/images/user_profile.png' : a.pic}
                                                                    width={28}
                                                                    height={28} className="object-cover" />
                                                            </UserImageCard>
                                                            <p className='font-semibold text-xs text-black bg-white p-1 rounded'>{a?.name}</p>
                                                        </div>
                                                    </Card>
                                                </>
                                            )
                                        })}
                                    </div>
                                )
                        }

                        {!loading && total > LIMIT && (
                            <div className="flex justify-center py-6 testclass">
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
                        )}
                    </div>
                </main>
                {/* popup Stories section start  */}
                <InstaStories
                    open={storiesDialog}
                    onClose={() => {
                        setStoriesDialog(false)
                    }}
                    activeIndex={activeIndex}
                    list={list}
                    onView={(mediaId: any, spotlightId: any) => {
                        setList(s => {
                            return s.map((i) => {
                                if (i.id === mediaId) {
                                    const newArray = i.items.map((ia) => {
                                        if (spotlightId === ia.id) {
                                            return {
                                                ...ia,
                                                isView: false
                                            }
                                        } else {
                                            return ia
                                        }
                                    })
                                    return {
                                        ...i,
                                        items: newArray
                                    }
                                } else {
                                    return i
                                }
                            })
                        })
                    }
                    }>
                </InstaStories>
                {/* popup Stories section end  */}
            </Container >
        </main>

    );
}

const PicBox = styled.div`
    position: relative;
    aspect-ratio: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    object-fit: cover;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

  main {
    background-color: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};
  }
  .left {
    @media (min-width: 1050px) {
      width: 66.66%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      /* width: 30%; */
    }
  }

  .add-btn {
    width: 232px;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    background: #e4effa;
    border-radius: 200px;
    span {
      margin-left: 7px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${p => p.theme.primary};
    }
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${p => p.theme.base};
  }
`;
const TabContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    /* display: grid; */
  }

  .tab_following {
    padding: 8px 10px; 
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${p => p.theme.base};
    cursor: pointer;

    span {
      opacity: 0.6;
    }
  }
  .selected_tab {
    background: ${p => p.theme.primary};
    border-radius: 100px;
    color: #ffffff;
    cursor: pointer;
  }
`;
const Card = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    aspect-ratio: 0.5626;
    cursor: pointer;
`
const StyledImg = styled.img`
    position: relative;
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
`
const UserImageCard = styled.div`
    border: 2px solid #0070F4;
    border-radius: 50%;
    padding: 2px;
    background: transparent;
`
const UserImg = styled.img`
    border-radius: 50%;
    object-fit: cover;
    height: 28px;
    width: 28px;
    object-position: top;
`

