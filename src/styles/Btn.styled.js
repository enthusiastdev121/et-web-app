import styled from "styled-components";

// Primary Button

export const PrimaryBtn = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.abs.white};
  border: 1px solid ${(props) => props.theme.primary};
  /* padding:0.5rem 0; */
`;

export const PrimaryBtnRounded = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.abs.white};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 50px;
`;

export const PrimaryBtnOutline = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.abs.white};
    transition: all 0.3s ease;
  }
`;

export const PrimaryBtnOutlineRounded = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 50px;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.abs.white};
    transition: all 0.3s ease;
  }
`;

export const PrimaryBtnLight = styled.button`
  background-color: ${(props) => props.theme.abs.lightBlue};
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.abs.lightBlue};
`;

export const PrimaryBtnLightRounded = styled.button`
  background-color: ${(props) => props.theme.abs.lightBlue};
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.abs.lightBlue};
  border-radius: 50px;
`;

export const PrimaryBtnWhite = styled.button`
  background-color: ${(props) => props.theme.abs.white};
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.abs.white};
`;

export const PrimaryLight = styled.span`
  background-color: ${(props) => props.theme.abs.lightBlue};
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.abs.lightBlue};
  border-radius: 20px;
  padding: 0 12px;
`;

export const PrimaryBtnSingle = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  padding: 0 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.abs.white};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
`;

// Secondary Button

export const SecondaryBtn = styled.button`
  background-color: ${(props) => props.theme.secondaryBtn};
  color: ${(props) => props.theme.secondaryBtnClr};
  border: 1px solid ${(props) => props.theme.secondaryBtn};
`;

// Tertiary Button

export const TertiaryBtn = styled.button`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.abs.black};
  border: 1px solid ${(props) => props.theme.white};
`;

export const TertiaryBtnOutline = styled.button`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.abs.black};
  border: 1px solid ${(props) => props.theme.abs.gray};
`;

// Auth Button

export const BlackOutline = styled.button`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
`;

// Toggle Button

export const ToggleBtn = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 16px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 0;
    bottom: -2px;
    border: 3px solid #ccc;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    @media (min-width: 1300px) {
      bottom: -1.5px;
    }
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const ToogleContainer = styled.div`
  .switch {
    display: inline-block;
    width: 47px;
    height: 25px !important;
    position: relative;
  }

  .toggle-thumb {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 40px;
    background-color: #e8eaed;
    background-color: #cdd0d3;
    cursor: pointer;
  }

  .toggle-thumb:before {
    content: "";
    height: 21px;
    width: 21px;
    position: absolute;
    left: 3px;
    bottom: 1.8px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.4s all ease;
  }

  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .checkbox:checked + .toggle-thumb:before {
    transform: translateX(20px);
  }

  .checkbox:checked + .toggle-thumb {
    background-color: ${(p) => p.theme.primary};
  }
`;

// Like Btn
export const LikeBtn = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.abs.white};
`;

// Green Btn
export const GreenBtn = styled.button`
  background-color: ${(props) => props.theme.abs.green};
  color: ${(props) => props.theme.abs.white};
  border: 1px solid ${(props) => props.theme.abs.green};
`;

// BADGE
export const Badge = styled.div`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.abs.white};
  background: linear-gradient(320.66deg, #0264c8 14.75%, #2c8bed 84.81%);
  filter: blur(0.0855237px);
  border-radius: 42.7619px;
  padding: 1px 10px;
  font-weight: 600;
  font-size: 18px;
  margin-left: 10px;
  padding: 5px 10px;

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

export const GreenBadge = styled.div`
  background: linear-gradient(320.66deg, #00a73a 14.75%, #37c96a 84.81%);
  filter: blur(0.099767px);
  border-radius: 49.8835px;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  color: #ffffff;
  padding: 1px 10px;
`;
