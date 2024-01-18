import Button from "components/Button";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { deleteVideoApi } from "network/apis/ownProfile";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IntroVideoD, VideoItemD, VideoItemOwnD } from "types/profile";
import DeleteModalBox from "./DeleteModalBox";

export default function DeleteVideoModal({
  open,
  id,
  thumb,
  title,
  desc,
  intro = false,
  onClose,
  onDelete = (d) => { },
}: VideoItemD & {
  open: boolean;
  onClose: () => any;
  onDelete?: (id: number) => any;
  intro?: boolean;
}) {
  const [deleting, setDeleting] = useState(false);
  const { token } = useAuth();
  const { setProfile } = useProfileStore();

  const deleteVideo = async () => {
    try {
      if (!id) {
        return;
      }
      setDeleting(true);
      const res = await deleteVideoApi({ token, id });
      setProfile((s) => ({
        ...s,
        introVideo: { ...s.introVideo, id: 0, uri: "" },
      }));

      if (onDelete) {
        onDelete(id);
      } else {
        if (onClose) {
          onClose();
        }
      }
      setDeleting(false);
    } catch (err) {
      setDeleting(false);
      console.log("Err", err);
    }
  };

  return (
    <ModalAnimated open={open}>
      <DeleteModalBox
        title="Delete this video?"
        desc="Deleting this video will permamently remove it from your profile"
        onClose={onClose}
      >
        {intro ? (
          <div
            className="bg-black rounded-md overflow-hidden mt-3 w-full ml-auto mr-auto aspect-video"
            style={{ maxWidth: 420 }}
          >
            <img
              src={thumb}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        ) : (
          <>
            <div
              className="flex gap-3 sm:flex-row flex-col ml-auto mr-auto py-4 "
              style={{ maxWidth: 600 }}
            >
              <div className="sm:w-50pr bg-black rounded-md overflow-hidden aspect-video">
                <img
                  src={thumb}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="pt-3">
                <div className="font-semibold text-lg">{title}</div>
                <div className=" text-base">{desc}</div>
              </div>
            </div>
          </>
        )}

        <div className="flex gap-1 mt-3 justify-end">
          <Button light primary disabled={deleting} onClick={onClose}>
            Cancel
          </Button>
          <Button
            primary
            loading={deleting}
            onClick={() => {
              deleteVideo();

              onClose();
            }}
          >
            Yes Delete Video
          </Button>
        </div>
      </DeleteModalBox>
    </ModalAnimated>
  );
}
