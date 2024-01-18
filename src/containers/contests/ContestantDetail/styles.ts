import { THEME } from "@/utils/constants/theme";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.paper};

  .left {
    @media (min-width: 1050px) {
      width: 65%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 35%;
    }
  }

  .text-color-primary {
    color: ${(p) => p.theme.primary};
    font-weight: 600;
  }

  .padding-x {
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    @media (min-width: 500px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  .contest-details {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      /* display: grid; */
    }

    .contest-details-inner {
      display: flex;
      align-items: center;

      .cover-image {
        width: 55px;
        height: 55px;
        border-radius: 4px;
        object-fit: cover;
        margin-right: 10px;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        color: ${(p) => p.theme.base};
      }

      h3 {
        font-weight: 700;
        font-size: 20px;
        color: ${(p) => p.theme.base} @media (min-width: 1050px) {
          font-size: 32px;
        }
      }
    }

    .contest-details-button {
      @media (max-width: 767px) {
        text-align: right;
      }

      button {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 18px;
        color: ${(p) => p.theme.primary};

        @media (max-width: 767px) {
          margin-left: auto;
        }

        img {
          margin-left: 5px;
        }
      }
    }
  }
`;

export const CardLeft = styled.div`

  background: ${(p) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 1050px) {
    width: 66.66%;
  }
  
  @media (max-width: 500px) {
    background: transparent;
    box-shadow: none;
  }

  .contest-img-container{
    position:relative;
    overflow:hidden;

    .contest-img{
     height: 474px;
     width:100%;
     object-fit:cover;
     filter:blur(10px);
    }

    .contest-img-main-video{
      height: 474px;
      width:100%;
    }

    .sucessfully-badge{
      background: #EFF6FF;
      border-radius: 2000px;
      padding:9px 10px;
      display:flex;
      align-items:center;
      max-width:283px;
      margin:20px auto;

      h5{
        width:28px;
        height:28px;
        line-height:28px;
        border-radius:50%;
        background: #3B82F6;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        margin-bottom:0;
        text-align:center;
      }

      p{
        color: ${(p) => p.theme.primary};
        font-weight: 500;
        font-size: 15px;
        margin-left:10px;
      }
    }

    .contest-img-main-inner-main{
      height: 474px;
      overflow:hidden;
    }

    .contest-img-main-inner{
      width: 100%;
      height: 474px;
      text-align: center;
      top: 0;
      position: absolute;

      .contest-img-main{
        width: 295px;
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
      }
    }
    .rate-contest{
      padding-top:20px;
      padding-bottom:24px;
      max-width:360px;
      margin:0 auto;
      text-align:center;

      h1{
        margin-top:10px;
        margin-bottom:12px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: rgba(60, 60, 67, 0.6);
      }

      .rating{
        display:flex;
        justify-content:space-between;
        align-item:center;
        margin-left:13px;
        margin-right:13px;
  
        .rate-count-deactive{
          cursor: pointer;
          width: 30px;
          height:30px;
          text-align:center;
          // padding: 4px 10px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          box-sizing: border-box;
          border-radius: 4px;
          
          align-items: center;
          display: flex;

          @media (max-width: 574px) {
            width: 24px;
            height:24px;
          }
  
          h2{
            font-weight: 600;
            font-size: 18px;
            text-align: center;
            color:${(p) => p.theme.base}
            margin:0 auto;
          }
        }

        .rate-count-active{
          cursor: pointer;
          width: 30px;
          height:30px;
          text-align:center;
          // padding: 4px 10px;
          background: ${(p) => p.theme.primary};
          border: 1px solid #E5E7EB;
          box-sizing: border-box;
          border-radius: 4px;
          justify-content:space-between;
          align-items: center;
          display: flex;

          @media (max-width: 574px) {
            width: 24px;
            height:24px;
          }
      
  
          h2{
            font-weight: 400;
            font-size: 18px;
            text-align: center;
            color:#FFFFFF;
            margin:0 auto;

          }
        }
  
      }

      .rating-titie{

          display:flex;
          justify-content:space-between;
          align-item:center;
          margin-top: 20px;

          .bad-count{
            position: absolute;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            text-align: right;
            color: #A1A1AA;
            bottom:0;
            left:14px;
          }
  
          .great-count{
            position: absolute;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            text-align: right;
            color: #A1A1AA;
            bottom:0;
            right:14px;
          }
      }

      .submit-vote-btn{
        background: ${(p) => p.theme.primary};
        border-radius: 4px;
        padding:11.5px 20px;
        margin-top:20px;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
      }

      .form-check{
        margin-top:28px;

        .container-checkbox {
          
          position: relative;
          // padding-left: 20px;
          padding-left: 8px;
          margin-bottom: 12px;
          cursor: pointer;
          font-weight: 400;
          font-size: 14px;
          color: rgba(60, 60, 67, 0.6);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          & :hover input ~ .checkmark{
            background-color: #ccc;
          }

          input {
            // position: absolute;
            // opacity: 0;
            // cursor: pointer;
            // height: 0;
            // width: 0;

            & :checked ~ .checkmark{
              background-color: #3B82F6;
            }

            & :checked ~ .checkmark:after{
              display: block;
            }
          }

          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 16px;
            width: 16px;
            border: 1px solid #FFFFFF;
            border-radius: 4px;
            background-color: #eee;

            & :after {
              content: "";
              position: absolute;
              display: none;
            }

            & :after {
              left: 5px;
              top: 1px;
              width: 5px;
              height: 10px;
              border: solid white;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }

        }

      
     

    }
  }

`;

export const Card = styled.div`
  width: 100%;
  height: max-height;
  margin-top: 20px;

  @media (min-width: 1050px) {
    width: 30%;
    margin-top: 0px;
  }

  .profile-card {
    height: max-height;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px 15px;

    .name-and-profile {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      h5 {
        font-weight: 600;
        font-size: 18px;
        color: ${(p) => p.theme.base}
        margin-left: 10px;
      }
    }

    .total-vote-row {
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div :first-child {
        border-right: 1px solid transparent;
        border-image: -webkit-gradient(
            linear,
            left bottom,
            left top,
            from(#e5e7eb6b),
            to(#fff),
            color-stop(1, #fff),
            color-stop(1, #e5e7eb)
          )
          21 30 30 21 repeat repeat;
        background-repeat: no-repeat;
        border-image-slice: 1;
      }

      & > div :nth-child(2) {
        border-right: 1px solid transparent;
        border-image: -webkit-gradient(
            linear,
            left bottom,
            left top,
            from(#e5e7eb6b),
            to(#fff),
            color-stop(1, #fff),
            color-stop(1, #e5e7eb)
          )
          21 30 30 21 repeat repeat;
        background-repeat: no-repeat;
        border-image-slice: 1;
      }

      .votes {
        width: 33.33%;
        text-align: center;

        h3 {
          font-weight: 600;
          font-size: 21px;
          color: ${(p) => p.theme.base}
        }

        h6 {
          font-weight: 400;
          font-size: 14px;
          color: ${(p) => p.theme.base}
        }
      }
    }
  }

  .share-social {
    margin-top: 30px;

    h5 {
      font-weight: 600;
      font-size: 14px;
      color: rgba(60, 60, 67, 0.6);
      margin-bottom: 5px;
    }
    a {
      margin-right: 10px;
      display: block;
    }

    input {
      border: 1px solid #dfdfdf;
      background: #ffffff;
      height: 40px;
      color: ${(p) => p.theme.base}
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 90px;
      width: 100%;
      outline: none;
    }

    .copy-link {
      position: absolute;
      top: 8px;
      right: 3px;
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-weight: 600;
      font-size: 12px;
      color: rgba(60, 60, 67, 0.6);
      padding: 4.5px 10px;
      // margin-right:10px;

      .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: rgb(25, 135, 84);
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        top: -50px;
        left: -40px;
      }

      & :hover .tooltiptext {
        visibility: visible;
      }
    }

    .social-button {
      margin-right: 10px !important;
    }
  }

  .leave-comment {
    margin-top: 30px;

    button {
      border: 1px solid #2c8bed;
      border-radius: 4px;
      background: #f8f9fb;
      height: 40px;
      width: 100%;
      font-weight: 600;
      font-size: 16px;
      color: ${(p) => p.theme.primary};
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 5px;
      }
    }
  }

  .how-work {
    margin-top: 100px;
    margin-bottom: 100px;

    @media (min-width: 1050px) {
      margin-top: 100px;
      margin-bottom: 0px;
    }

    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #a1a1aa;
      height: 50px;
      line-height: 25px;
      text-align: center;

      span {
        display: block;
      }
    }
  }
`;

export const CommentSection = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px;
  margin-top: 20px;

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
      color: ${(p) => p.theme.base};
      margin-left: 10px;
    }
  }

  .comment-textarea {
    margin-top: 20px;
    width: 100%;

    button {
      border: 1px solid #2c8bed;
      border-radius: 4px;
      background: #f8f9fb;
      padding: 10px 15px;
      font-weight: 600;
      font-size: 16px;
      color: ${(p) => p.theme.primary};
      margin-left: auto;
      display: flex;
    }

    textarea {
      width: 100%;
      border: 2px solid #e5e7eb;
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
  .single-reply {
    margin-top: 40px;

    .profile-images {
      display: flex;
      align-items: center;

      img {
        height: 40px;
        min-width: 40px;
        aspect-ratio: ${THEME.profilePicRatio};
        object-fit: cover;
        border-radius: 50%;
      }

      h5 {
        font-weight: 500;
        font-size: 18px;
        color: #000000;
        margin-left: 10px;
      }

      p {
        color: #b4bbc6;
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

      p {
        font-weight: 400;
        font-size: 16px;
        color: #272727;
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
