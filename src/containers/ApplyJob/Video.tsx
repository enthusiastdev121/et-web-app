import { useAuth } from "context/AuthContext";
import { uploadSavedJobAssetRoute } from "network/apis/jobs";
import React, { useEffect, useRef, useState } from "react";
import { AssetQueueD, AssetUploadD, formatMediaRes } from "./com";
import axios from "axios";
import { RoleAssetD } from "types/jobs";
import { UploadBox, UploadInputBox } from "./Styles";
import { AudioSquare, VideoAdd } from "iconsax-react";
import { THEME } from "@/utils/constants/theme";
import SingleUploader from "./SingleUploader";

export const VideoUploader = ({ onUpload, roleId }: { onUpload: (d: RoleAssetD) => any; roleId: number }) => {
  const [queue, setQueue] = useState<AssetQueueD[]>([]);
  const onPik = async (e: any) => {
    if (e.target?.files?.length > 0) {
      const nn: AssetQueueD[] = Array.from(e.target?.files).map((i) => ({ file: i, localId: Date.now() + i.lastModified, type: "video" }));
      setQueue((s) => [...s, ...nn]);
    }

    e.target.value = null;
  };

  return (
    <div>
      <UploadBox>
        {/* <div> */}
        <VideoAdd size={THEME.iconSize.medium} variant="Bold" />
        <div>Click to add Video</div>

        <UploadInputBox>
          <input type="file" id="audio-input" accept="video/mp4,video/x-m4v,video/*" onChange={onPik} multiple />
        </UploadInputBox>
        {/* </div> */}
      </UploadBox>

      <div className="flex flex-col gap-1">
        {queue.map((i) => {
          return (
            <SingleUploader
              key={i.localId}
              {...i}
              roleId={roleId}
              onCancel={(id) => setQueue((s) => s.filter((i2) => i2.localId !== id))}
              onUpload={(d) => {
                setQueue((s) => s.filter((i2) => i2.localId !== d.localId));
                onUpload(d.data);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
