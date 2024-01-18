import { VIDEO_DESC_LIMIT, VIDEO_TITLE_LIMIT } from "@/utils/constants";
import axios from "axios";
import Button from "components/Button";
import Input, { Textarea } from "components/Input";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { useAuth } from "context/AuthContext";
import { formatVideoNodeOwn } from "network/apiFormatter/profile";
import { updateVideoRoute, uploadVideoRoute } from "network/apis/ownProfile";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { VideoItemD, VideoItemOwnD } from "types/profile";

export default function VideoUpdateModal(props: Props) {
  const { open, onClose, id, onUpdate } = props;
  const [state, setState] = useState({
    title: props.title,
    desc: props.desc,
  });
  const [updating, setUpdating] = useState(false);

  const { token } = useAuth();

  const onSubmit = async () => {
    if (!state.title.trim() || !state.desc.trim()) {
      return;
    }
    try {
      const raw = new FormData();
      raw.append("type", "1");
      raw.append("title", state.title);
      raw.append("des", state.desc);
      setUpdating(true);
      const res = await axios.post(updateVideoRoute(id), raw, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      });

      setUpdating(false);
      if (res.data) {
        onUpdate(formatVideoNodeOwn(res.data));
      }
    } catch (err) {
      console.log("Err", err);
      setUpdating(false);
    }
  };

  return (
    <ModalAnimated open={open} onClose={onClose}>
      <Root className="bg-white rounded-lg overflow-hidden">
        <div className="px-4 pb-3">
          <div className="py-3 flex justify-between items-center">
            <div className="font-bold">Edit Details</div>
            <div className="flex justify-center cursor-pointer aspect-square rounded-full hover:bg-gray-300 items-center" style={{ height: 42 }} onClick={onClose}>
              <IoClose size={24} />
            </div>
          </div>
        </div>

        <div className="flex gap-4 px-4 pb-4 sm:flex-row flex-col">
          <div className="sm:w-72 w-full">
            <div className="bg-black aspect-video w-full rounded-md overflow-hidden">
              <img src={props.thumb} className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="mb-4">
              <div className="text-sm font-semibold mb-1 w-full">Title ( {VIDEO_TITLE_LIMIT} characters )</div>
              <Input type="text" value={state.title} onChange={(e) => setState((s) => ({ ...s, title: e.target.value }))} placeholder="Enter video title" className="w-full" maxLength={VIDEO_TITLE_LIMIT} />
            </div>
            <div className="">
              <div className="text-sm font-semibold mb-1 w-full">Description ( {VIDEO_DESC_LIMIT} characters )</div>
              <Textarea value={state.desc} onChange={(e) => setState((s) => ({ ...s, desc: e.target.value }))} placeholder="Enter video description" className="w-full" rows={3} maxLength={VIDEO_DESC_LIMIT} />
            </div>

            <div className="flex gap-2 mt-4 self-end">
              <Button light primary onClick={onClose} disabled={updating}>
                Cancel
              </Button>
              <Button primary onClick={onSubmit} loading={updating}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </Root>
    </ModalAnimated>
  );
}

const Root = styled(ModalPaper)`
  width: 800px;
  max-width: 90%;
`;

type Props = VideoItemOwnD & {
  open: boolean;
  onClose: () => any;
  onUpdate: (d: VideoItemOwnD) => any;
};
