import Button from "components/Button";
import { useProfileStore } from "context/ProfileStore";
import React, { useEffect, useState } from "react";
import {
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmRight,
  HiPencil,
} from "react-icons/hi";
import { IoClose, IoTrashBin } from "react-icons/io5";
import styled from "styled-components";
import { UserProfileD } from "types/own";
import { PhotoItemD } from "types/profile";
import { getMonth, formatTime } from "../../../utils/helper";
import Image from "next/image";
import { useRef } from "react";
import { deletePhotoApi, updatePhotoApi } from "network/apis/ownProfile";
import { useAuth } from "context/AuthContext";
import DeletePhotoModal from "../modals/DeletePhotoModal";
import { AiOutlineFullscreen } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";
import { Textarea } from "components/Input";

export default function PhotoSlider(props: Props) {
  const {
    initialList,
    open,
    initialIndex = 0,
    onClose,
    setList,
    list,
    own = false,
    editable,
    profile,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { token } = useAuth();
  const [openEdit, setOpenEdit] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [leftHidden, setLeftHidden] = useState(false);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [editing, setEditing] = useState(false);
  const [captionLoading, setCaptionLoading] = useState(false);



  useEffect(() => {
    if (typeof window !== undefined) {
      if (open) {
        setCurrentIndex(initialIndex);
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
        setCurrentIndex(-1);
      }
    }
  }, [open, initialIndex]);

  const activeNode: PhotoItemD = initialList[currentIndex];
  const [caption, setCaption] = useState(activeNode?.caption || "");

  const onNext = () => {
    if (currentIndex + 1 < initialList.length) {
      setCurrentIndex((s) => s + 1);
    }
  };
  const onPrev = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((s) => s - 1);
    }
  };
  const onThird = () => {
    if (currentIndex + 2 < initialList.length) {
      setCurrentIndex((s) => s + 2);
    }
  };
  const getDateTime = (createdAt: number) => {
    const d = new Date(createdAt);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let monthInWord = getMonth(month);
    let time = formatTime(createdAt.toString());

    return `${monthInWord} ${date}, ${year} • ${time}`;
  };

  useEffect(() => {
    setCaption(activeNode?.caption);
  }, [activeNode]);

  // UPDATE CAPTION
  const updateCaption = async () => {
    try {
      const raw = new FormData();
      raw.append("caption", caption);
      setCaptionLoading(true);
      const res = await updatePhotoApi({
        token,
        id: activeNode?.id,
        raw: raw,
      });
      setCaptionLoading(false);
      setOpenEdit(false);
      setList((s) =>
        s.map((item) =>
          item.id === activeNode?.id ? { ...item, caption: caption } : item
        )
      );
    } catch (err) {
      setCaptionLoading(false);
      console.log("EE", err);
    }
  };
  const finish = () => {
    updateCaption();
    setEditing(false);
  };


  // DELETE PHOTO
  // FIXME: update photolisting api or photo count in profile
  const deleteImage = async () => {
  
    try {
      setDeleting(true);
      const res = await deletePhotoApi({ token, id: activeNode?.id });
      setDeleting(false);
      setDeleteDialog(false);
      setList((s) => s.filter((item) => item?.id !== activeNode?.id));

      if(currentIndex + 1 === list.length) {
        setCurrentIndex(currentIndex-1);
      }
    } catch (err) {
      setDeleting(false);
      console.log("Err", err);
    }
  };

  // close popup when all photos deleted
  useEffect(()=> {
    if(list.length === 0){
      onClose();
    }
  }, [list]);

  return (
    <>
      {open && (
        <Root className="fixed w-full top-0 left-0 no-scroll">
          <div className="flex h-full w-full flex-col md:flex-row">
            {/* photo and controls section */}
            <ImageContainer
              ht={leftHidden ? "100%" : "80%"}
              // height: `${leftHidden ? "100%" : "80%"}`
              className="bg-black md:flex-1 relative backdrop-blur-lg w-full h-4/5 sm:h-full"
              style={{
                background: "rgba(0, 0, 0, 0.95)",
              }}
            >
              {/* CONTROLS */}
              {/* TODO: discuss wheather to show controls in fullscreen mode  */}
              <CloseBtn className="hover:bg-red-500" onClick={onClose}>
                <IoClose />
              </CloseBtn>

              {currentIndex !== 0 && (
                <LeftBtn onClick={onPrev}>
                  <HiOutlineArrowSmLeft />
                </LeftBtn>
              )}

              {currentIndex + 1 < initialList.length && (
                <RightBtn onClick={onNext}>
                  <HiOutlineArrowSmRight />
                </RightBtn>
              )}

              <RightTopOneBtn
                onClick={() => {
                  setLeftHidden(!leftHidden);
                }}
              >
                {!leftHidden ? <AiOutlineFullscreen /> : <MdCloseFullscreen />}
              </RightTopOneBtn>

              {editable && (
                <RightTopTwoBtn
                  onClick={() => {
                    setDeleteDialog(true);
                  }}
                >
                  <IoTrashBin />
                </RightTopTwoBtn>
              )}

              {/* IMAGE */}
              <MainImg
                className="w-full h-full flex items-center"
                leftHidden={leftHidden}
              >
                {currentIndex !== -1 && (
                  <img
                    src={activeNode?.uri}
                    className="h-full w-full object-contain"
                  />
                )}
              </MainImg>
            </ImageContainer>

            {/* info section */}
            {!leftHidden && (
              <div
                className="md:w-[360px] w-full bg-white p-5 flex flex-col h-1/5 sm:h-full"
                style={{ minHeight: "10vh" }}
              >
                <UserInfo className="pb-2 sm:pb-0">
                  <img src={profile?.pic} alt="profile pic" />
                  <div>
                    <h4 className="txt-link font-semibold">
                      {profile?.fname + " " + profile?.lname}
                    </h4>
                    {activeNode?.createdAt && (
                      <div className="text-sm txt-secondary">
                        {getDateTime(activeNode?.createdAt)}
                      </div>
                    )}
                  </div>
                </UserInfo>

                <Caption className="text-sm">
                  {!own ? (
                    <>
                      {caption?.length > 0 && (
                        <div className="mb-3 mt-5">{caption}</div>
                      )}
                    </>
                  ) : (
                    <>
                      {openEdit ? (
                        <div>
                          <Textarea
                            className="w-full mt-5"
                            placeholder="Add image caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                          />
                        </div>
                      ) : (
                        <div className="mt-5">
                          {caption || <i>No Caption</i>}
                        </div>
                      )}
                    </>
                  )}

                  {own && editable ? (
                    openEdit ? (
                      <>
                        <div className="flex gap-1 mt-3">
                          <Button
                            primary
                            loading={captionLoading}
                            onClick={() => {
                              updateCaption();
                            }}
                          >
                            Save
                          </Button>

                          <Button
                            primary
                            red
                            onClick={() => {
                              setOpenEdit(false);
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="mt-3">
                        <Button
                          primary
                          light
                          icon={<HiPencil />}
                          onClick={() => {
                            setOpenEdit(true);
                          }}
                        >
                          {caption ? "Edit caption" : "Add caption"}
                        </Button>
                      </div>
                    )
                  ) : null}
                  {/* {openEdit && (
                    <div className="mt-3">
                      <textarea className="border-2 rounded p-2 w-full h-fit" style={{ minHeight: "200px" }} value={caption} onChange={(e) => setCaption(e.target.value)} />
                      <button
                        className="btn border-2 border-blue-500 text-blue-500"
                        onClick={() => {
                          finish();
                          setOpenEdit(false);
                        }}
                      >
                        Done
                      </button>
                    </div>
                  )} */}
                </Caption>

                <hr className="my-5 hidden md:block" />

                <div className="hidden md:flex items-center gap-5 txt-secondary">
                  {/* <button className="flex items-center gap-3">
                    <Image src="/images/heart-circle.png" height={35} width={35} alt="heart" />
                    Like
                  </button>
                  <button className="flex items-center gap-3">
                    <Image src="/images/arrow-circle.png" height={35} width={35} alt="heart" /> Share
                  </button> */}
                </div>

                <div className="hidden md:block mt-auto">
                  <hr className="my-5" />
                  <div className="font-semibold mb-2">Photos</div>
                  <NextPhotos className="grid grid-cols-3 gap-2">
                    <img
                      src={initialList[currentIndex]?.uri}
                      alt=""
                      className="active"
                    />
                    <img
                      src={initialList[currentIndex + 1]?.uri}
                      alt=""
                      onClick={onNext}
                    />
                    <img
                      src={initialList[currentIndex + 2]?.uri}
                      alt=""
                      onClick={onThird}
                    />
                  </NextPhotos>
                </div>
              </div>
            )}
          </div>

          {/* delete photo modal */}
          <DeletePhotoModal
            open={deleteDialog}
            onClose={() => setDeleteDialog(false)}
            url={activeNode?.uri}
            deleting={deleting}
            onDelete={deleteImage}
            type="headshot"
          />
        </Root>
      )}
    </>
  );
}

type Props = {
  initialList: PhotoItemD[];
  onReachEnd: () => any;
  endNumber?: number;
  user?: UserProfileD;
  editable?: boolean;
  initialIndex?: number;
  open: boolean;
  onClose: () => any;
  own?: boolean;
  profile: any;
  setList: React.Dispatch<React.SetStateAction<PhotoItemD[]>>;
  list: any;
};

const Root = styled.div`
  z-index: 50;
  min-height: 100vh;
  height: 100vh;
  overflow-y: scroll;
  background-color: white;

  @media (max-width: 490px) {
    height: 110vh;
  }
`;

const ImageContainer = styled.div<{ ht: any }>`
  @media (max-width: 490px) {
    height: ${(p: any) => p.ht};
  }
`;

const MainImg = styled.div<{ leftHidden: boolean }>`
  img {
    @media (max-width: 490px) {
      margin-top: ${(p: any) => (p.leftHidden ? "-10vh" : "")};
    }
  }
`;

const CloseBtn = styled.div`
  height: 42px;
  top: 10px;
  left: 10px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 120px;
  position: absolute;
  transition: all 0.2s;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  cursor: pointer;
`;
const NavBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 42px;
  aspect-ratio: 1;
  border-radius: 120px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: #3b82f6;
  }
`;
const RightBtn = styled(NavBtn)`
  right: 10px;
`;
const RightTopOneBtn = styled(NavBtn)`
  right: 10px;
  top: 30px;
`;
const RightTopTwoBtn = styled(NavBtn)`
  right: 10px;
  top: 80px;
`;
const LeftBtn = styled(NavBtn)`
  left: 10px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 36px;
    aspect-ratio: 1;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
const Caption = styled.div``;

const NextPhotos = styled.div`
  .active {
    border: 2px solid ${(p: any) => p.theme.primary};
  }
  img {
    cursor: pointer;
    border: 2px solid #fff;
  }
  img:hover {
    border: 2px solid ${(p: any) => p.theme.primary};
    transition: all 0.2s ease;
  }
`;
