import axios from "axios";
import Button from "components/Button";
import Input, { Textarea } from "components/Input";
import Spinner from "components/Spinner";
import { useAuth } from "context/AuthContext";
import { formatPhotoNodeOwn } from "network/apiFormatter/profile";
import { uploadPhotoRoute } from "network/apis/ownProfile";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiCrop } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { PhotoItemD } from "types/profile";
import { PhotoNode } from ".";
import Image from "next/image";
import { BsFillPlusSquareFill, BsTextLeft } from "react-icons/bs";

export default function Item(
  props: PhotoNode & {
    onUpload: (d: { localId: number; photo: PhotoItemD }) => any;
    onCrop: (localId: number) => any;
    onRemove: (id: number) => any;
  }
) {
  const { onCrop, onRemove, onUpload } = props;
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const cancelRef = useRef<any>();
  const { token }: any = useAuth();
  const [caption, setCaption] = useState("");
  const [captionText, setCaptionText] = useState("");

  const [uri, setUri] = useState("");

  useEffect(() => {
    if (props.file) {
      setUri(URL.createObjectURL(props.file));
    }
  }, [props.file]);

  const uploadNow = useCallback(async () => {
    try {
      if (!token || !props.file) {
        return;
      }

      const raw = new FormData();
      raw.append("type", "1");
      raw.append("file", props.file);
      raw.append("caption", caption);
      cancelRef.current = axios.CancelToken.source();
      setLoading(true);
      const res = await axios.post(uploadPhotoRoute, raw, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
        cancelToken: cancelRef.current?.token,
        onUploadProgress: (progressEvent: any) => {
          const progress = progressEvent.loaded / progressEvent.total;
          setProgress(progress);
        },
      });

      setLoading(false);
      if (res.data?.id) {
        if (onUpload) {
          onUpload({
            localId: props.localId,
            photo: formatPhotoNodeOwn(res.data),
          });
        }
      }
    } catch (err: any) {
      setLoading(false);
      console.log("ERR", err);
    }
  }, [caption, props.localId, props.file, token]);

  useEffect(() => {
    if (props.upload) {
      uploadNow();
    }
  }, [uploadNow, props.upload]);

  return (
    <div
      className="flex flex-col gap-1 relative text-xs md:text-base"
      style={{ borderRadius: 8, overflow: "hidden" }}
    >
      <div className="aspect-square bg-black overflow-hidden relative">
        <img
          src={uri}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          className="object-contain"
        />

        <div
          className="flex absolute top-1 text-white right-1 justify-center cursor-pointer aspect-square rounded-full bg-red-400 transition-all hover:bg-red-600 items-center"
          style={{ height: 38 }}
          onClick={() => onRemove(props.localId)}
        >
          <MdDelete size={24} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div
          className="txt-link flex items-center gap-2 font-semibold cursor-pointer"
          onClick={() => {
            if (onCrop) {
              onCrop(props.localId);
            }
          }}
        >
          <Image src="/svg/crop.svg" alt="crop" height={20} width={20} />
          Crop/Edit
        </div>

        <div className="w-full relative mt-2">
          <input
            type="text"
            className="focus:border-2 rounded-md border-gray-300 focus:border-blue-500 outline-none  w-full text-sm p-1 md:p-2 transition-all opacity-0 focus:opacity-100"
            placeholder="Add caption"
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
          />
          <div className="txt-link flex items-center gap-2 font-semibold absolute top-0 left-0 -z-10">
            <span className="text-xl">
              <BsTextLeft />
            </span>{" "}
            Add&nbsp;caption
          </div>
        </div>
      </div>
      {/* 
      <div
        className="txt-link flex items-center gap-2 font-semibold mb-2"
        onClick={() => {
          if (onCrop) {
            onCrop(props.localId);
          }
        }}
      >
        <span className="text-xl">
          <BsFillPlusSquareFill />
        </span>
        Add&nbsp;more&nbsp;photos
      </div> */}

      {loading && (
        <div className="absolute w-full h-full bg-black bg-opacity-70 left-0 top-0 z-30 flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
