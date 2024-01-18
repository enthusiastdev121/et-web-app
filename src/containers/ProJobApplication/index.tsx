import { THEME } from "@/utils/constants/theme";
import Button from "components/Button";
import { iconBtnCommon } from "components/Styles";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function ProJobApplication(props: Props) {
  const { handleClose } = props;
  var editorState;
  const [description, setDescription] = useState(editorState);

  // const setEditorState = (editorState) => {
  //   console.log("editorState", editorState);
  //   setDescription(editorState);
  // };

  return (
    <Root className="rounded-lg bg-white no-scroll">
      <header className="flex justify-between p-5 border-b-2 items-center">
        <h3 className="text-lg font-semibold">Submit Role for &ldquo;{props.something}&rdquo;</h3>
        <CloseBtn
          onClick={() => {
            handleClose();
          }}
        >
          <IoClose size={THEME.iconSize.root} />
        </CloseBtn>
      </header>

      <div className="p-5">
        {/* Name */}
        <Item>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={props.something} onChange={() => {}} />
        </Item>
        {/* Email */}
        <Item>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={props.something} onChange={() => {}} />
        </Item>
        {/* Contact */}
        <Item>
          <label htmlFor="contact">Contact Number</label>
          <input type="number" id="contact" value={props.something} onChange={() => {}} />
        </Item>

        <Item>
          <label htmlFor="message">Message</label>
          {/* <Editor
            editorState={description}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
          /> */}
        </Item>
      </div>

      <div className="p-5 flex items-center justify-end gap-1">
        <Button primary link onClick={handleClose}>
          Cancel
        </Button>
        <Button primary onClick={() => {}}>
          Submit
        </Button>
      </div>
    </Root>
  );
}

type Props = {
  something?: any;
  handleClose: any;
};

const Root = styled.div`
  min-width: 80vw;
  max-width: 90vw;
  overflow-y: auto;
  height: 90vh;

  @media (min-width: 700px) {
    min-width: 60vw;
  }

  @media (min-width: 1030px) {
    min-width: 50vw;
  }

  @media (min-width: 1500px) {
    min-width: 40vw;
  }
`;

const Item = styled.div`
  margin-bottom: 10px;

  label {
    font-weight: 600;
    font-size: 12px;
    display: block;
    margin-bottom: 2px;
  }

  input,
  textarea {
    background: #ffffff;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    display: block;
    padding: 5px 10px;
    width: 100%;
    font-size: 14px;
  }

  textarea {
    min-height: 200px;
    font-size: 12px;
  }

  .rdw-editor-main {
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    padding: 0 10px;
    min-height: 100px;
  }
`;

const CloseBtn = styled.div`
  ${iconBtnCommon};
  color: #000;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: #fff;
    background: ${(p) => p.theme.red};
  }
`;

/* <Item>
                      <label htmlFor="message">Message</label>
                      <textarea
                        value={`Dear Casting Director, 
            
            I am very interested in the ${props.something} project with the role ${props.something}.
            
            For further information, please visit my profile at: https://www.exploretalent.com/${props.something}.
            I look forward to your audition process.
            
            Sincerely, ${props.something}
            ${props.something}
            ${props.something}
                          `}
                        id="message"
                      ></textarea>
                    </Item> */
