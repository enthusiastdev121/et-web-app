import Button from "components/Button";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { deleteAudioApi, deleteVideoApi } from "network/apis/ownProfile";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AudioItemD, IntroVideoD, VideoItemD, VideoItemOwnD } from "types/profile";
import AudioCard from "../AudioCard";
import DeleteModalBox from "./DeleteModalBox";

export default function DeleteAudioModal({ open, id, title, desc, duration, uri, onClose, onDelete = (d) => { } }: AudioItemD & { open: boolean; onClose: () => any; onDelete?: (id: number) => any }) {
  const [deleting, setDeleting] = useState(false);
  const { token } = useAuth();

  const deleteAudio = async () => {
    try {
      setDeleting(true);
      const res = await deleteAudioApi({ token, id });
      setDeleting(false);
      if (onDelete) {
        onDelete(id);
      }
    } catch (err) {
      setDeleting(false);
      console.log("Err", err);
    }
  };

  return (
    <ModalAnimated open={open}>
      <DeleteModalBox title="Delete this audio?" desc="Deleting this audio will permamently remove it from your profile" onClose={onClose}>
        <div className="ml-auto mr-auto" style={{ maxWidth: 500 }}>
          <AudioCard {...{ id, uri, desc, title, duration }} />
        </div>

        <div className="flex gap-1 mt-3 justify-end mt-3">
          <Button light primary disabled={deleting} onClick={onClose}>
            Cancel
          </Button>
          <Button primary loading={deleting} onClick={deleteAudio}>
            Yes Delete Audio
          </Button>
        </div>
      </DeleteModalBox>
    </ModalAnimated>
  );
}
