import { PrimaryBtnOutline, PrimaryBtn } from "@/styles/Btn.styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { AllVideosContainer, Box } from "../styles";
import { AiOutlinePlus } from "react-icons/ai";
import VideoCard from "../../../components/profile/VideoCard";
import { AllVideosSkel } from "../Skel";
import { useAuth } from "context/AuthContext";
import { fetchOwnVideosService } from "network/services/profile";
import { VideoItemD } from "types/profile";
import Button from "components/Button";
import { AddCircle } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";
import TranslatedText from "components/TranslatedText";

const LIMIT = 6;

export default function VideosListing(props: Props) {
  const { own, editable, userId } = props;
  const [dsp, setDsp] = useState("block");
  const [list, setList] = useState<VideoItemD[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);
  const page = useRef(1);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const box_shadow = editable ? "edit-profile-shadow" : "profile-shadow";

  /**  
   OWN FETCHES
  */
  const fetchOwnVideos = useCallback(
    async (more: boolean = false) => {
      try {
        // if (!token) {
        //   return;
        // }

        if (more) {
          setLoadingMore(true);
        } else {
          page.current = 1;
          setLoading(true);
        }

        let res;
        if (userId) {
          res = await fetchOwnVideosService({
            token,
            page: page.current,
            perPage: LIMIT,
            userId: userId,
          });
        } else if (own) {
          res = await fetchOwnVideosService({
            token,
            page: page.current,
            perPage: LIMIT,
          });
        } else {
          return;
        }

        const { total, data } = res;

        if (more) {
          setList((s) => [...s, ...data]);
        } else {
          setList(data);
        }
        setTotal(total);
        setLoading(false);
        setLoadingMore(false);
      } catch (err) {
        console.log("Err", err);
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [token, userId]
  );

  const fetchMoreOwnVideos = useCallback(() => {
    if (list.length < total) {
      page.current = page.current + 1;
      fetchOwnVideos(true);
    }
  }, [fetchOwnVideos, total, list.length]);

  /**  
   DECIDERS
  */
  const fetchMore = useCallback(() => {
    fetchMoreOwnVideos();
  }, [fetchMoreOwnVideos]);

  useEffect(() => {
    fetchOwnVideos();
  }, [fetchOwnVideos]);


  return (
    <>
      {list.length === 0 && editable ? (
        <>
          <Box className="box px-5 py-10 text-center" id="target12">
            <div>
              <img
                src="/images/preview-act.svg"
                alt="video player"
                className="mx-auto"
              />
            </div>
            <h2 className="profile-box-title"><TranslatedText>Video</TranslatedText></h2>
            <p className="profile-box-subtitle">
              <TranslatedText>Add a showreel or videos showcasing your experience</TranslatedText>
            </p>

            <div className="flex flex-col md:items-center">
              <Link href={"/profile/add-video"} passHref>
                <PrimaryBtn className="btn flex items-center justify-center gap-1">
                  <BsPlusLg /> <TranslatedText>Add&nbsp;video</TranslatedText>
                </PrimaryBtn>
              </Link>
            </div>
          </Box>
        </>
      ) : list.length === 0 ? (
        ""
      ) : (
        <AllVideosContainer className={`py-10 px-5 md:px-10 ${box_shadow}`}>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="profile-heading" id="videos">
                <HiOutlineVideoCamera className="text-3xl lg:text-4xl" /> <TranslatedText>Video</TranslatedText>
                ({list?.length})
              </h2>
            </div>

            {editable && (
              <Link href={"/profile/add-video"} passHref>
                <a>
                  <Button primary icon={<AddCircle variant="Bold" />}>
                    <TranslatedText>Add Video</TranslatedText>
                  </Button>
                </a>
              </Link>
            )}
          </div>

          <div className="my-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {!loading ? (
              list.map((item) => (
                <VideoCard
                  key={item.id}
                  {...item}
                  editable={editable && own}
                  onDelete={(id) =>
                    setList((s) => s.filter((i) => i.id !== id))
                  }
                  onUpdate={(d) => {
                    setList((s) => {
                      return s.map((i) => {
                        if (i.id === d.id) {
                          return {
                            ...i,
                            ...d,
                          };
                        } else {
                          return i;
                        }
                      });
                    });
                  }}
                />
              ))
            ) : (
              <AllVideosSkel />
            )}
          </div>

          {!loading && total > list.length && (
            <div className="flex flex-col md:items-center">
              <Button outlined primary loading={loadingMore} onClick={fetchMore}>
                <TranslatedText>Show more</TranslatedText>
              </Button>
            </div>
          )}
        </AllVideosContainer>
      )}
    </>
  );
}

type Props = {
  own: boolean;
  addEnable: boolean;
  editable: boolean;
  userId?: any;
};
