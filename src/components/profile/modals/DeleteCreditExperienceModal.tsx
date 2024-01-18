import Button from "components/Button";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { deleteCreditApi, deleteDocumentApi } from "network/apis/ownProfile";
import React, { useState } from "react";
import DeleteModalBox from "./DeleteModalBox";

export default function DeleteCreditExperienceModal({
  open,
  id,
  item,
  onClose,
  onDelete = (d: any) => {},
}: any & {
  open: boolean;
  onClose: () => any;
  onDelete?: (id: number) => any;
}) {
  const [deleting, setDeleting] = useState(false);
  const { token } = useAuth();
  const { setProfile } = useProfileStore();

  const deleteDocument = async () => {
    try {
      setDeleting(true);
      const res = await deleteCreditApi(token, id);
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
      <DeleteModalBox
        title="Delete this Credit?"
        desc="Deleting this credit will permamently remove it from your profile"
        onClose={onClose}
      >
        <div className="ml-auto mr-auto" style={{ maxWidth: 500 }}>
          <div>{item.production}</div>
          <div>{item.role}</div>
        </div>

        <div className="flex gap-1 mt-3 justify-end">
          <Button light primary disabled={deleting} onClick={onClose}>
            Cancel
          </Button>
          <Button primary loading={deleting} onClick={deleteDocument}>
            Yes Delete Credit
          </Button>
        </div>
      </DeleteModalBox>
    </ModalAnimated>
  );
}
