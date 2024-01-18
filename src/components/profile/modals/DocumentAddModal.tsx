import { VIDEO_DESC_LIMIT, VIDEO_TITLE_LIMIT } from "@/utils/constants";
import { formatSize } from "@/utils/helper";
import axios from "axios";
import Button from "components/Button";
import Input, { Textarea } from "components/Input";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import PageProgressLoader from "components/PageProgressLoader";
import { useAuth } from "context/AuthContext";
import {
  formatAudioNodeOwn,
  formatDocumentNodeOwn,
  formatVideoNodeOwn,
} from "network/apiFormatter/profile";
import {
  updateAudioRoute,
  updateVideoRoute,
  uploadDocumentRoute,
  uploadVideoRoute,
} from "network/apis/ownProfile";
import React, { useRef, useState } from "react";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import {
  AudioItemOwnD,
  DocumentItemOwnD,
  VideoItemD,
  VideoItemOwnD,
} from "types/profile";

export default function DocumentAddModal(props: Props) {
  const { open, onClose, onAdd } = props;
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { token } = useAuth();
  const cancelRef = useRef<any>();
  const [file, setFile] = useState<any>(null);

  const onSubmit = async () => {
    try {
      if (!file) {
        return;
      }

      const raw = new FormData();
      raw.append("type", "2");
      raw.append("file", file);
      raw.append("file_size", file?.size);
      raw.append("title", file?.name);

      cancelRef.current = axios.CancelToken.source();
      setLoading(true);
      const res = await axios.post(uploadDocumentRoute, raw, {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
        cancelToken: cancelRef.current?.token,
        onUploadProgress: (progressEvent: any) => {
          const p = progressEvent.loaded / progressEvent.total;
          setProgress(p);
        },
      });

      setLoading(false);
      if (res.data) {
        if (onAdd) {
          onAdd(formatDocumentNodeOwn(res.data));
        }
      }
    } catch (err) {
      console.log("Err", err);
      setLoading(false);
    }
  };

  const onFile = (e: any) => {
    if (e.target?.files?.length > 0) {
      setFile(e.target?.files[0]);
    }
    e.target.value = null;
  };

  return (
    <>
      <ModalAnimated open={open} onClose={onClose}>
        <Root className="bg-pure rounded-lg overflow-hidden">
          <div className="px-4 pb-3">
            <div className="py-3 flex justify-between items-center">
              <div className="font-bold">Add a document</div>
              <div
                className="flex justify-center cursor-pointer aspect-square rounded-full hover:bg-red-500 hover:text-white items-center z-20"
                style={{ height: 42 }}
                onClick={onClose}
              >
                <IoClose size={24} />
              </div>
            </div>

            {file ? (
              <div className="px-4 py-3 rounded-md bg-paper flex flex-col gap-2 justify-start items-start">
                <div>
                  <div className="font-semibold">{file?.name}</div>
                  <div className="text-sm"> {formatSize(file.size || 0)} </div>
                </div>
                <label htmlFor="file">
                  <Button light primary>
                    Change Document
                  </Button>
                </label>
              </div>
            ) : (
              <div className="w-full h-20 bg-paper rounded-md overflow-hidden relative flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <BsFillFileEarmarkPlusFill size={24} />
                  <div className="text-base  mt-2">
                    Click or drag you file here
                  </div>
                </div>
                <input
                  type="file"
                  accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                  className="absolute top-0 left-0 h-full w-full opacity-0"
                  onChange={onFile}
                />
              </div>
            )}
            <input
              type="file"
              id="file"
              accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              className="absolute top-0 left-0 h-full w-full opacity-0"
              onChange={onFile}
            />

            <div className="">
              <div className="flex gap-2 mt-4 self-end">
                <Button primary onClick={onSubmit} loading={loading}>
                  Upload
                </Button>
                <Button light primary onClick={onClose} disabled={loading}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Root>
        {loading && (
          <PageProgressLoader
            progress={progress}
            onCancel={() => {
              setLoading(false);
              cancelRef.current?.cancel();
              setProgress(0);
            }}
            title="Uploading document"
          />
        )}
      </ModalAnimated>
    </>
  );
}

const Root = styled(ModalPaper)`
  width: 500px;
  max-width: 90%;
`;

type Props = DocumentItemOwnD & {
  open: boolean;
  onClose: () => any;
  onAdd: (d: DocumentItemOwnD) => any;
};
