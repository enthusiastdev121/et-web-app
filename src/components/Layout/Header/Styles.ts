import styled from "styled-components";
import tw from "tailwind-styled-components";

const colorHeader = styled.div`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.pure};
`;

export const StyledHeader = tw(colorHeader)`
flex
items-center
text-xs
md:text-base
px-5
md:px-10
py-3
shadow
`;

export const navColor = styled.nav`
  background-color: ${(props) => props.theme.pure};
`;

export const Nav = tw(navColor)`
xl:block 
`;

export const NavItem = tw.a`
font-semibold 
mx-2
2xl:mx-5
hover:text-slate-600 ease-in-out duration-300
mb-2
sm:mb-0
`;

export const BtnContainer = tw.div`
    ml-auto
`;

const btnColor = styled.a`
  // color: ${(props) => props.theme.pure};
  // background-color: ${(props) => props.theme.primary};
`;

export const Btn = tw(btnColor)`
    font-semibold
    mx-1
    2xl:mx-5
`;

export const TopBar = styled.div`
  background-color: ${(props) => props.theme.abs.lightBlue};

  .active {
    background-color: ${(props) => props.theme.pure};
    color: ${(props) => props.theme.primary};
  }

  .nav-icon {
    font-size: 20px;
  }
`;

export const AJMenu = styled.div`
  background-color: ${(props) => props.theme.pure};
  color: ${(props) => props.theme.base};
  font-weight: 600;
  @media (max-width: 500px) {
    margin: 0 5px;
  }

  .active {
    @media (max-width: 500px) {
      // font-size: 12px;
    }
    @media (max-width: 768px) {
      // min-width: 131px;
    }
    color: ${(props) => props.theme.primary};
    border-bottom: 4px solid ${(props) => props.theme.primary};
    text-align: center;
  }

  .nav-item {
    @media (max-width: 500px) {
      // font-size: 12px;
    }
    // @media (max-width: 768px) {
    //   min-width: 131px;
    // }
    text-align: center;
    font-weight: 600;
  }

  .nav-item:hover {
    color: ${(props) => props.theme.primary};
    transition: all 0.3s ease;
  }
`;
