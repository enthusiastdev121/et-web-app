import Header from "../../Layout/Header";
import LoginModal from "./LoginModal";
import { Container } from "../Gradient.styled";

export default function Login() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div
        className="pt-[10vh] md:pt-[15vh] bg-paper"
        style={{ minHeight: "100vh" }}
      >
        <Container className="modal-container">
          <section className="login login-email login-section">
            <div className="animated-gradient-bg"></div>
            <div className="login__inner">
              <LoginModal />
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
}
