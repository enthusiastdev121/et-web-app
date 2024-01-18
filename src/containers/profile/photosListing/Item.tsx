import DeleteDialog from "components/DeleteDialog";
import ImageViewPop from "components/ImageViewPop";
import { iconBtnCommon } from "components/Styles";
import { THEME } from "@/utils/constants/theme";
import { useAuth } from "context/AuthContext";
import { deletePhotoApi } from "network/apis/ownProfile";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CircleSpinner } from "react-spinners-kit";
import styled from "styled-components";
import { PhotoItemD } from "types/profile";

export default function Item(props: Props) {
  const { id, uri, onDelete, onClick } = props;
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [imageView, setImageView] = useState(false);

  const deleteImage = async () => {
    setDeleteOpen(false);
    try {
      setLoading(true);

      const res = await deletePhotoApi({ token, id });
      setLoading(false);
      if (onDelete) {
        onDelete(id);
      }
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  };

  // console.log("IIMG VIEW", imageView);

  return (
    <>
      <Root>
        {loading && (
          <Loader>
            <CircleSpinner color="#fff" size={24} />
          </Loader>
        )}
        <Pic onClick={() => onClick(id)}>
          <img src={uri} />
        </Pic>

        {/* <ImageListItemBar position="below" title={item.author} /> */}
      </Root>
      <DeleteDialog open={deleteOpen} onConfirm={deleteImage} onClose={() => setDeleteOpen(false)} title="Are you sure you want tor delete this photo ?" />
      <ImageViewPop
        open={imageView}
        image={props}
        onClose={() => {
          console.log("DESMOND");
          setImageView(false);
        }}
      />
    </>
  );
}

type Props = PhotoItemD & {
  editable?: boolean;
  onDelete?: (id: number) => any;
  onClick: (id: number) => any;
};

const Actions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 8;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
`;
const Root = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;
const Pic = styled.div`
  height: 100%;
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
`;
