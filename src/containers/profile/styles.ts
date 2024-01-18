import styled from "styled-components";
import { rgba } from "polished";

export const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};

  .link-text {
    color: ${(p: any) => p.theme.primary};
  }

  .secondary-text {
    color: ${(p: any) => p.theme.textSecondary};
  }

  .sticky-bar {
    /* position: sticky; */
    position: fixed;
    background-color: ${(p: any) => p.theme.pure};
    z-index: 900;
    margin: 0 auto;
    padding: 10px 10vw;
    width: 100vw;
    top: 0;
    left: 0;
  }

  .large-left {
    @media (min-width: 1050px) {
      justify-content: flex-start;
    }
  }
`;

export const Disclaimer = styled.div`
  // background-color: ${(p: any) => p.theme.abs.graySecondary};
  background-color: ${(p: any) => rgba(p.theme.pure, 0.8)};
  background-color: ${(p: any) => p.theme.border};
  color: ${(p: any) => rgba(p.theme.base, 0.7)};
  font-weight: 500;

  .disclaimer-img {
    margin-right: 5px;
  }
  @media (min-width: 500px) {
    display: block;
  }
`;

export const AboveTheFoldContainer = styled.div`
  .left {
    grid-template-columns: repeat(2, minmax(0, 200px));
    grid-template-rows: repeat(5, 100px);

    @media (min-width: 1050px) {
      /* width: 40%; */
    }
  }

  .marginBottom {
    margin-bottom: 1080px;
  }

  .two-feature {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 200px));
    grid-template-rows: repeat(4, 100px);
  }

  .profile-img-container {
    height: 304px;
    width: 200px;
    background: ${(p: any) => p.theme.abs.lightBlue};

    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }

  .feature-img-container {
    height: 204px;
    width: 200px;
    background: ${(p: any) => p.theme.abs.lightBlue};

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .right {
    @media (min-width: 1050px) {
      // width: 60%;
      text-align: left;

      .location,
      .btn-container,
      .info {
        justify-content: start;
      }
    }

    h2 {
      justify-content: center;

      @media (min-width: 1050px) {
        font-size: 40px;
        line-height: 1.1;
        justify-content: start;
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
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
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
      border: 1px solid ${(p: any) => p.theme.primary};
      transition: all 0.3s ease;
    }
  }
`;

export const ImageGalleryContainer = styled.div`
  /* background-color: ${(p: any) => p.theme.pure}; */

  .wdt {
    width: 100vw;
    max-width: 1530px;

    @media (min-width: 500px) {
      width: 80vw;
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(20, 20px);
    gap: 5px;

    @media (min-width: 700px) {
      grid-template-rows: repeat(20, 50px);
    }

    @media (min-width: 1340px) {
      grid-template-rows: repeat(20, 70px);
    }

    @media (min-width: 1620px) {
      grid-template-rows: repeat(20, 90px);
    }
  }

  .list-container {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    gap: 5px;
  }

  .gallery-image-container {
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
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

  .video-overlay {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }

  .thumbnail-container {
    height: 260px;
    width: 100%;
    max-width: 463px;
    border: 1px solid ${(p: any) => p.theme.border};
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
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

export const AllDocsContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  li:not(:last-child) {
    border-bottom: 1px solid ${(p: any) => p.theme.border};
  }
`;

export const AppearanceContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  li {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 15px;

    .blue {
      color: ${(p: any) => p.theme.primary};
      font-weight: normal;
      margin-right: 1em;
    }
  }
`;

export const CreditContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

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
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  .blue {
    color: ${(p: any) => p.theme.primary};
  }

  h3 {
    margin-bottom: 5px;
  }
`;

export const Box = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};
  margin-bottom: 20px;

  & > * {
    color: ${(p: any) => p.theme.base};
  }
`;

export const EditRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  .edit-pro {
    background: ${(p: any) => p.theme.primary};
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 10px 24px;
    border: 1px solid ${(p: any) => p.theme.primary};

    img {
      margin-right: 7px;
    }
  }

  .add-spotlight {
    // background: #fff;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: ${(p: any) => p.theme.primary};
    display: flex;
    align-items: center;
    padding: 10px 24px;
    border: 1px solid ${(p: any) => p.theme.primary};
    margin-left: 13px;

    img {
      margin-right: 7px;
    }
  }
`;


// export const AboutEdit = styled.div`
//     background-color: ${(p: any) => p.theme.pure};
//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
//   border-radius: 4px;
//   padding: 23px 48px;
//   display: flex;
//   align-items: center;
//   // margin-bottom:50px;

//   .about-section {
//     margin-left: 35px;

//     h5 {
//       font-style: normal;
//       font-weight: 700;
//       font-size: 20px;
//       color: ${(p: any) => p.theme.base};
//     }

//     p {
//       font-style: normal;
//       font-weight: 400;
//       font-size: 16px;
//       color: ${(p: any) => p.theme.base};
//       margin-top: 10px;
//     }

//     button {
//       background: ${(p: any) => p.theme.primary};
//       border-radius: 4px;
//       font-style: normal;
//       font-weight: 600;
//       font-size: 16px;
//       color: #ffffff;
//       /* padding: 10px 24px; */
//       padding: 0.5rem 0.5rem;
//       display: flex;
//       align-items: center;
//       margin-top: 20px;

//       img {
//         margin-right: 7px;
//       }
//     }
//   }
// `;

export const AboutEdit = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  /* background-color: red; */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  /* padding: 23px 48px; */
  padding: 1.5rem 1rem;

  display: flex;
  align-items: center;
  // margin-bottom:50px;

  .about-section {
    margin-left: 35px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    h5 {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: ${(p: any) => p.theme.base};
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: ${(p: any) => p.theme.base};
      margin-top: 10px;
    }

    button {
      background: ${(p: any) => p.theme.primary};
      border-radius: 4px;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      color: #ffffff;
      /* padding: 10px 24px; */
      padding: 0.5rem 0.5rem;
      display: flex;
      align-items: center;
      margin-top: 20px;

      img {
        margin-right: 7px;
      }
    }
  }
`;

export const AddSocialLink = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${(p: any) => p.theme.primary};
  display: flex;
  align-items: center;
`;

export const ShareProfile = styled.div`
  button {
    width: 20px;
    height: 20px;
  }
`;
