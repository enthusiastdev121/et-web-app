import { PrimaryBtn } from "@/styles/Btn.styled";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

export default function RulesModal({ rules, handleClose }: any) {
  const ruleArray = rules.split("\r\n");
  return (
    <Container>
      <div className="header border-b-2 py-5 px-10 flex items-center justify-between">
        <h2 className="text-2xl">Contest Rules</h2>
        <CgClose className="text-xl cursor-pointer" onClick={handleClose} />
      </div>

      <div className="content ">
        <div className="py-5 px-10">
          <div>
            <ul>
              {ruleArray.map((rule: any, index: number) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer py-5 px-10">
        <PrimaryBtn className="btn" onClick={handleClose}>
          Close &rarr;
        </PrimaryBtn>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  width: 95vw;
  height: fit-content;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1340px) {
    width: 40vw;
  }

  li {
    display: flex;
    align-items: start;
    margin-bottom: 5px;
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
