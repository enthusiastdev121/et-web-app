import { useAuth } from "context/AuthContext";
import { uploadSavedJobAssetRoute } from "network/apis/jobs";
import React, { useEffect, useRef, useState } from "react";
import { AssetQueueD, AssetUploadD, formatMediaRes } from "./com";
import axios from "axios";
import { RoleAssetD } from "types/jobs";
import { UploadBox, UploadInputBox } from "./Styles";
import { AudioSquare } from "iconsax-react";
import { THEME } from "@/utils/constants/theme";
import SingleUploader from "./SingleUploader";

export const AudioUploader = ({ onUpload, roleId }: { onUpload: (d: RoleAssetD) => any; roleId: number }) => {
  const [queue, setQueue] = useState<AssetQueueD[]>([]);
  const onAudio = async (e: any) => {
    if (e.target?.files?.length > 0) {
      const nn: AssetQueueD[] = Array.from(e.target?.files).map((i) => ({ file: i, localId: Date.now() + i.lastModified, type: "audio" }));
      setQueue((s) => [...s, ...nn]);
    }
    e.target.value = null;
  };

  return (
    <div>
      <UploadBox>
        {/* <div> */}
        <AudioSquare size={THEME.iconSize.medium} variant="Bold" />
        <div>Click to add Audio/Song</div>

        <UploadInputBox>
          <input type="file" id="audio-input" accept="audio/mpeg,	audio/ogg,	audio/wav,audio/aac,audio/wav,	audio/webm" onChange={onAudio} multiple />
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
