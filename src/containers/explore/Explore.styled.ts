import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};

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
`;

export const SingleCardEvents = styled.div`
  width: 170px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const DisplaySlide = styled.div`
  // display:flex;

  // .slick-slider{
  //   display:inline-grid;
  // }

  // .slick-slide{
  //   width:170px !important;
  //   height:255px !important;
  //   margin-right: 10px !important;

  // }

  // .slick-list{
  //   overflow-y: hidden !important;
  //   overflow-x: auto !important;

  //   ::-webkit-scrollbar {
  //     width: 20px;
  //     height:10px;
  //   }

  //   ::-webkit-scrollbar-track {
  //     box-shadow: inset 0 0 5px grey;
  //     border-radius: 10px;
  //   }

  //   ::-webkit-scrollbar-thumb {
  //     background: red;
  //     border-radius: 10px;
  //   }

  //   ::-webkit-scrollbar-thumb:hover {
  //     background: #b30000;
  //   }
  // }

  // .slick-track{
  //   transform:translate3d(0,0,0) !important;
  //   display:flex !important;
  // }

  .slick-next {
    right: 5px;
    width: 70px;
    height: 45px;
    padding: 16px 10px;
    display: flex !important;
    justify-content: flex-end;
    top: 150px;
  }

  .slick-next:before {
    content: "";
    font-size: 0px;
    width: 70px;
    line-height: 0 !important;
    padding: 16px 10px;
  }

  .slick-prev {
    display: none;
  }
`;

export const ImageAndAddMore = styled.div`
width: 170px;
border-radius: 8px;
position: relative;

img{
  border-radius: 8px;
  height:255px;
  width:165px;
  object-fit:cover;
}
.person-profile{
  background: #fff;
  width: 33.6px;
  height: 33.6px;
  border-radius:50px;
  position: absolute;
  left: 67.8px;
  bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.person-profile img{
  width: 31.6px;
  height: 31.6px;
  border-radius:50px
}


h2{
  margin: 11px auto;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: ${(p) => p.theme.base}
  bottom: 94.45%;
  }
`;

export const ImageUpload = styled.div`
width: 165px;
border-radius: 8px;
position: relative;
height:255px;
object-fit:cover;

/* .addBtn {
  display: none;
} */



.add {
  width: 165px;
  height: 68.08px;
  position: absolute;
  bottom: 0px;
  
  background: ${(p) => p.theme.primary};
  box-sizing: border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center
}
img{
  border-radius: 8px;
  height:100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* &:hover {
    .addBtn {
      display: block;
    }
  } */
}

h2{
  width:66px;
  margin:9px auto;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: ${(p) => p.theme.base}
  bottom: 94.45%;
  }

`;

export const ShareContent = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 30.67px;

  margin-bottom: 20px;
  // padding:20px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 2px;
  }
`;

export const ContentMessage = styled.div`
background: #F6F6F6;
border: 1px solid #E5E7EB;
box-sizing: border-box;
border-radius: 1000px;
padding:8px;
display:flex;
align-items:center;

.main-image{
  min-width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right:20px;

  @media (max-width: 1050px) {
    min-width: 40px;
    height: 40px;
    margin-right:10px;
  }

}

input{
  background:transparent;
  border:none;
  outline:none;
  width: 90%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  color: ${(p) => p.theme.base}
  text-overflow: ellipsis;
  font-family: "Montserrat-Medium";
  @media (max-width: 1050px) {
    font-size:12px;
  }
}

input::placeholder{
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  color: rgba(60,60,67,0.6);


  @media (max-width: 1050px) {
    font-size:12px;
  }
}

.second-image{
  width: 36.66px;
  height: 36.66px;
  margin-right:10.34px;

  @media (max-width: 1050px) {
    width: 20.66px;
    height: 20.66px;
  }
}

`;

export const Feeds = styled.div`
  width: 100%;
  background: ${(p) => p.theme.pure};
  color: ${(p) => p.theme.base};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  /* margin-top: 30.67px; */
  margin-bottom: 20px;
  // padding:20px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }

  a {
    color: ${(p) => p.theme.primary};
    font-weight: 600;
  }
`;

export const FeedMessage = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const FeedHeader = styled.div`
  .profile-image {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 15px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const TitleHeader = styled.div`
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: ${(p) => p.theme.base};
    display: flex;
    // justify-content: center;
    // align-items: center;

    span {
      width: 100%;

      @media (max-width: 497px) {
        max-width: 115px;
        width: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

  h5 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${(p) => p.theme.base};
    white-space: nowrap;
  }
`;

export const FollowButton = styled.div`
  // width: 74.05px;
  width: fit-content;
  height: 30.39px;
  background: ${(p) => p.theme.pure};
  color: ${(p) => p.theme.primary};
  border: 0.782886px solid ${(p) => p.theme.primary};
  box-sizing: border-box;
  border-radius: 78.2886px;
  padding: 2.69731px 12.5262px;
  color: ${(p) => p.theme.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 15.3846px;
  color: ${(p) => p.theme.primary};
  margin: 0px 5.4802px;
`;
export const MainFeedContent = styled.div`
  // padding:0 75px;
  margin-bottom:30.69px;

  @media (max-width: 768px) {
    padding:0 10px;
  }

   @media (max-width: 500px) {
    padding:0px;
  }

  img{
    width: 100%;
    // height: 939.78px;
    max-height:630px;
    // border-radius: 8px;
    /* object-fit:cover; */
    object-fit:contain;
    background-color:#000;
  }

  .fav {
    border: 1px solid ${(p: any) => p.theme.textDisabled};
    border-radius: 100%;
    padding: 0.5em;
  }

  .like-title{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${(p) => p.theme.base}
    margin-left:10.7px;
  }

  .active-fav {
    // border: 1.34615px solid #E5E7EB;
    border-radius: 100%;
    padding: 0.5em;
    color: '#191919';
    transition:all 0.3s ease-in-out;

    & :hover{
      transform:scale(1.1);
    }
   
  }

  .active-fav-like {
    border: 1.34615px solid #E53D3E;
    border-radius: 100%;
    padding: 0.5em;
    background-color: #E53D3E;
   
  }

  .total-like{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${(p) => rgba(p.theme.base, 0.6)};
  }

  .casting-remote{
    // height: 392.2px;
  }

  .big-title{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${(p) => p.theme.base}
    margin-bottom:19px;

    @media (max-width: 1199px) {
      font-size:16px;
      line-height:20px;
      margin-bottom:15px;

    }
  }

  .small-title{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${(p) => p.theme.base}

    @media (max-width: 1199px) {
      font-size:14px;
      line-height:17px;
    }
  }
`;
export const MatchJobMain = styled.div`
  margin-top: 30px;
`;
export const MatchjobExplor = styled.div`
  margin-bottom:19px;
  position: relative;
  text-align:center;
  
  
  h2{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${(p) => p.theme.base}
    display:flex;
    justify-content: start;
    align-items: center;

    img{
      margin-right:13px;
    }





  }
`;
export const MatchJobList = styled.div`
  // display:flex;

  // @media (max-width: 1199px) {
  //   display:grid;
  // }

  .slick-next {
    right: 5px;
    width: 40px;
    height: 45px;
    padding: 16px 10px;
    display: flex !important;
    justify-content: flex-end;
    top: 100px;
  }
`;
export const MatchJobCardContainer = styled.div`
background: ${(p) => p.theme.pure};
color: ${(p) => p.theme.base};
    box-shadow: 0px 1.53846px 3.07692px rgba(0, 0, 0, 0.06), 0px 1.53846px 4.61538px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width:97% !important;
    padding:30px;

    @media (max-width: 768px) {
       
        width:100% !important;
        margin-bottom:20px;
      }

    // width: 328px;
    // margin-right:20px;

    // &:nth-child(3n){
    //   margin-right:0px;
    // }

    // @media (max-width: 1199px) {
    //   margin-right:00px;
    //   width:100%;
    //   margin-top:20px;
    // }

    h3{
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: ${(p) => p.theme.base}
      margin-bottom:10px;
    }

    .location{
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: ${(p) => p.theme.primary};
     
    }

    .apply-btn{
      margin-top:31px;
      outline:none;
      border:none;
      width: 68px;
      height: 30px;
      background: ${(p) => p.theme.primary};
      border-radius: 4px;
      color:#fff;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;

    }
`;
