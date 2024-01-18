import { PrimaryBtn } from "@/styles/Btn.styled";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

export default function TelePopup({ text, handleClose }: any) {

  return (
    <Container>
      <div className="header border-b-2 py-5 md:px-10 px-5 flex items-center justify-between">
        <h2 className="text-2xl"></h2>
        <CgClose className="text-xl cursor-pointer" onClick={handleClose} />
      </div>

      <div className="content ">
        <div className="py-5 md:px-10 px-5">
            {text}
        </div>
      </div>

      <div className="footer md:py-5 pb-5 md:px-10 px-5">
        <PrimaryBtn className="btn" onClick={handleClose}>
          Close &rarr;
        </PrimaryBtn>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  width: 92vw;
  height: fit-content;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 600px) {
    max-width: 550px;
  } 

  .header {
    position: sticky;
    top: 0;
    background: ${(p: any) => p.theme.pure};
  }

  .footer {
    position: sticky;
    bottom: 0;
    background: ${(p: any) => p.theme.pure};
  }
`;
