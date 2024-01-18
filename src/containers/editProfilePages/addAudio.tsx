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
import { uploadAudioRoute, uploadVideoRoute } from "network/apis/ownProfile";
import PageProgressLoader from "components/PageProgressLoader";
import Input, { Textarea } from "components/Input";
import { VIDEO_DESC_LIMIT, VIDEO_TITLE_LIMIT } from "@/utils/constants";
import AudioCard from "components/profile/AudioCard";

export default function AddAudio() {
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
    name: "",
    duration: 0,
    size: 0,
  });

  const onAudio = async (e: any) => {
    if (e.target?.files?.length > 0) {
      setFile(e.target?.files[0]);
    }
    e.target.value = null;
  };

  useEffect(() => {
    if (file) {
      setFileDetail((s) => ({
        ...s,
        url: URL.createObjectURL(file),
        size: file.size,
        name: file?.name,
      }));
    }
  }, [file]);
  const handleUploadClick = () => {
    inputRef.current.click();
  };
  const onSave = async () => {
    try {
      if (!file || !fileDetail.title.trim() || !fileDetail.desc.trim()) {
        toast.error("Please fill all fields", {
          position: "top-center",
        });
        return;
      }

      const raw = new FormData();
      raw.append("type", "0");
      raw.append("title", fileDetail.title);
      raw.append("des", fileDetail.desc);
      raw.append("duration", fileDetail?.duration?.toString());
      raw.append("file_size", fileDetail?.size?.toString());
      raw.append("file", file);

      cancelRef.current = axios.CancelToken.source();

      setUploading(true);

      const res = await axios.post(uploadAudioRoute, raw, {
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
        router.push("/profile/edit");
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
      <div
        className="padding-x"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Add new Audio</h1>
          <PrimaryBtnSingle onClick={onSave}>Save</PrimaryBtnSingle>
        </HeaderContainer>

        <div>
          <div className="flex flex-col gap-3">
            <div className="">
              <div className="w-full font-semibold">
                Title ({VIDEO_TITLE_LIMIT} words)
              </div>
              <Input
                type={"text"}
                className="w-full"
                value={fileDetail.title}
                onChange={(e) =>
                  setFileDetail((s) => ({ ...s, title: e.target.value }))
                }
                placeholder="Your audio title.."
                max={VIDEO_TITLE_LIMIT}
              />
            </div>
            <div className="">
              <div className="w-full font-semibold">
                Description ({VIDEO_DESC_LIMIT} words)
              </div>
              <Textarea
                className="w-full"
                value={fileDetail.desc}
                onChange={(e) =>
                  setFileDetail((s) => ({ ...s, desc: e.target.value }))
                }
                placeholder="Your audio title.."
                max={VIDEO_DESC_LIMIT}
                rows={3}
              />
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-3">
                <div className="text-md font-semibold  opacity-50">
                  Select Audio
                </div>

                {file && (
                  <label >
                    <Button light primary onClick={handleUploadClick}>
                      Change audio
                    </Button>
                  </label>
                )}
              </div>

              {fileDetail.url ? (
                <div className="w-full bg-gray-200 rounded-md overflow-hidden p-4">
                  <div className="font-semibold mb-2">{fileDetail?.name}</div>
                  <div className="w-full">
                    <audio
                      src={fileDetail.url}
                      controls
                      className="w-full"
                      onLoadedMetadata={(e) => {
                        setFileDetail((s) => ({
                          ...s,
                          duration: e.target.duration,
                        }));
                        console.log("audio--", fileDetail.url);
                        console.log("working");
                      }}
                    />
                  </div>
                </div>
              ) : (
                  <div >
                    <Button primary onClick={handleUploadClick} >Upload audio</Button>
                  </div>
              )}
            </div>
          </div>

          <div className="absolute opacity-0">
            <input
              type="file"
              id="audio-input"
              accept="audio/mpeg,	audio/ogg,	audio/wav,audio/aac,audio/wav,	audio/webm"
              onChange={onAudio}
              multiple={false}
              ref={inputRef}
            />
          </div>
        </div>
      </div>

      {uploading && (
        <PageProgressLoader
          onCancel={() => {
            cancelRef.current?.cancel();
            setProgress(0);
          }}
          title="Uploading audio"
          progress={progress}
        />
      )}
    </ParentContainer>
  );
}
