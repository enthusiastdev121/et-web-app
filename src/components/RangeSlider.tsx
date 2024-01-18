import { rgba } from "polished";
import Slider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";
import styled from "styled-components";

export default function RangeSlider(p: SliderProps & { label: string }) {
  return (
    <Root>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div>
          {0} {p.label}
        </div>
        <div>
          {p.max} {p.label}
        </div>
      </div>

      <Slider {...p} style={{ width: "100%" }} />
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  padding-bottom: 40px;
  .rc-slider-track {
    background-color: ${p => p.theme.primary};
  }
  .rc-slider-handle {
    background-color: ${p => p.theme.primary};
    border: solid 2px ${p => rgba(p.theme.primary, 0.5)};
  }
  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color:${p => rgba(p.theme.primary, 0.2)};
    box-shadow: 0 0 0 5px ${p => rgba(p.theme.primary, 0.2)};
}
.rc-slider-dot-active {
  border-color: ${p => rgba(p.theme.primary, 0.5)};
}
`;
