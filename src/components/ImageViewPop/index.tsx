import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import React from "react";
import { PhotoItemD } from "types/profile";
import {
  Magnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import styled from "styled-components";
import DotOptions from "components/DotOptions";
import { THEME } from "@/utils/constants/theme";
import { rgba } from "polished";
import { IoClose } from "react-icons/io5";
import { iconBtnCommon } from "components/Styles";

export default function ImageViewPop(props: Props) {
  const { image, open, onClose, options = [] } = props;
  return (
    <ModalAnimated open={open} onClose={onClose}>
      <Paper>
        <Pic>
          <img src={image.uri} />
        </Pic>
        <Actions>
          {options.length > 0 && (
            <Btn>
              <DotOptions dark />
            </Btn>
          )}
          <CloseBtn onClick={() => onClose()}>
            <IoClose size={THEME.iconSize.root} />
          </CloseBtn>
        </Actions>
      </Paper>
    </ModalAnimated>
  );
}

type Option = {
  label: string;
  action: (d: PhotoItemD) => any;
};

type Props = {
  open: boolean;
  options?: Option[];
  onClose: () => any;
  image: PhotoItemD;
};

const Paper = styled(ModalPaper)`
  height: 80%;
  width: 80%;
  background: #000;
  border-radius: 18px;
`;
const Pic = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  z-index: 10;
  display: flex;
  gap: 8px;
`;
const Btn = styled.div``;

const CloseBtn = styled.div`
  ${iconBtnCommon};
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  &:hover {
    color: #fff;
    background: ${(p) => p.theme.red};
  }
`;
