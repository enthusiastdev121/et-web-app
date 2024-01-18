import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};

  .box {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: ${(p: any) => p.theme.pure};
  }

  .link-text {
    color: ${(p: any) => p.theme.primary};
  }

  .secondary-text {
    color: ${(p: any) => p.theme.textSecondary};
  }

  .edit-btn {
    background-color: ${(p: any) => p.theme.abs.lightBlue};
    color: ${(p: any) => p.theme.primary};
    // padding: 0 5px;
    height: 30px;
    width: 30px;
    line-height: 25px;
    text-align: center;
    border-radius: 100%;
    font-size: 20px;
    margin-left: 0.75rem;

    &:hover {
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
      transform: translateY(-1px);
      transition: all 0.3s ease;
    }
  }

  .edit-btn-2 {
    background-color: ${(p: any) => p.theme.abs.lightBlue};
    color: ${(p: any) => p.theme.primary};
    padding: 5px 15px;
    border-radius: 30px;

    &:hover {
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
      transform: translateY(-1px);
      transition: all 0.3s ease;
    }
  }

  .intro-video-container {
    box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1),
      0px 4px 6px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    background-color: ${(p: any) => p.theme.pure};

    .video-img-container {
      height: 30vh;
      width: 100%;

      @media (min-width: 600px) {
        height: 60vh;
      }

      @media (min-width: 1050px) {
        height: 75vh;
      }

      img {
        object-fit: cover;
      }
    }
  }
`;

export const Disclaimer = styled.div`
  // background-color: ${(p: any) => p.theme.abs.graySecondary};
  // color: ${(p: any) => p.theme.abs.white};
  background-color: ${(p: any) => p.theme.border};
  color: ${(p: any) => rgba(p.theme.base, 0.8)};
  font-weight: 500;

  @media (min-width: 500px) {
    display: block;
  }
`;

export const ScoreContainer = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  .info-icon {
    display: inline-block;
    color: ${(p: any) => p.theme.textDisabled};
  }

  .left {
    @media (min-width: 1050px) {
      padding-right: 2rem;
      margin-right: 2rem;
      border-right: 1px solid ${(p: any) => p.theme.border};
    }
  }
`;

export const AboveTheFoldContainer = styled.div`
  .summary {
    @media (min-width: 500px) {
      padding: 1.25rem /* 20px */;
    }
  }

  .left {
    grid-template-columns: repeat(2, minmax(0, 200px));
    grid-template-rows: repeat(6, 100px);

    @media (min-width: 1050px) {
      width: 40%;
    }
  }

  .name-container {
    @media (min-width: 1050px) {
      justify-content: flex-start;
    }
  }

  .headshot {
    background-color: #7d7d7e;
    color: ${(p: any) => p.theme.abs.white};
    width: 100%;
    top: -20px;
  }

  .add-image {
    background: #efefef;
    color: #aaa;
    height: 100%;
    width: 100%;
  }

  .right {
    @media (min-width: 1050px) {
      width: 60%;
      text-align: left;

      .location,
      .btn-container,
      .info {
        justify-content: start;
      }
    }

    h2 {
      @media (min-width: 1050px) {
        font-size: 40px;
        line-height: 1.1;
      }
    }
  }

  .info-text {
    color: ${(p: any) => p.theme.textSecondary};

    strong {
      color: ${(p: any) => p.theme.text};
    }
  }

  /* .description {
    &::before {
      content: '"';
      font-weight: bold;
      font-size: 40px;
    }
  } */

  .photo-grid-item {
    position: relative;

    .video-item {
      background: #000;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .pro-badge {
    background-color: ${(p: any) => p.theme.primary};
    color: ${(p: any) => p.theme.abs.white};
    font-size: 20px;
    padding: 0 5px;
  }
`;

export const NavList = styled.ul`
  /* display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  grid-gap: 5px; */

  li {
    border: 1px solid ${(p: any) => p.theme.textSecondary};
    border-radius: 4px;
    padding: 1em 1.5em;
    font-weight: 600;

    @media (min-width: 768px) {
      padding: 0.5em 1em;
    }

    &:hover {
      background-color: ${(p: any) => p.theme.primary};
      color: ${(p: any) => p.theme.abs.white};
      transition: all 0.3s ease;
    }
  }
`;

export const ImageGalleryContainer = styled.div`
  .grid-container {
    /* grid-template-columns: repeat(3, minmax(0, 1fr));

    grid-template-rows: repeat(20, 20px); 

    @media (min-width: 700px) {
      grid-template-rows: repeat(20, 50px);
    }

    @media (min-width: 1340px) {
      grid-template-rows: repeat(20, 70px);
    }

    @media (min-width: 1620px) {
      grid-template-rows: repeat(20, 90px);
    } */
  }

  .heading {
    @media (min-width: 768px) {
      display: flex;
    }
  }

  .list-container {
    grid-template-columns: 1fr;
  }

  .gallery-image-container {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  nav {
    border-top: 1px solid ${(p: any) => p.theme.border};
    @media (min-width: 768px) {
      display: none;
    }
  }

  li {
    span {
      display: block;
      margin-bottom: 2px;
      padding: 1em;
      color: ${(p: any) => p.theme.textDisabled};
    }

    .active {
      color: ${(p: any) => p.theme.primary};
      border-bottom: 4px solid ${(p: any) => p.theme.primary};
    }
  }
`;

export const AllVideosContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};
`;

export const AllAudiosContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  .dot {
    padding: 5px;
    display: inline-block;
    height: 100%;
  }

  li:not(:last-child) {
    border-bottom: 1px solid ${(p: any) => p.theme.border};
  }
  .card {
    padding-top: 1em;
    padding-bottom: 1em;

    .card-content {
      width: 95%;

      @media (min-width: 500px) {
        width: 80%;
      }
    }
  }
`;

export const AppearanceContainer = styled.div`
  li {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 5px;

    .blue {
      color: ${(p: any) => p.theme.primary};
      font-weight: normal;
      margin-right: 1em;
    }
  }
`;

export const CreditContainer = styled.div`
  h3 {
    margin-bottom: 5px;
  }

  .inner-list {
    list-style-type: disc;

    li {
      margin-bottom: 16px;
      margin-left: 20px;
    }
  }
`;

export const ExperienceCardContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  .blue {
    color: ${(p: any) => p.theme.primary};
  }

  h3 {
    margin-bottom: 5px;
  }
`;

export const CommentContainer = styled.div`
  .comment-box {
    border-radius: 7px;
    border: 1px solid ${(p: any) => p.theme.border};
  }

  .lower {
    color: ${(p: any) => p.theme.textSecondary};
    background-color: #f8f8f8;

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
    margin-bottom: 1em;

    img {
      height: 40px;
      width: 40px;
      border-radius: 100%;
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
    margin-top: 1em;
    border-left: 2px dashed ${(p: any) => p.theme.textDisabled};
  }
`;

export const CommentSection = styled.div`
  background: ${(p: any) => p.theme.paper};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px;
  margin-top: 20px;

  & > * {
    color: ${(p: any) => p.theme.base};
  }

  & > div :last-child {
    border-top: 0.7px solid #f0f8ff;
  }

  ul {
    align-items: center;

    .previous {
      background: #fff !important;
    }

    .next {
      background: #fff !important;
    }

    .selected {
      color: ${(p) => p.theme.primary};
      font-weight: 600;
    }

    li {
      font-weight: 600;
      min-width: 44px !important;
      width: auto !important;
      max-width: fit-content;
      span {
        height: 44px;
        line-height: 44px;

        svg {
          margin-right: 0 !important;
          margin-left: 0 !important;
        }

        span {
          display: none !important;
        }
      }
    }
  }

  .latest-comment {
    display: flex;
    align-items: center;

    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      color: ${(p: any) => p.theme.base};
      margin-left: 10px;
    }
  }

  .comment-textarea {
    margin-top: 20px;
    width: 100%;

    button {
      border: 1px solid ${(p: any) => p.theme.primary};
      border-radius: 4px;
      padding: 10px 15px;
      font-weight: 600;
      font-size: 16px;
      color: ${(p: any) => p.theme.primary};
      margin-left: auto;
      display: flex;
    }

    textarea {
      background-color: ${(p: any) => p.theme.pure};
      width: 100%;
      // border: 2px solid #e5e7eb;
      border-radius: 5px;
      padding: 15px;
      font-size: 16px;
      color: #272727;
      outline: none !important;
    }

    textarea::placeholder {
      font-weight: 400;
      font-size: 16px;
      color: #9e9ea8;
    }
  }

  .reply-section {
    border-left: 3px dashed #e7e7ed;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const SingleReply = styled.div`
  color: ${(p: any) => p.theme.base};
  .single-reply {
    margin-top: 40px;
    margin-bottom: 40px;

    .profile-images {
      display: flex;
      align-items: center;

      img {
        height: 40px;
        min-width: 40px;
        // aspect-ratio:;
        object-fit: cover;
        border-radius: 50%;
      }

      h5 {
        font-weight: 500;
        font-size: 18px;
        color: ${(p: any) => p.theme.base};
        margin-left: 10px;
      }

      p {
        color: ${(p: any) => p.theme.base};
        opacity: 80%;
        font-weight: 400;
        font-size: 16px;
        margin-left: 10px;
      }
    }

    .comment-details {
      margin-top: 6px;
      display: flex !important;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-weight: 400;
        font-size: 16px;
        color: ${(p: any) => p.theme.base};
      }
    }

    .likes-comment {
      margin-top: 12px;
      display: flex;
      align-items: center;

      .likes {
        cursor: pointer;

        h3 {
          color: #8991a0;
          font-weight: 400;
          font-size: 14px;
        }
      }

      .reply {
        display: flex;
        align-items: center;
        margin-left: 12px;
        margin-right: 30px;
        cursor: pointer;

        h3 {
          color: #8991a0;
          font-weight: 400;
          font-size: 14px;
        }
      }

      .like-icon {
        cursor: pointer;

        input[type="checkbox"] {
          display: none;
        }

        input[type="checkbox"] + label {
          position: relative;
          width: 24px;
          height: 24px;
        }

        input[type="checkbox"] + label:before {
          content: "";
          background-image: url(/images/thumbs-up.svg);
          background-size: cover;
          background-repeat: no-repeat;
          top: -11px;
          left: -8px;
          width: 24px;
          height: 24px;
          display: block;
          position: absolute;
          transition: 0.5s ease;
          cursor: pointer;
        }

        input[type="checkbox"]:checked + label:before {
          border: 1px solid transparent;
          display: none !important;
          background-color: transparent;
        }

        input[type="checkbox"]:checked + label:after {
          content: "";
          background-image: url(/images/thumb-up.png);
          background-size: cover;
          background-repeat: no-repeat;
          position: absolute;
          top: -11px;
          left: -8px;
          width: 24px;
          height: 24px;
          transition: 0.5s ease;
          cursor: pointer;
        }
      }
    }
  }
`;

export const OverLayFirstSlide = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 90;
  color: ${(p: any) => p.theme.base};

  .modal-inner {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 50px;
    height: 100vh;
  }

  .modal-header {
    text-align: center;

    img {
      margin: 0 auto;
    }

    h6 {
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
      margin-top: 30px;
    }

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
      margin-top: 13px;
    }
  }

  .modal-list {
    height: 300px;
    overflow-y: auto;
    margin-top: 30px;
    ol {
      padding-left: 30px !important;

      li {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #fff;
        margin-top: 25px;

        ul {
          padding-left: 30px !important;
          list-style: disc !important;

          li {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #fff;
            margin-top: 0px !important;
          }
        }
      }
    }
  }

  .modal-footer {
    margin-top: 40px;
    text-align: center;
    width: 100%;

    button {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
    }

    .start-tour {
      background: ${(p) => p.theme.primary};
      border-radius: 4px;
      padding: 10px 24px;
      display: block;
      margin: 0 auto;
    }

    .cancle-tour {
      margin-top: 20px;
    }
  }
`;
