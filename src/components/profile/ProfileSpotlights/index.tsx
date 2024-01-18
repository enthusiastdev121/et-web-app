import DeleteDialog from "components/DeleteDialog";
import InstaStories from "components/spotlights/InstaStories";
import { DisplaySlide } from "containers/explore/Explore.styled";
import AddSpotlightModal from "containers/spotlights/AddSpotlightModal";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { formatSpotlightsMediaItems } from "network/apiFormatter/spotlights";
import { deleteSpotlightApi, getMySpotlightDataApi } from "network/apis/spotlight";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import styled from "styled-components";
import VideoImageThumbnail from 'react-video-thumbnail-image';
import { SpotlightItemD } from "types/spotlight";
import ZSkel from "components/ZSkel";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PlayCricle } from "iconsax-react";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                lineHeight: 0,
                background: '#FFFFFF',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px 0px 0px 8px',
                marginTop: 20
            }}
            onClick={onClick}
        ><p style={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: '#191919'
        }}>Next <FaArrowRight style={{ color: '#191919' }} className="ml-2" /></p> </div>
    );
}
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                lineHeight: 0,
                background: '#FFFFFF',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
                borderRadius: '0px 8px 8px 0px',
                padding: "22px 15px",
                zIndex: 10,
                width: 'fit-content',
                marginTop: -10
            }}
            onClick={onClick}
        >
            <p style={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: '#191919',
                marginTop: -30
            }}><BsArrowLeftShort className="text-xl" /> Prev</p>
        </div>
    );
}

export default function ProfileSpotlights({ own = false }) {
    const [storiesDialog, setStoriesDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const { token } = useAuth();
    const [page, setPage] = useState(1);
    const [list, setList] = useState<SpotlightItemD[]>([]);
    const [total, setTotal] = useState(0);
    const [addSpotlightDialogue, setAddSpotlightDialogue] = useState(false)
    const [sortBy, setSortBy] = useState('')
    const {
        auth: { authenticated },
    } = useAuth();
    const { profile } = useProfileStore();
    const router = useRouter()
    const [delId, setDelId] = useState(0)
    const [deleteOpen, setDeleteOpen] = useState(false);

    const CreateYourSpotlight = {
        arrows: true,
        infinite: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1049,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const delSpotlight = () => {
        if (!delId) {
            return;
        }
        try {
            deleteSpotlightApi(token, delId);
            TempRemove()
            setDeleteOpen(false)

        } catch (err) {
            console.log("Err", err);
        }
    };

    const TempRemove = () => {
        setList(list.filter((i) => i.id !== delId))
    }

    const fetchList = useCallback(
        async () => {
            if (!token) {
                return;
            }
            try {
                setLoading(true);
                const res = await getMySpotlightDataApi({
                    token,
                });
                const data = res.map((i: any) => formatSpotlightsMediaItems(i));
                setList(data)
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log("Err", err);
            }
        }, [token]);

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return (
        <>
            {
                list?.length > 0 &&
                <Container>
                    <h2 className="profile-box-title txt-base flex items-center gap-3">
                        <PlayCricle className="mt-[2px] text-2xl" /> Spotlights
                    </h2>

                    {
                        loading ?
                            <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", padding: "10px 10px", gap: 20 }} >
                                {[1, 2, 3, 4, 5].map((i) => {
                                    return (
                                        <div key={i} style={{ width: 249, height: 339, position: 'relative', overflow: 'hidden' }}>
                                            <ZSkel />
                                        </div>
                                    );
                                })}
                            </div>
                            :
                            <>
                                <DisplaySlide className="bg-pure txt-base cursor-pointer">

                                    <div className="flex justify-end mb-5">
                                        <button
                                            className="txt-primary font-semibold mr-5"
                                            onClick={() => { setStoriesDialog(true); setActiveIndex(0) }}
                                        >Play All</button>
                                    </div>

                                    <Slider {...CreateYourSpotlight}>

                                        {own ? <SingleCardEvents>
                                            <ImageUpload>
                                                <img src={profile.pic} />
                                                <h2>Create your spotlight</h2>

                                                <div className="add cursor-pointer" onClick={() => router.push('/spotlights/add-spotlight')}>
                                                    <FaPlus style={{ color: '#FFFFFF' }} />
                                                </div>
                                            </ImageUpload>
                                        </SingleCardEvents> : ''}

                                        {list.map((a, index) => {
                                            return (
                                                <SingleCardEvents className="flex-start mr-auto" key={index}>
                                                    <ImageAndAddMore onClick={() => { setStoriesDialog(true); setActiveIndex(index) }}>
                                                        {a.type == 'image' ? <img src={a.url} /> : <VideoImageThumbnail videoUrl={a.url} alt="spotlight image " />}
                                                    </ImageAndAddMore>

                                                    {own && <div className="bin" onClick={() => {
                                                        setDeleteOpen(true)
                                                        setDelId(a.id)
                                                    }}>
                                                        <RiDeleteBin5Fill />
                                                    </div>}
                                                </SingleCardEvents>
                                            )
                                        })}
                                    </Slider>

                                    <InstaStories
                                        own={true}
                                        open={storiesDialog}
                                        onClose={() => setStoriesDialog(false)}
                                        activeIndex={activeIndex}
                                        list={list}
                                        currentId={activeIndex}
                                        onView={(mediaId: any, spotlightId: any) => {
                                            setList(s => {
                                                return s.map((i) => {
                                                    if (i.id === mediaId) {
                                                        const newArray = i?.map((ia) => {
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

                                    <AddSpotlightModal open={addSpotlightDialogue} onClose={() => setAddSpotlightDialogue(false)} onUpdate={(e) => {
                                        // setList((s) => [...s])
                                        fetchList()
                                        setAddSpotlightDialogue(false)
                                    }}></AddSpotlightModal>
                                </DisplaySlide>
                            </>
                    }

                    <DeleteDialog open={deleteOpen} onConfirm={delSpotlight} onClose={() => setDeleteOpen(false)} title="Are you sure you want to delete this ?" />
                </Container>
            }
        </>
    )
}

const SingleCardEvents = styled.div`
  width: 280px; 
  border-radius: 8px;
  margin-right: 10px;
  position: relative;
  width: fit-content !important;

.bin {
    background-color: ${p => p.theme.pure};
    width: fit-content;
    padding: 10px;
    border-radius: 100%;
    position: absolute;
    bottom: -5px;
    right: -5px;
    z-index: 12;
}

.bin:hover {
    color: #eb4444;
    transition: all 0.1s ease;
}

//   .bin {
//     display: none;
//     background-color: ${p => p.theme.pure};
//     width: fit-content;
//     padding: 10px;
//     border-radius: 100%;
//     position: absolute;
//     bottom: -5px;
//     right: -5px;
//     z-index: 12;
//    }

//   &:hover .bin {
//       display: block;
//       color: #eb4444;
//       transition: all 0.3s ease;
//   }
`;

const Container = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  background: ${(p: any) => p.theme.pure};
  padding: 1em 2em 3em 2em;
  border-radius: 5px;

  .slick-track {
    margin-left: 0;
  }

  .kPqhqA .slick-next {
    right: 0;
  }
`;

const ImageAndAddMore = styled.div`
border-radius: 8px;
position: relative;
width: fit-content;
margin: 0 5px;

img{
  border-radius: 8px;
  height: 339px;
  width: 249px;
  object-fit:cover;
}
`;

export const ImageUpload = styled.div`
width: 249px;
border-radius: 8px;
position: relative;
height: 339px;
object-fit:cover;
width: fit-content;
margin: 0 5px;

.add {
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0px;
  background: ${(p) => p.theme.primary};
  box-sizing: border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center
}

img{
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

h2{
  width:66px;
  margin:9px auto;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: ${(p) => p.theme.base}
  bottom: 94.45%;
  }

`;