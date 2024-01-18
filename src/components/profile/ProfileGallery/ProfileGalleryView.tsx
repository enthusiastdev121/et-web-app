import ImageViewPop from "components/ImageViewPop";
import { THEME } from "@/utils/constants/theme";
import Link from "next/link";
import { rgba } from "polished";
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { HiCamera } from "react-icons/hi";
import styled, { AnyStyledComponent } from "styled-components";
import { FeaturedImagesD, IntroVideoD } from "types/profile";
import { BROKEN_IMAGE_FALLBACK } from "@/utils/constants/resources";
import Image from "next/image";
import HeadshotUploader from "../HeadshotUploader";

const DIS = 6;

export default function ProfileGalleryView(props: Props) {
  const { featuredImages, pic, introVideo, own } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [headShotOpen, setHeadShotOpen] = useState(false);
  // console.log("THE PIC IS : -> ", pic);

  const [bigImage, setBigImage] = useState({
    open: false,
    uri: "",
  });

  let fImages: any[] = [];

  if (featuredImages && Object.values(featuredImages).length > 0) {
    fImages = Object.keys(featuredImages)
      .filter((i) => featuredImages[i].uri)
      .map((i) => featuredImages[i].uri);
  }

  let content = <></>;

  if (fImages.length === 0) {
    content = (
      <ProfileOnlyContainer>
        <ProfilePic>
          <CommonPic>
            {pic?.length > 0 ? (
              <img src={pic} onClick={() => setBigImage((s) => ({ ...s, open: true, uri: pic }))} />
            ) : own ? (
              <div
                onClick={() => setHeadShotOpen(true)}
                className="w-full h-full flex flex-col items-center justify-center">
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
                // style={{color: "rgba(60, 60, 67, 0.6)"}}
                >+ Add Headshot</div>
              </div>
            ) : <>
              <img src={BROKEN_IMAGE_FALLBACK} />
            </>}
            {/* {
              pic?.length > 0 ?
                <img src={pic} className="h-fit" alt="user profile pic" /> :
                <div>
                  <img src="/images/profile-pic-placeholder.png" alt="add profile pic" />
                  <button>Add Headshot</button>
                </div>
            } */}
          </CommonPic>
        </ProfilePic>
      </ProfileOnlyContainer>
    );
  } else if (fImages.length === 1) {
    content = (
      <OneContainer>
        <ProfilePic>
          <CommonPic
            onClick={() => setBigImage((s) => ({ ...s, open: true, uri: pic }))}
          >
            {pic?.length > 0 && <img src={pic} />}
          </CommonPic>
        </ProfilePic>
        <OnePic>
          <CommonPic
            onClick={() =>
              setBigImage((s) => ({ ...s, open: true, uri: fImages[0] }))
            }
          >
            <img src={fImages[0]} />
          </CommonPic>
        </OnePic>
      </OneContainer>
    );
  } else if (fImages.length === 2) {
    content = (
      <TwoContainer>
        <div className="leftC">
          <ProfilePic>
            <CommonPic
              onClick={() =>
                setBigImage((s) => ({ ...s, open: true, uri: pic }))
              }
            >
              {pic?.length > 0 && <img src={pic} />}
            </CommonPic>
          </ProfilePic>
        </div>
        <div className="rightC">
          <div className="inner">
            <TwoPic>
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: fImages[0] }))
                }
              >
                <img src={fImages[0]} />
              </CommonPic>
            </TwoPic>
            <TwoPic>
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: fImages[1] }))
                }
              >
                <img src={fImages[1]} />
              </CommonPic>
            </TwoPic>
          </div>
        </div>
      </TwoContainer>
    );
  } else if (fImages.length === 3) {
    content = (
      <ThreeContainer>
        <div className="leftC">
          <ProfilePic>
            <CommonPic
              onClick={() =>
                setBigImage((s) => ({ ...s, open: true, uri: pic }))
              }
            >
              {pic?.length > 0 && <img src={pic} />}
            </CommonPic>
          </ProfilePic>
          <ThreePicLeft>
            <CommonPic
              onClick={() =>
                setBigImage((s) => ({ ...s, open: true, uri: fImages[0] }))
              }
            >
              <img src={fImages[0]} />
            </CommonPic>
          </ThreePicLeft>
        </div>
        <div className="rightC">
          <div className="inner">
            <TwoPic>
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: fImages[1] }))
                }
              >
                <img src={fImages[1]} />
              </CommonPic>
            </TwoPic>
            <TwoPic>
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: fImages[2] }))
                }
              >
                <img src={fImages[2]} />
              </CommonPic>
            </TwoPic>
          </div>
        </div>
      </ThreeContainer>
    );
  } else if (fImages.length === 4) {
    content = (
      <FourContainer>
        <div className="leftC">
          <ProfilePic>
            <CommonPic
              onClick={() =>
                setBigImage((s) => ({ ...s, open: true, uri: pic }))
              }
            >
              {pic?.length > 0 && <img src={pic} />}
            </CommonPic>
          </ProfilePic>
          <ThreePicLeft>
            <CommonPic
              onClick={() =>
                setBigImage((s) => ({ ...s, open: true, uri: fImages[0] }))
              }
            >
              <img src={fImages[0]} />
            </CommonPic>
          </ThreePicLeft>
        </div>
        <div className="rightC">
          <div className="inner">
            <FourPic>
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: fImages[1] }))
                }
              >
                <img src={fImages[1]} />
              </CommonPic>
            </FourPic>
            <FourPic>
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: fImages[2] }))
                }
              >
                <img src={fImages[2]} />
              </CommonPic>
            </FourPic>
            <FourPic>
              <CommonPic
                onClick={() =>
                  setBigImage((s) => ({ ...s, open: true, uri: fImages[3] }))
                }
              >
                <img src={fImages[3]} />
              </CommonPic>
            </FourPic>
          </div>
        </div>
      </FourContainer>
    );
  } else {
    content = (
      <ProfileOnlyContainer>
        <ProfilePic>
          <CommonPic
            onClick={() => setBigImage((s) => ({ ...s, open: true, uri: pic }))}
          >
            <img
              src={`https://d1a3azwbayblep.cloudfront.net/etwatermark.php?image=/media1009/0010096196/2321f301c225944.jpg`}
            />
          </CommonPic>
        </ProfilePic>
      </ProfileOnlyContainer>
    );
  }

  return (
    <Root>
      {content}

      {introVideo?.uri?.length > 0 ? (
        <Link href="#intro-video" passHref>
          <IntroVideoBtn>
            <FaPlay />
            View video greeting
          </IntroVideoBtn>
        </Link>
      ) : (
        ""
      )}
      <ImageViewPop
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
      />

      <HeadshotUploader
        onClose={() => setHeadShotOpen(false)}
        open={headShotOpen}
      />
    </Root>
  );
}

function AddImg({ free }: any) {
  return (
    <div className="add-image flex flex-col rounded-lg items-center justify-center text-center">
      <HiCamera className="text-5xl" />
      <div>Add a featured image</div>
      {!free && (
        <Link href="#">
          <a className="link-text">Upgrade to upload</a>
        </Link>
      )}
    </div>
  );
}

type Props = {
  pic: string;
  isPro: boolean;
  featuredImages: FeaturedImagesD;
  introVideo?: IntroVideoD;
  own?: boolean;
  editable?: boolean;
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
  background-color: #efefef;
  border-radius: 8px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .placeholder {
    height: fit-content;
    width: fit-content;
    margin: auto;
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

const OneContainer = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: ${DIS}px;
`;

const OnePic = styled(FContainer)`
  width: 100%;
  aspect-ratio: 1;
`;

//TWO

const TwoContainer = styled.div`
  width: 420px;
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
