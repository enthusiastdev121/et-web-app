import { THEME } from "@/utils/constants/theme";
import { darken, rgba } from "polished";
import React from "react";
import styled from "styled-components";
import ModalAnimated, { ModalPaper } from "./ModalAnimated";

export default function DeleteDialog({
  open,
  id,
  title = "",
  desc = "",
  node,
  onClose,
  onConfirm,
}: {
  open: boolean;
  id?: number;
  node?: object;
  onClose: () => any;
  onConfirm: (data?: number | object) => any;
  title: string;
  desc?: string;
}) {
  return (
    <ModalAnimated open={open} onClose={onClose}>
      <Paper>
        <Header>
          <Title>{title}</Title>
        </Header>

        {desc && <Desc>{desc}</Desc>}
        <Btns>
          <YesBtn onClick={onConfirm}>Confirm</YesBtn>
          <NoBtn onClick={onClose}>Cancel</NoBtn>
        </Btns>
      </Paper>
    </ModalAnimated>
  );
}

const Paper = styled(ModalPaper)`
  border-radius: 12px;
  background: ${(p) => p.theme.paper};
  padding: 1rem 1.4rem;
`;
const Header = styled.div`
  margin-bottom: 1rem;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;
const Desc = styled.div``;
const Btns = styled.div`
  display: flex;
  gap: 10px;
`;
const Btn = styled.div`
  min-height: ${THEME.btnSize.root}px;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${(p) => rgba(p.theme.base, 0.1)};
  color: ${(p) => p.theme.base};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    background: ${(p) => rgba(p.theme.base, 0.16)};
  }
`;
const YesBtn = styled(Btn)`
  background: ${(p) => p.theme.primary};
  color: #fff;
  &:hover {
    background: ${(p) => darken(0.1, p.theme.primary)};
  }
`;
const NoBtn = styled(Btn)``;
