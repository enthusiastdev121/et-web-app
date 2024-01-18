import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    height: 100%;
    max-width: 100% !important;
    margin: 0;
  }
  .login {
    position: relative;
    width: 100%;
    max-width: 47.875rem;
    margin: 0 auto;
  }

  .login-email .login__inner {
    justify-content: center;
  }

  .login__inner {
    // padding: 3.75rem 2rem 2rem;
    border-radius: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    // border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .login__form {
    height: 400px;
  }

  .animated-gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    perspective: 50rem;
    perspective-origin: 36% 30%;
    transform-style: flat;
  }
  .animated-gradient-bg:before {
    content: "";
    transform: matrix(0.94, -0.34, 0.34, 0.94, 0, 0);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -10;
    left: 0;
    border-radius: 80%;
    background: transparent
      linear-gradient(180deg, #2c8bed 0%, #8c76cc 56%, #f51091 100%) 0% 0%
      no-repeat padding-box;
    opacity: 0.53;
    filter: blur(50px);
    animation: animateAlim linear 5s infinite;
  }

  @keyframes animateAlim {
    0% {
      transform: rotateX(-4deg) rotateY(-20deg) rotateZ(-6deg) scale(1)
        translateY(0);
    }
    25% {
      transform: rotateX(-4deg) rotateY(-20deg) rotateZ(-6deg) scale(1.1)
        translateY(0);
    }
    50% {
      transform: rotateX(4deg) rotateY(10deg) rotateZ(0deg) scale(1.1)
        translateY(-50px);
    }
    75% {
      transform: rotateX(4deg) rotateY(10deg) rotateZ(0deg) scale(1.05)
        translateY(-30px);
    }
    100% {
      transform: rotateX(-4deg) rotateY(-20deg) rotateZ(-6deg) scale(1)
        translateY(0);
    }
  }
`;
