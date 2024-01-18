import { rgba } from "polished";
import styled from "styled-components";

export const Root = styled.div`
  background: ${(p) => p.theme.paper};
  @media (max-width: 500px) {
    background: transparent;
  }
  color: ${(p) => p.theme.base};
  display: flex;
  position: relative;

  .PhoneInput {
    width: 100%;
  }

  .contact-input-container {
    width: 100%;

    .PhoneInputCountry,
    input {
      background-color: ${(p: any) => p.theme.pure};
      border: 1px solid ${(p: any) => p.theme.border};
      border-radius: 4px;
      padding: 0.5em;
    }

    input {
      width: 100%;
      display: block;
    }
  }
`;

export const AsideBar = styled.aside`
  background: ${(p) => p.theme.pure};
  color: ${(p) => p.theme.base};
  min-height: 100vh;
  max-width: 360px;
  width: 30%;
  font-weight: 600;

  @media (max-width: 767px) {
    min-width: 100vw;
    background: #fff;
    height: fit-content;
    min-height: fit-content;
    position: absolute;
    top: 0;
    left: 0;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  h2 {
    font-size: 20px;
    line-height: 24px;
    padding: 10px 20px;
  }

  li {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    @media (max-width: 767px) {
      padding: 10px 10px;
    }

    .icon {
      background: #e5e7eb;
      color: ${(p) => p.theme.primary};
      height: 60px;
      width: 60px;
      min-width: 40px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;

      @media (max-width: 1100px) {
        font-size: 20px;
        height: 40px;
        width: 40px;
      }
      @media (max-width: 767px) {
        font-size: 34px;
        height: 50px;
        width: 50px;
      }
      @media (max-width: 450px) {
        font-size: 20px;
        height: 40px;
        width: 40px;
      }
    }

    &:hover {
      transition: all 0.3s ease;
      background: ${(p) => p.theme.border};
      .icon {
        color: #fff;
        background: ${(p) => p.theme.primary};
        transition: all 0.3s ease;
      }
    }
  }

  .aside-menu-text {
    @media (max-width: 1100px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .active {
    background: ${(p) => p.theme.border};
    .icon {
      color: #fff;
      background: ${(p) => p.theme.primary};
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      background: transparent;
    }
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 20px;
  width: 100%;
  font-family: "Montserrat";
  font-family: "Montserrat", sans-serif;
  padding-bottom: 4em;

  .list {
    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;

      @media (max-width: 500px) {
        font-size: 18px;
      }
    }

    .list-info {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      @media (max-width: 500px) {
        font-size: 16px;
      }
    }

    li {
      padding-bottom: 1.5em;
      border-bottom: 1px solid ${(p: any) => p.theme.border};\
      margin-bottom: 1.5em;
    }
  }
`;

export const Nav = styled.nav`
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a1a1aa;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: ${(p) => p.theme.base};
  }
`;

export const Input = styled.input`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  display: block;
  width: 100%;
`;

export const Ul = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5em;
    font-weight: 500;
    line-height: 20px;
  }
`;
