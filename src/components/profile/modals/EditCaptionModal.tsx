import React from "react";
import { PhotoItemOwnD } from "types/profile";

export default function EditCaptionModal(p: Props) {
  return <div></div>;
}

type Props = {
  onUpdate: (d: PhotoItemOwnD) => any;
  photo: PhotoItemOwnD;
  open: boolean;
  onClose: () => any;
};
