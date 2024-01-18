import { rgba } from "polished";
import styled from "styled-components";

export const Form = styled.form`
  .form-label {
    font-size: 14px;

    @media (min-width: 1680px) {
      font-size: 19px;
    }
  }

  @media (min-width: 1050px) {
    & > div {
      border-bottom: none;
    }

    & > div :first-child {
      border-top: none;
    }

    & > div :nth-child(2) {
      border-top: none;
    }

    & > div :nth-child(3) {
      border-top: none;
    }

    & > div :nth-child(3n) {
      border-right: none;
    }

    & > div :nth-child(1n) {
      border-left: none;
    }
  }

  .form-input:checked + .form-label {
    color: ${(props) => props.theme.primary};
  }

  .blue-text {
    color: ${(props) => props.theme.primary};
  }
`;

export const Jobs = styled.div`
  color: ${(props) => props.theme.primary};
`;

export const SearchContainer = styled.div`
  background-color: ${(props) => rgba(props.theme.primary, 0.2)};

  select {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.pure};
  }

  .active {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

export const SliderRange = styled.div`
  .option-range {
    color: ${(p) => p.theme.primary};
    background-color:${(p) => p.theme.pure};
    padding: 0.5em 1em;
    border-radius: 50px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    justify-content: space-between;
  }

  .slidecontainer {
    width: 100%;
    padding: 20px 20px 40px 20px;

    .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 20px;
      background: transparent;
      outline: none;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      margin-top: 20px;

      & :hover {
        opacity: 1;
      }

      & ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: ${(p) => p.theme.primary};
        border-radius: 50%;
        cursor: pointer;
      }

      & ::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: ${(p) => p.theme.primary};
        cursor: pointer;
        border-radius: 50%;
      }
    }

    p {
      font-size: 15px;
      color: ${(p) => p.theme.base};
      font-weight: 500;
      font-family: "Montserrat-Medium";
    }
  }
`;
