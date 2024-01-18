import { rgba } from "polished";
import styled from "styled-components";

export const CommentContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  .comment-box {
    border-radius: 7px;
    border: 1px solid ${(p: any) => p.theme.border};
  }

  .lower {
    color: ${(p: any) => p.theme.textSecondary};
    background-color: ${(p) => p.theme.border};

    font-size: 18px;
    @media (min-width: 1050px) {
      font-size: 22px;
    }

    button {
      background-color: ${(p: any) => p.theme.textDisabled};
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
    }
  }

  .comment {
    margin-bottom: 2em;

    .img-container {
      height: 40px;
      width: 40px;
      border-radius: 100%;
      background-color: #aaa;
      overflow: hidden;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top center;
    }

    .time {
      color: ${(p: any) => p.theme.textDisabled};
    }

    .comment-footer {
      color: ${(p: any) => p.theme.textSecondary};
      font-size: 14px;
    }
  }

  .reply-container {
    margin-top: -1em;
    border-left: 2px dashed ${(p: any) => rgba(p.theme.base, 0.2)};
  }
`;
