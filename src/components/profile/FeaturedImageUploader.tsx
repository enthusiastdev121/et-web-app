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
import {
  addFeaturedImageApi,
  addProfilePicApi,
  deleteFeaturedImageApi,
} from "network/apis/ownProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { FeaturedImageTypeD } from "types/profile";
import DeletePhotoModal from "./modals/DeletePhotoModal";
import { PrimaryBtnOutline, PrimaryBtnSingle } from "@/styles/Btn.styled";

export default function FeaturedImageUploader(props: Props) {
  const { onClose, open, passedImage, Ftype, featuredImages } = props;
  const cropRef = useRef();
  const { profile, setProfile } = useProfileStore();
  const [localFile, setLocalFile] = useState<any>(null);
  const [imageUri, setImageUri] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const { token, user } = useAuth();
  const [cropper, setCropper] = useState<any>();

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

  const onUpload = async (type: FeaturedImageTypeD) => {
    cropper.getCroppedCanvas().toBlob(async (b: any) => {
      try {
        const raw = new FormData();
        raw.append("name", b?.name);
        raw.append("type", type);
        raw.append("file", b);
        setLoading(true);

        const res = await addFeaturedImageApi({ token, raw });

        if (res && res.bam_media_path_full) {
          setProfile((s) => ({
            ...s,
            featuredImages: {
              ...s.featuredImages,
              [type]: {
                ...s.featuredImages[type],
                uri: res?.bam_media_path_full,
                id: res?.featured_image_id,
                key: res?.type,
                type: res?.type,
              },
            },
          }));
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
          style={{ maxHeight: "90vh", overflowY: "auto" }}
          className="no-scroll"
        >
          <>
            <CloseBtn
              onClick={() => {
                onClose();
              }}
            >
              <IoClose size={THEME.iconSize.root} />
            </CloseBtn>

            <div>
              <h4 className="font-bold text-2xl mb-2">Add a Featured Image</h4>

              {localFile ? (
                <div
                  style={{
                    maxWidth: 600,
                    margin: "auto",
                    // aspectRatio: THEME.profilePicRatio,
                  }}
                >
                  <Cropper
                    style={{ height: 300, width: "100%" }}
                    src={imageUri}
                    // aspectRatio={THEME.profilePicRatio}
                    guides={false}
                    ref={cropRef}
                    onInitialized={(instance) => {
                      setCropper(instance);
                    }}
                  />
                </div>
              ) : (
                <div className="photo-container-outer my-5 mx-auto">
                  <div className="photo-container-inner flex items-center justify-center relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onPick}
                      className="w-full h-full inline-block opacity-0 absolute top-0 left-0 z-10"
                    />
                    <div>
                      <Image
                        src="/images/pro.png"
                        alt="add photo"
                        height={105}
                        width={98}
                      />

                      <div className="txt-link mt-3 font-semibold">
                        <span>+</span> Select photo
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {localFile && (
              <div className="mt-2 flex items-center gap-3">
                <Button
                  onClick={() => {
                    onUpload(Ftype);
                    // setImageUri("");
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
                    //   onClose();
                    setImageUri("");
                    setLocalFile(null);
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </>
        </Paper>
      </ModalAnimated>
    </>
  );
}

type Props = {
  open: boolean;
  onClose: () => any;
  passedImage?: string;
  Ftype: "image1" | "image2" | "image3" | "image4";
};

const Paper = styled(ModalPaper)`
  min-height: 80%;
  max-width: 80%;
  height: fit-content;
  min-width: 60%;
  padding: 2.5em 3em 2em 3em;
  background: #fff;
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

  .photo-container-outer {
    background: #ffffff;
    box-shadow: 0px 1.79738px 17.9738px 5.39215px rgba(0, 0, 0, 0.05),
      0px 3.59477px 3.59477px rgba(0, 0, 0, 0.05);
    border-radius: 1.79738px;
    padding: 10px 10px 20px 10px;

    height: 320px;
    max-height: 368px;
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
  color: #000;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: #fff;
    background: ${(p) => p.theme.red};
  }
`;
