import styled from "styled-components";

export const Span = styled.span`
  color: ${(props) => props.theme.primary};
`;

export const AddRoleBtn = styled.button`
  border: 1px dashed ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  border-radius: 5px;
  width: 100%;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const Modal = styled.div`
  background: ${(props) => props.theme.pure};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MoreReq = styled.div`
  .label-for-check-requirements {
    user-select: none;
    background: ${(props) => props.theme.abs.lightBlue};
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    margin: 0.5em;

    .tick {
      height: 10px;
      width: 14px;
      background-image: url("/svg/cross-dark.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .check-with-label-requirements:checked + .label-for-check-requirements {
    color: ${(props) => props.theme.primary};
    .tick {
      background-image: url("/svg/blue-tick.svg");
    }
  }
`;
