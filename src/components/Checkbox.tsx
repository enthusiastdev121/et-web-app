import { rgba } from "polished";
import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import styled from "styled-components";

export default function Checkbox({ size = 32, checked = false, onChange, green = false, disabled = false }: { size?: number; checked: boolean; onChange: (d?: boolean) => any; green?: boolean; disabled?: boolean }) {
  return (
    <Root style={{ width: size }} className="bg-gray-200 cursor-pointer" onClick={() => {
      if (!disabled) {
        onChange(!checked);
      }
    }}>
      <div className={`inner  ${checked ? "show" : ""} ${green ? "bg-green-500" : (disabled ? "bg-gray-300" : "bg-primary")}`}>
        <HiOutlineCheck size={size / 1.6} />
      </div>
    </Root>
  );
}


const Root = styled.div`
  border-radius: 8px;
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;

  .inner {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s;
    color: #fff;

    &.show {
      opacity: 1;
      visibility: visible;
    }
  }
`;
