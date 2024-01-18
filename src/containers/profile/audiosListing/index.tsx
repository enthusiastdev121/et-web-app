import { PrimaryBtn, PrimaryBtnOutline } from "@/styles/Btn.styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { AllAudiosContainer, Box } from "../styles";
import AudioCard from "../../../components/profile/AudioCard";
import { AudiosSkel } from "../Skel";
import { AudioItemD } from "types/profile";
import { useAuth } from "context/AuthContext";
import { fetchOwnAudiosService } from "network/services/profile";
import Button from "components/Button";
import Link from "next/link";
import { AddCircle } from "iconsax-react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import TranslatedText from "components/TranslatedText";

const LIMIT = 8;

export default function AudiosListing(props: Props) {
  const { own, editable, userId } = props;
  const [dsp, setDsp] = useState("block");
  const [list, setList] = useState<AudioItemD[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);
  const page = useRef(1);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const box_shadow = editable ? "edit-profile-shadow" : "profile-shadow";

  /**  
   OWN FETCHES
  */
  const fetchOwnAudios = useCallback(
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
          res = await fetchOwnAudiosService({
            token,
            page: page.current,
            perPage: LIMIT,
            userId: userId,
          });
        } else if (own) {
          res = await fetchOwnAudiosService({
            token,
            page: page.current,
            perPage: LIMIT,
          });
        } else {
          return;
        }

        let { total, data } = res;

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

  const fetchMoreOwnAudios = useCallback(() => {
    if (list.length < total) {
      page.current = page.current + 1;
      fetchOwnAudios(true);
    }
  }, [fetchOwnAudios, total, list.length]);

  /**  
   DECIDERS
  */
  const fetchMore = useCallback(() => {
    fetchMoreOwnAudios();
  }, [fetchMoreOwnAudios]);

  useEffect(() => {
    fetchOwnAudios();
  }, [fetchOwnAudios]);

  // console.log("Audios list: ", list);

  return (
    <>
      {list.length === 0 && editable ? (
        <>
          <Box className="px-5 py-10 text-center" id="target13">
            <div>
              <Image
                src="/images/microphone.png"
                alt="microphone"
                height={90}
                width={90}
              />
            </div>
            <h2 className="profile-box-title"><TranslatedText>Audio</TranslatedText></h2>
            <p className="profile-box-subtitle">
              <TranslatedText>Add an audio track such as a music or voice-over track.</TranslatedText>
            </p>

            <div className="flex flex-col md:items-center">
              <Link href={"/profile/add-audio"} passHref>
                <PrimaryBtn className="btn flex items-center justify-center gap-1">
                  <BsPlusLg /> <TranslatedText>Add&nbsp;audio&nbsp;track</TranslatedText>
                </PrimaryBtn>
              </Link>
            </div>
          </Box>
        </>
      ) : list.length === 0 ? (
        ""
      ) : (
        <AllAudiosContainer
          className={`py-10 px-5 md:px-10 ${box_shadow}`}
          id="audios"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="profile-heading">
                <HiOutlineVolumeUp className="text-3xl lg:text-4xl" /> <TranslatedText>Audio</TranslatedText> (
                {list.length})
              </h2>
            </div>
            {editable && (
              <Link href={"/profile/add-audio"} passHref>
                <a>
                  <Button primary icon={<AddCircle variant="Bold" />}>
                    <TranslatedText>Add Audio</TranslatedText>
                  </Button>
                </a>
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-3">
            {!loading ? (
              list.map((item: any) => {
                return (
                  <AudioCard
                    key={item.id}
                    {...item}
                    edit={editable}
                    own={own}
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
                );
              })
            ) : (
              <AudiosSkel />
            )}
          </div>

          {!loading && total > list.length && (
            <div className="flex flex-col md:items-center">
              <PrimaryBtnOutline
                className="btn"
                onClick={() => {
                  fetchMore();
                }}
              >
                <TranslatedText>Show&nbsp;more</TranslatedText>
              </PrimaryBtnOutline>
            </div>
          )}
        </AllAudiosContainer>
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
