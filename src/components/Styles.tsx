import { THEME } from "@/utils/constants/theme";
import { css } from "styled-components";

export const iconBtnCommon = css`
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 120px;
  height: ${THEME.iconBtnSize.root}px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
