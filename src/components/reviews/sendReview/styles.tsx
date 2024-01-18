import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 2.5em 1em;
  @media(min-width:"768px"){
    padding: 2.5em 2em;
  };
   color: ${p => p.theme.base};
  position: relative;
  max-width: 700px;
  width: 95vw;
`;

export const VideoContainer = styled(Container)`
  padding: 1em 0;
  h2{
    font-size: 18px;
    @media(min-width:"768px"){
      font-size: 24px;

    };
  }
`
