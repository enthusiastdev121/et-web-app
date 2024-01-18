import Button from "components/Button";
import ModalAnimated from "components/ModalAnimated";
import { useProfileStore } from "context/ProfileStore";
import React from "react";
import { FeaturedImageTypeD, PhotoItemOwnD } from "types/profile";
import DeleteModalBox from "./DeleteModalBox";

export default function DeletePhotoModal(props: Props) {
  const {
    type = "normal",
    onClose,
    open,
    url,
    title,
    desc,
    deleting,
    onDelete,
    Ftype,
  } = props;
  const {
    profile: { featuredImages },
  } = useProfileStore();

  return (
    <ModalAnimated open={open}>
      <DeleteModalBox
        title="Delete this photo ?"
        desc="Deleting this photo will permamently remove it from your profile"
        btnTitle=""
        onClose={onClose}
      >
        <>
          <div
            className="flex gap-3 sm:flex-row justify-center flex-col ml-auto mr-auto py-4 "
            style={{ maxWidth: 600 }}
          >
            <div className="sm:w-50pr bg-black rounded-md overflow-hidden aspect-video">
              <img
                src={url}
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

        <div className="flex gap-1 mt-3 justify-end">
          <Button light primary disabled={deleting} onClick={onClose}>
            Cancel
          </Button>
          {type === "FeaturedImage" && (
            <Button primary loading={deleting} onClick={() => onDelete(Ftype)}>
              Yes Delete Photo
            </Button>
          )}
          {type === "headshot" && (
            <Button primary loading={deleting} onClick={() => onDelete(Ftype)}>
              Yes Delete Photo
            </Button>
          )}
        </div>
      </DeleteModalBox>
    </ModalAnimated>
  );
}
type Props = {
  photo?: PhotoItemOwnD;
  onDelete?: (id: number) => any;
  type?: "headshot" | "FeaturedImage" | "normal";
  open: boolean;
  onClose: () => any;
  title?: string;
  desc?: string;
  url: string;
  deleting: boolean;
};
