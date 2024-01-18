import { PrimaryBtnSingle } from "@/styles/Btn.styled";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, ParentContainer, Select } from "../styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "components/Button";
import { useProfileStore } from "context/ProfileStore";
import axios from "axios";
import { useAuth } from "context/AuthContext";
import { uploadAudioRoute, uploadMedia } from "network/apis/ownProfile";
import PageProgressLoader from "components/PageProgressLoader";
import Input, { Textarea } from "components/Input";
import { VIDEO_DESC_LIMIT, VIDEO_TITLE_LIMIT } from "@/utils/constants";
import Image from "next/image";
import { formatPhotoNodeOwn } from "network/apiFormatter/profile";
import { PhotoItemD } from "types/profile";

export default function AddPhotos() {
  const router = useRouter();
  const { profile, setProfile } = useProfileStore();
  const inputRef = useRef<any>();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const cancelRef = useRef<any>();
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadQue, setUploadQue] = useState<ApiImage[]>([]);
  const { token } = useAuth();

  const [file, setFile] = useState<any>();
  const [fileDetail, setFileDetail] = useState({
    title: "",
    desc: "",
    url: "",
    name: "",
    duration: 0,
    size: 0,
  });

  const [image, setImage] = useState({
    caption: "",
    uri: "",
  });

  const onPhoto = async (e: any) => {
    if (e.target?.files?.length > 0) {
      setFile(e.target?.files[0]);
    }
    e.target.value = null;
  };

  const onImageUpload = ({ uri, data }: { uri: string; data: PhotoItemD }) => {
    setUploadQue((s) => s.filter((i) => i.uri !== uri));
  };

  useEffect(() => {
    if (file) {
      setImage((s) => ({
        ...s,
        uri: URL.createObjectURL(file),
        caption: "",
      }));
    }
  }, [file]);

  const onSave = async () => {
    try {
      const raw = new FormData();
      raw.append("type", "1");
      raw.append("file", file);

      cancelRef.current = axios.CancelToken.source();

      setUploading(true);

      const res = await axios.post(uploadMedia().photo.route, raw, {
        headers: uploadMedia(token).photo.headers,
        cancelToken: cancelRef.current?.token,
        onUploadProgress: (progressEvent: any) => {
          const p = progressEvent.loaded / progressEvent.total;
          setProgress(p);
        },
      });

      setUploading(false);

      if (res.data?.id) {
        onImageUpload({
          uri: file.uri,
          data: {
            ...formatPhotoNodeOwn(res.data),
          },
        });
      }

      router.back();
    } catch (err: any) {
      console.log("ERR", err);
    }
  };

  return (
    <ParentContainer className="padding-small">
      <ToastContainer className="Toastify" />
      <div
        className="padding-x"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Add new Photo</h1>
          <PrimaryBtnSingle onClick={onSave}>Save</PrimaryBtnSingle>
        </HeaderContainer>

        <div>
          <div className="border-2 rounded-md flex flex-col items-center justify-center p-5 bg-gray-100 relative mb-5">
            <div>
              <Image
                src="/images/pro.png"
                alt="add photo"
                height={105}
                width={98}
              />
            </div>
            <div className="txt-disabled">Add Photo</div>

            <input
              type="file"
              id="audio-input"
              accept="image/*"
              onChange={onPhoto}
              multiple={false}
              ref={inputRef}
              className="absolute top-0 left-0 h-full w-full opacity-0 z-10"
            />
          </div>

          <div className="mb-5">
            <div className="mb-5">
              <div className="w-full font-semibold mb-1">Add Caption</div>
              <Input
                type={"text"}
                className="w-full"
                value={fileDetail.title}
                onChange={(e) =>
                  setFileDetail((s) => ({ ...s, title: e.target.value }))
                }
                placeholder="Your photo caption.."
                // max={VIDEO_TITLE_LIMIT}
              />
            </div>

            <div>
              <input type="checkbox" id="featured" />
              <label htmlFor="featured" className="font-semibold ml-2">
                Make this a featured image
              </label>
            </div>

            <div className="mt-5 mb-2">
              {file && (
                <label htmlFor="audio-input">
                  <Button light primary>
                    Change photo
                  </Button>
                </label>
              )}
            </div>

            {image.uri && (
              <div className="w-fit bg-gray-200 rounded-md overflow-hidden p-4">
                <div className="font-semibold mb-2">{image.caption}</div>
                <div className="w-full">
                  <img src={image.uri} alt="my pic" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {uploading && (
        <PageProgressLoader
          onCancel={() => {
            cancelRef.current?.cancel();
            setProgress(0);
            setUploading(false);
          }}
          title="Uploading photo"
          progress={progress}
        />
      )}
    </ParentContainer>
  );
}
