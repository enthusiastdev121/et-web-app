import styled from "styled-components";
import tw from "tailwind-styled-components";

export const UploadBox = tw.div`py-5 px-2 rounded-xl bg-gray-100 text-gray-600 border-dotted border-gray-300 flex items-center justify-center hover:bg-gray-200 cursor-pointer text-base gap-2 font-medium mb-3 relative`;

export const UploadInputBox = styled.div`
  input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 6;
    opacity: 0;
    cursor: pointer;
  }
`;
