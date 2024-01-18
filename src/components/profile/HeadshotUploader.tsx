import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { useProfileStore } from "context/ProfileStore";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HeadshotInstructions from "./HeadshotInstructions";

import { THEME } from "@/utils/constants/theme";
import Button from "components/Button";
import Image from "next/image";
import { iconBtnCommon } from "components/Styles";
import { IoClose } from "react-icons/io5";
import { formatApiImage } from "@/utils/helper";
import { useAuth } from "context/AuthContext";
import { addProfilePicApi } from "network/apis/ownProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function HeadshotUploader(props: Props) {
  const { onClose, open, passedImage } = props;
  const cropRef = useRef();
  const { profile, setProfile } = useProfileStore();
  const [showIntro, setShowIntro] = useState(profile.pic ? false : true);
  const [localFile, setLocalFile] = useState<any>(null);
  const [imageUri, setImageUri] = useState("");
  const [loading, setLoading] = useState(false);

  const [localPic, setLocalPic] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { token, user } = useAuth();

  const [cropper, setCropper] = useState<any>();

  useEffect(() => {
    if (profile.pic || passedImage) {
      setShowIntro(false);
      if (passedImage) {
        setImageUri(passedImage);
      }
    } else {
      setShowIntro(true);
    }
  }, [open, profile.pic, passedImage]);

  const onPick = (e: any) => {
    if (e.target?.files.length > 0) {
      setLocalFile(e.target.files[0]);
    }
    e.target.value = null;
  };

  useEffect(() => {
    if (localFile) {
      setImageUri(URL.createObjectURL(localFile));
    }
  }, [localFile]);

  const onUpload = async () => {
    cropper.getCroppedCanvas().toBlob(async (b: any) => {
      try {
        console.log(b);

        // const imageObj = formatApiImage(image);

        // if (Number(image.size / 1048576) >= 5) {
        //   toast.error("Image size must be less than 5 MB", {
        //     position: "top-center",
        //   });
        //   return;
        // }

        const raw = new FormData();
        raw.append("talentnum", user.talentnum);
        raw.append("type", "2");
        raw.append("file", b);
        setLoading(true);

        const res = await addProfilePicApi(token, raw);
        if (res && res.bam_media_path_full) {
          setProfile((s) => ({ ...s, pic: res.bam_media_path_full }));
          setLoading(false);
          onClose();
        } else {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log("ERR", err);
      }
    });
  };

  return (
    <>
      <ModalAnimated open={open} onClose={onClose}>
        <ToastContainer className="Toastify" />
        <Paper
          // style={{ maxHeight: "90vh", overflowY: "auto" }}
          style={{ maxHeight: "90vh"}}
          className="no-scroll test-class-one px-2"
        >
          {showIntro ? (
            <>
              <HeadshotInstructions
                onFinish={() => setShowIntro(false)}
                onClose={onClose}
              />
            </>
          ) : (
            <>
              <CloseBtn className="txt-base mt-1"
                onClick={() => {
                  onClose();
                }}
              >
                <IoClose size={THEME.iconSize.root} />
              </CloseBtn>

              <div className="mt-5 mx-10 ">
                <h4 className="font-bold text-2xl ">Add a headshot</h4> 
                {localFile ? (
                  <div
                    style={{
                      maxWidth: 600,
                      width: "100%",
                      margin: "auto",
                      aspectRatio: THEME.profilePicRatio,
                    }}
                  >
                    <Cropper
                      style={{ height: 250, width: "100%" }}
                      src={imageUri}
                      aspectRatio={THEME.profilePicRatio}
                      guides={false}
                      crop={(e) => console.log("III", e)}
                      ref={cropRef}
                      onInitialized={(instance) => {
                        setCropper(instance);
                      }}
                    />
                  </div>
                ) : (
                  <div className="photo-container-outer my-3 lg:my-10 mx-auto ">
                    <div className="photo-container-inner flex items-center justify-center relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={onPick}
                        className="w-full h-full inline-block opacity-0 absolute top-0 left-0 z-10"
                      />
                      <div
                        style={{ height: "250px" }}
                        className="flex items-center flex-col justify-center"
                      >
                        <Image
                          src="/images/pro.png"
                          alt="add photo"
                          height={105}
                          width={98}
                        />

                        <div className="txt-link mt-3  font-semibold">
                          <span>+</span> Select photo
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <ul className="flex flex-col text-left items-start gap-1 lg:gap-2 text-sm md:text-base pb-4">
                  <li>
                    <span className="inline-block translate-y-1.5">
                      <Image
                        src="/svg/green-tick-fill.svg"
                        alt="tick"
                        height={24}
                        width={24}
                      />
                    </span>{" "}
                    Make sure you’re looking straight to the camera
                  </li>

                  <li>
                    <span className="inline-block translate-y-1.5">
                      <Image
                        src="/svg/green-tick-fill.svg"
                        alt="tick"
                        height={24}
                        width={24}
                      />
                    </span>{" "}
                    User proper lighting & plain background
                  </li>

                  <li>
                    <span className="inline-block translate-y-1.5">
                      <Image
                        src="/svg/red-tick-fill.svg"
                        alt="tick"
                        height={24}
                        width={24}
                      />
                    </span>{" "}
                    Don’t user filters, effects, don’t wear hats & sunnies
                  </li>

                  <li
                    className="txt-link cursor-pointer"
                    onClick={() => setShowIntro(true)}
                  >
                    <span className="inline-block translate-y-1.5">
                      <Image
                        src="/svg/blue-tick-fill.svg"
                        alt="tick"
                        height={24}
                        width={24}
                      />
                    </span>{" "}
                    See Great Headshot Examples...
                  </li>
                </ul>

                {localFile && (
                <div className=" flex  gap-3 px-3 pb-5">
                  <Button
                    onClick={() => {
                      onUpload();
                      // setLocalFile(null);
                    }}
                    primary
                    loading={loading}
                  >
                    Save
                  </Button>
                  <button
                    className="txt-link font-semibold"
                    onClick={() => {
                      setImageUri("");
                      setLocalFile(null);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
              </div>

             
            </>
          )}
        </Paper>
      </ModalAnimated>
    </>
  );
}

type Props = {
  open: boolean;
  onClose: () => any;
  passedImage?: string;
};

const AddHeadshot = styled.div``;

const Paper = styled(ModalPaper)`
  min-height: 80%;
  max-width: 90%;
  height: fit-content;
  padding: 0 3em ;
  background: ${(p: any) => p.theme.paper};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  @media (min-width: 1340px) {
    min-width: 40%;
    max-width: 50%;
  }

  .photo-fix {
    position: fixed;
    margin-right: 180px;
    margin-top: 50px;
  }

  /* .photo-container-outer {
    background: #ffffff;
    box-shadow: 0px 1.79738px 17.9738px 5.39215px rgba(0, 0, 0, 0.05),
      0px 3.59477px 3.59477px rgba(0, 0, 0, 0.05);
    border-radius: 1.79738px;
    padding: 10px 10px 20px 10px;
    width: 210px;
    height: 320px;
    max-height: 368px;
  } */

  .photo-container-outer {
    background: #ffffff;
    box-shadow: 0px 1.79738px 17.9738px 5.39215px rgba(0, 0, 0, 0.05),
      0px 3.59477px 3.59477px rgba(0, 0, 0, 0.05);
    border-radius: 1.79738px;
    padding: 10px 10px 20px 10px;
    width: 250px;
    height: 298px;
    max-height: 350px;
  }
  .photo-container-inner {
    background: #f6f7f9;
    border: 1px dashed #c8c8cd;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
`;

const CloseBtn = styled.div`
  ${iconBtnCommon};
  color: ${(p: any) => p.theme.base};
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: #fff;
    background: ${(p) => p.theme.red};
  }
`;
