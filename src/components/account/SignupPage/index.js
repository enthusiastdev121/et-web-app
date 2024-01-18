import Header from "../../Layout/Header";
import SignUpModal from "./SignUpModal";
import { Container } from "../Gradient.styled";
import styled from "styled-components";

export default function Login() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div
        className="sm:py-5 md:py-10 bg-paper flex items-center justify-center md:block"
        style={{ minHeight: "100vh" }}
      >
        <Container className="modal-container">
          <Section className="login login-email login-section">
            <div className="animated-gradient-bg"></div>
            <div className="login__inner">
              <SignUpModal />
            </div>
          </Section>
        </Container>
      </div>
    </div>
  );
}

const Section = styled.section`
  @media (max-width: 450px) {
    min-height: 90vh;
  }
`;
