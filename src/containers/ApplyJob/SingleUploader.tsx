import { THEME } from "@/utils/constants/theme";
import { formatSize } from "@/utils/helper";
import axios from "axios";
import { useAuth } from "context/AuthContext";
import { uploadSavedJobAssetRoute } from "network/apis/jobs";
import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import tw from "tailwind-styled-components";
import { AssetUploadD, formatMediaRes } from "./com";

export default function SingleUploader(props: AssetUploadD) {
  const { file, roleId, onUpload, onCancel, localId, type } = props;

  const cancelRef = useRef<any>();
  const { token } = useAuth();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const uploadNow = async () => {
      try {
        const raw = new FormData();

        switch (type) {
          case "audio":
            raw.append("type", "3");
            break;
          case "doc":
            raw.append("type", "4");
            break;
          case "image":
            raw.append("type", "1");
            break;
          case "video":
            raw.append("type", "2");
            break;
          default:
        }

        raw.append("file", file);
        raw.append("name", file?.name);
        raw.append("bam_role_id", roleId.toString());
        cancelRef.current = axios.CancelToken.source();
        const res = await axios.post(uploadSavedJobAssetRoute, raw, {
          headers: {
            Authorization: "Bearer " + token,
          },
          cancelToken: cancelRef.current?.token,
          onUploadProgress: (progressEvent: any) => {
            const p = progressEvent.loaded / progressEvent.total;
            setProgress(p);
          },
        });

        if (res.data.id) {
          onUpload({ data: formatMediaRes(res.data), localId: localId });
        }
      } catch (err: any) {
        console.log("ERR", err);
      }
    };

    if (file) {
      uploadNow();
    }
  }, [file, localId, roleId, token, type]);

  return (
    <Card>
      <div className="flex items-center gap-2">
        <div className="flex flex-col" style={{ flex: 1 }}>
          <div className="flex justify-between items-center  mb-1">
            <div className="font-bold">{file?.name}</div>
            <div className="text-sm font-semibold opacity-40">{file && formatSize(file.size || 0)}</div>
          </div>

          <div className="w-full bg-gray-100 relative  rounded-full overflow-hidden" style={{ height: 14 }}>
            <div className="bg-blue-500 h-full left-0 top-0" style={{ width: progress * 100 + "%" }} />
          </div>
        </div>

        <div
          className="aspect-square flex items-center justify-center bg-gray-100 hover:bg-red-500 text-gray-500 rounded-full cursor-pointer hover:text-white "
          style={{ height: THEME.iconBtnSize.root }}
          onClick={() => {
            cancelRef.current?.cancel();
            setProgress(0);
            onCancel(localId);
          }}
        >
          <IoCloseSharp size={THEME.iconSize.root} />
        </div>
      </div>

      {/* <audio src={file ? URL.createObjectURL(file) : ""} controls className="w-full" /> */}
    </Card>
  );
}

const Card = tw.div`shadow-md p-3 rounded-lg`;
