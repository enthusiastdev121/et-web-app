import Button from "components/Button";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { deleteAudioApi, deleteDocumentApi, deleteVideoApi } from "network/apis/ownProfile";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AudioItemD, DocumentItemD, DocumentItemOwnD, IntroVideoD, VideoItemD, VideoItemOwnD } from "types/profile";
import AudioCard from "../AudioCard";
import DocCard from "../DocumentCard";
import DeleteModalBox from "./DeleteModalBox";

export default function DeleteDocModal({ open, id, name, uri, size, createdAt, onClose, onDelete = (d) => {} }: DocumentItemOwnD & { open: boolean; onClose: () => any; onDelete?: (id: number) => any }) {
  const [deleting, setDeleting] = useState(false);
  const { token } = useAuth();

  const deleteDocument = async () => {
    try {
      setDeleting(true);
      const res = await deleteDocumentApi({ token, id });
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
      <DeleteModalBox title="Delete this document ?" desc="Deleting this document will permamently remove it from your profile" onClose={onClose}>
        <div className="ml-auto mr-auto" style={{ maxWidth: 500 }}>
          <DocCard id={id} uri={uri} name={name} size={size} createdAt={createdAt} />
        </div>

        <div className="flex gap-1 mt-3 justify-end mt-3">
          <Button light primary disabled={deleting} onClick={onClose}>
            Cancel
          </Button>
          <Button primary loading={deleting} onClick={deleteDocument}>
            Yes Delete Document
          </Button>
        </div>
      </DeleteModalBox>
    </ModalAnimated>
  );
}
