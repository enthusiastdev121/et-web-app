import Button from "components/Button";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { deleteVideoApi } from "network/apis/ownProfile";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IntroVideoD, VideoItemD, VideoItemOwnD } from "types/profile";
import DeleteModalBox from "./DeleteModalBox";
import UnfollowModalBox from "./UnfollowModalBox";

export default function UnfollowModal({
  open,
  onClose,
  title,
  desc,
  unFollowNow,
  btnTitle,
}: any) {
  const [deleting, setDeleting] = useState(false);
  const { token } = useAuth();
  const { setProfile } = useProfileStore();

  return (
    <ModalAnimated open={open}>
      <UnfollowModalBox title={title} desc={desc} onClose={onClose}>
        <div className="flex gap-1 mt-5 mb-10 justify-center">
          <Button light primary disabled={deleting} onClick={onClose}>
            Cancel
          </Button>
          <Button
            primary
            loading={deleting}
            onClick={() => {
              unFollowNow();
              onClose();
            }}
          >
            Yes {btnTitle}
          </Button>
        </div>
      </UnfollowModalBox>
    </ModalAnimated>
  );
}
