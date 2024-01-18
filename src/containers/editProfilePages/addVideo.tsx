import { PrimaryBtnSingle } from "@/styles/Btn.styled";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, ParentContainer, Select } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "components/Button";
import { useProfileStore } from "context/ProfileStore";
import { VideoAdd } from "iconsax-react";
import DeleteVideoModal from "components/profile/modals/DeleteVideoModal";
import axios from "axios";
import { useAuth } from "context/AuthContext";
import { uploadVideoRoute } from "network/apis/ownProfile";
import PageProgressLoader from "components/PageProgressLoader";
import Input, { Textarea } from "components/Input";
import { VIDEO_DESC_LIMIT, VIDEO_TITLE_LIMIT } from "@/utils/constants";
import styled from "styled-components";
import { darken } from "polished";

export default function AddVideo() {
  const router = useRouter();
  const { profile, setProfile } = useProfileStore();
  const inputRef = useRef<any>();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const cancelRef = useRef<any>();
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { token } = useAuth();

  const [file, setFile] = useState<any>();
  const [fileDetail, setFileDetail] = useState({
    title: "",
    desc: "",
    url: "",
    duration: 0,
    size: 0,
  });

  const onVideo = async (e: any) => {
    if (e.target?.files?.length > 0) {
      setFile(e.target?.files[0]);
    }
    e.target.value = null;
  };

  useEffect(() => {
    if (file) {
      setFileDetail((s) => ({ ...s, url: URL.createObjectURL(file), size: file.size }));
    }
  }, [file]);

  const onSave = async () => {
    try {
      if (!file || !fileDetail.title.trim() || !fileDetail.desc.trim()) {
        toast.error("Please fill all fields", {
          position: "top-center",
        });
        return;
      }

      const raw = new FormData();
      raw.append("type", "1");
      raw.append("title", fileDetail.title);
      raw.append("des", fileDetail.desc);
      raw.append("duration", fileDetail?.duration?.toString());
      raw.append("file_size", fileDetail?.size?.toString());
      raw.append("file", file);
      cancelRef.current = axios.CancelToken.source();
      setUploading(true);
      const res = await axios.post(uploadVideoRoute, raw, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
        cancelToken: cancelRef.current?.token,
        onUploadProgress: (progressEvent: any) => {
          const p = progressEvent.loaded / progressEvent.total;
          setProgress(p);
        },
      });

      setUploading(false);
      if (res.data) {
        // router.push("/profile/edit");
        router.back();
      } else {
      }
    } catch (err) {
      setUploading(false);
      setProgress(0);
      console.log("ERR", err);
    }
  };

  return (
    <ParentContainer className="padding-small">
      <ToastContainer className="Toastify" />
      <div className="padding-x" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort className="text-3xl arrow" onClick={() => router.back()} />
          <h1 className="text-xl lg:text-2xl font-bold">Add new video</h1>
          <PrimaryBtnSingle onClick={onSave}>Save</PrimaryBtnSingle>
        </HeaderContainer>

        <div>
          <div className="flex flex-col gap-3">
            <div className="">
              <div className="w-full font-semibold">Title ({VIDEO_TITLE_LIMIT} words)</div>
              <Input type={"text"} className="w-full" value={fileDetail.title} onChange={(e) => setFileDetail((s) => ({ ...s, title: e.target.value }))} placeholder="Your video title.." max={VIDEO_TITLE_LIMIT} />
            </div>
            <div className="">
              <div className="w-full font-semibold">Description ({VIDEO_DESC_LIMIT} words)</div>
              <Textarea className="w-full" value={fileDetail.desc} onChange={(e) => setFileDetail((s) => ({ ...s, desc: e.target.value }))} placeholder="Your video title.." max={VIDEO_DESC_LIMIT} rows={3} />
            </div>
            <div className="">
              <div className="w-full font-semibold">Select Video</div>
              {
                fileDetail.url && <Button primary>
                  <label htmlFor="video-input" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer">
                  </label>
                  <span>
                    Upload new video
                  </span>
                </Button>
              }

            </div>

            {!fileDetail.url ? (
              <>
                <label htmlFor="video-input">
                  <Bg className="w-full aspect-video sm:aspect-[2220/1080] relative rounded-md overflow-hidden flex flex-col items-center justify-center text-gray-800 bg-pure">
                    <VideoAdd size="42" variant="Bold" />
                    <div className="mt-3">Uplaod Video</div>
                  </Bg>
                </label>
              </>
            ) : (
              <div>
                <div className="rounded-md relative overflow-hidden bg-black">
                  <div className="w-full aspect-video sm:aspect-[2220/1080] relative  ">
                    <video
                      controls
                      src={fileDetail.url || profile.introVideo?.uri}
                      className="h-full w-full object-contain"
                      onLoadedMetadata={(e) => {
                        if (fileDetail.url) {
                          setFileDetail((s) => ({ ...s, duration: e.target?.duration || 0 }));
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="absolute opacity-0">
            <input type="file" id="video-input" accept="video/mp4,video/x-m4v,video/*" onChange={onVideo} multiple={false} ref={inputRef} />
          </div>
        </div>
      </div>
      {uploading && (
        <PageProgressLoader
          onCancel={() => {
            cancelRef.current?.cancel();
            setProgress(0);
          }}
          title="Uploading video"
          progress={progress}
        />
      )}
    </ParentContainer>
  );
}

const Bg = styled.div`
  background-color: ${(p: any) => darken(0.2, p.theme.pure)}
`