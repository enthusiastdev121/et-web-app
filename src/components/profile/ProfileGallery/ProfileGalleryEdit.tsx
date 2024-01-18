import ImageViewPop from "components/ImageViewPop";
import { THEME } from "@/utils/constants/theme";
import Link from "next/link";
import { rgba } from "polished";
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { HiCamera } from "react-icons/hi";
import { MdDelete, MdImage } from "react-icons/md";
import styled, { AnyStyledComponent } from "styled-components";
import {
  FeaturedImagesD,
  FeaturedImageTypeD,
  IntroVideoD,
} from "types/profile";
import HeadshotUploader from "../HeadshotUploader";
import Image from "next/image";
import FeaturedImageUploader from "../FeaturedImageUploader";
import {
  deleteFeaturedImageApi,
  deleteProfilePicApi,
} from "network/apis/ownProfile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import DeletePhotoModal from "../modals/DeletePhotoModal";
import { Router, useRouter } from "next/router";
import { useEffect } from 'react';

const DIS = 6;

export default function ProfileGalleryEdit(props: Props) {
  const { token, user } = useAuth();
  const { profile, setProfile } = useProfileStore();
  const { featuredImages, pic, isPro, introVideo } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [bigImage, setBigImage] = useState({
    open: false,
    uri: "",
  });
  const [loading, setLoading] = useState(false);
  const [loadingPic, setLoadingPic] = useState(false);
  const [FImgtype, setFImgtype] = useState("");
  const [headShotOpen, setHeadShotOpen] = useState(false);
  const [FImgModalOpen, setFImgModalOpen] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteDialogHeadshot, setDeleteDialogHeadshot] = useState(false);
  const [url, setUrl] = useState("");
  const router = useRouter();
  // const [deleting, setDeleting] = useState(false);

  let fImages: any[] = [];

  if (featuredImages && Object.values(featuredImages).length > 0) {
    fImages = Object.keys(featuredImages)
      .filter((i) => ({
        uri: featuredImages[i].uri,
        type: featuredImages[i].type,
      }))
      .map((i) => ({
        uri: featuredImages[i].uri,
        type: featuredImages[i].type,
      }));
  }

  const removeFeaturedPic = async (type: FeaturedImageTypeD) => {
    try {
      setLoading(true);

      const res = await deleteFeaturedImageApi({
        token,
        id: featuredImages[type].id,
      });

      setLoading(false);

      setProfile((s) => ({
        ...s,
        featuredImages: {
          ...s.featuredImages,
          [type]: { id: 0, uri: "", key: "", type: "" },
        },
      }));

      setDeleteDialog(false);
    } catch (err) {
      setLoading(false);
      console.log("ERR", err);
    }
  };

  const removeProfilePic = async () => {
    try {
      setLoadingPic(true);
      const res = await deleteProfilePicApi({ token });
      setLoadingPic(false);

      setProfile((s) => ({ ...s, pic: "" }));

      setDeleteDialogHeadshot(false);
    } catch (err) {
      setLoadingPic(false);
      console.log("ERR", err);
    }
  };

  useEffect(() => {
    // Check if the 'uploadProfilePic' parameter is present in the query
    const { query } = router;
    if (query.uploadProfilePic == 'true') {
      // If 'uploadProfilePic' is set to 'true', open the popup
      setHeadShotOpen(true);
    }
  }, [router.query]);

  return (
    <Root className="sm:px-0 px-2 ">
      <FourContainer>
        <div className="leftC">
          {/* headshot */}
          <ProfilePic>
            <Actions>
              {pic && (
                <DelBtn
                  onClick={() => {
                    setUrl(pic);
                    setDeleteDialogHeadshot(true);
                  }}
                >
                  <MdDelete />
                </DelBtn>
              )}
              <PicBtn onClick={() => {
                setHeadShotOpen(true)
                // router.push('/upload-profile-pic')
              }}>
                <MdImage />
              </PicBtn>
            </Actions>

            <CommonPic className="overflow-hidden" id="target2">
              {pic?.length > 0 ? (
                <img src={pic} />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div>
                    <Image
                      src="/images/pro.png"
                      alt="add photo"
                      height={105}
                      width={98}
                    />
                  </div>
                  <div
                    className="txt-primary font-medium"
                  // style={{ color: "rgba(60, 60, 67, 0.6)" }}
                  >Add Headshot</div>
                </div>
              )}
            </CommonPic>
          </ProfilePic>

          {/* featured img 1 */}
          <ThreePicLeft>
            <Actions>
              {fImages[0]?.uri && (
                <DelBtn
                  onClick={() => {
                    setUrl(fImages[0]?.uri);
                    setDeleteDialog(true);
                    setFImgtype(fImages[0]?.type);
                  }}
                >
                  <MdDelete />
                </DelBtn>
              )}

              {isPro && (
                <PicBtn
                  onClick={() => {
                    setFImgModalOpen(true);
                    setFImgtype("image1");
                  }}
                >
                  <MdImage />
                </PicBtn>
              )}
            </Actions>
            {fImages[0]?.uri ? (
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: pic }))
                }
              >
                <img src={fImages[0]?.uri} />
              </CommonPic>
            ) : (
              <AddImg isPro={isPro} onAdd={() => { }} />
            )}
          </ThreePicLeft>
        </div>

        <div className="rightC">
          <div className="inner">
            {/* featured img 2 */}
            <FourPic>
              <Actions>
                {fImages[1]?.uri && (
                  <DelBtn
                    onClick={() => {
                      setUrl(fImages[1]?.uri);
                      setDeleteDialog(true);
                      setFImgtype(fImages[1]?.type);
                    }}
                  >
                    <MdDelete />
                  </DelBtn>
                )}

                {isPro && (
                  <PicBtn
                    onClick={() => {
                      setFImgModalOpen(true);
                      setFImgtype("image2");
                    }}
                  >
                    <MdImage />
                  </PicBtn>
                )}
              </Actions>
              {fImages[1]?.uri ? (
                <CommonPic
                  onClick={() =>
                    setBigImage((s) => ({ ...s, open: true, uri: pic }))
                  }
                >
                  <img src={fImages[1]?.uri} />
                </CommonPic>
              ) : (
                <AddImg isPro={isPro} onAdd={() => { }} />
              )}
            </FourPic>

            {/* featured img 3 */}
            <FourPic>
              <Actions>
                {fImages[2]?.uri && (
                  <DelBtn
                    onClick={() => {
                      setUrl(fImages[2]?.uri);
                      setDeleteDialog(true);
                      setFImgtype(fImages[2]?.type);
                    }}
                  >
                    <MdDelete />
                  </DelBtn>
                )}

                {isPro && (
                  <PicBtn
                    onClick={() => {
                      setFImgModalOpen(true);
                      setFImgtype("image3");
                    }}
                  >
                    <MdImage />
                  </PicBtn>
                )}
              </Actions>
              {fImages[2]?.uri ? (
                <CommonPic
                  onClick={() =>
                    setBigImage((s) => ({ ...s, open: true, uri: pic }))
                  }
                >
                  <img src={fImages[2]?.uri} />
                </CommonPic>
              ) : (
                <AddImg isPro={isPro} onAdd={() => { }} />
              )}
            </FourPic>

            {/* featured img 4 */}
            <FourPic>
              <Actions>
                {fImages[3]?.uri && (
                  <DelBtn
                    onClick={() => {
                      setUrl(fImages[3]?.uri);
                      setDeleteDialog(true);
                      setFImgtype(fImages[3]?.type);
                    }}
                  >
                    <MdDelete />
                  </DelBtn>
                )}

                {isPro && (
                  <PicBtn
                    onClick={() => {
                      setFImgModalOpen(true);
                      setFImgtype("image4");
                    }}
                  >
                    <MdImage />
                  </PicBtn>
                )}
              </Actions>
              {fImages[3]?.uri ? (
                <CommonPic
                  onClick={() =>
                    setBigImage((s) => ({ ...s, open: true, uri: pic }))
                  }
                >
                  <img src={fImages[3]?.uri} />
                </CommonPic>
              ) : (
                <AddImg isPro={isPro} onAdd={() => { }} />
              )}
            </FourPic>
          </div>
        </div>
      </FourContainer>

      {/* intro video link */}
      {introVideo?.uri?.length > 0 ? (
        <Link href="#intro-video" passHref>
          <IntroVideoBtn>
            <FaPlay />
            View video greetings
          </IntroVideoBtn>
        </Link>
      ) : (
        <Link href="#intro-video" passHref>
          <IntroVideoBtn>
            <FaPlay />
            Add video greeting
          </IntroVideoBtn>
        </Link>
      )}

      {/* <ImageViewPop
        image={{
          uri: bigImage.uri,
          createdAt: 0,
          hidden: false,
          id: 1,
          name: "",
          primary: false,
          size: 30000,
          caption: "",
        }}
        onClose={() => setBigImage((s) => ({ ...s, open: false }))}
        open={bigImage.open}
      /> */}

      <HeadshotUploader
        onClose={() => setHeadShotOpen(false)}
        open={headShotOpen}
      />
      <FeaturedImageUploader
        onClose={() => setFImgModalOpen(false)}
        open={FImgModalOpen}
        Ftype={FImgtype}
      />

      <DeletePhotoModal
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        url={url}
        deleting={loading}
        onDelete={removeFeaturedPic}
        Ftype={FImgtype}
        type="FeaturedImage"
      />
      <DeletePhotoModal
        open={deleteDialogHeadshot}
        onClose={() => setDeleteDialogHeadshot(false)}
        url={url}
        deleting={loadingPic}
        onDelete={removeProfilePic}
        type="headshot"
      />
    </Root>
  );
}

function AddImg({ isPro, onAdd }: { isPro: boolean; onAdd: () => any }) {
  return (
    <div className="add-image flex flex-col rounded-lg items-center justify-center text-center">
      <HiCamera className="text-5xl" />
      <div>No featured image</div>
      {!isPro ? (
        <Link href="/upgrade-to-pro">
          <a className="link-text">Upgrade to upload</a>
        </Link>
      ) : null}
    </div>
  );
}

type Props = {
  pic: string;
  own?: boolean;
  edit?: boolean;
  isPro: boolean;
  featuredImages: FeaturedImagesD;
  introVideo?: IntroVideoD;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
const ProfilePic = styled.div`
  max-width: 100%;
  aspect-ratio: ${THEME.profilePicRatio};
  position: relative;
  background: #efefef;
  border-radius: 8px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const IntroVideoBtn = styled.div`
  background: ${(p) => rgba(p.theme.base, 0.9)};
  border-radius: 120px;
  color: ${(p) => p.theme.paper};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 16px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.16);
  }
  svg {
    font-size: 12px;
  }
`;

//GLOBAL

const FContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

//PROFILE ONLY
const ProfileOnlyContainer = styled.div`
  max-width: 100%;
  width: 220px;
`;

//One

//TWO

const TwoContainer = styled.div`
  width: 420px;
  max-width: 100%;
  align-self: center;

  display: flex;
  gap: ${DIS}px;
  & > .leftC {
    flex: 0.5;
  }
  & > .rightC {
    flex: 0.5;
    position: relative;

    & > .inner {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${DIS}px;
    }
  }
`;

const TwoPic = styled(FContainer)`
  width: 100%;
  height: 50%;
`;

//THREE

const ThreeContainer = styled(TwoContainer)`
  .leftC {
    display: flex;
    flex-direction: column;
    gap: ${DIS}px;
  }
`;
const ThreePicLeft = styled(FContainer)`
  width: 100%;
  aspect-ratio: 1;
`;

//FOUR

const FourContainer = styled(ThreeContainer)`
  .leftC {
    display: flex;
    flex-direction: column;
    gap: ${DIS}px;
  }
`;
const FourPic = styled(FContainer)`
  width: 100%;
  height: 33.33%;
`;

const CommonPic = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
`;

const Paper = styled.div`
  height: 200px;
  width: 400px;
  background: #fff;
  border-radius: 12px;
`;

const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
  z-index: 7;
`;
const ActionBtn = styled.div`
  height: 40px;
  aspect-ratio: 1;
  border-radius: 120px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  svg {
    font-size: 20px;
  }
`;
const DelBtn = styled(ActionBtn)`
  &:hover {
    background: ${(p) => p.theme.red};
    color: #fff;
  }
`;
const PicBtn = styled(ActionBtn)`
  &:hover {
    background: ${(p) => p.theme.primary};
    color: #fff;
  }
`;
