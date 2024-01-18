import ZSkel from "components/ZSkel";
import styled from "styled-components";

export default function Skel() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i: any, index: number) => (
        <FeaturedCard key={index}>
          <div className="image-container">
            <ZSkel />
          </div>
          <div className="name">
            <ZSkel />
          </div>
        </FeaturedCard>
      ))}
    </>
  );
}

const FeaturedCard = styled.div`\
    position: relative;
    
    .image-container {
      position: relative;
      width: 93px;
      height: 139px;
      border-radius: 4px;
    }
    
    img {
      position: relative;
      width: 93px;
      height: 139px;
      border-radius: 4px;
    }
    
    .name {
      position: relative;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
     color: ${p => p.theme.base};
    height: 20px;
    width: 93px;
    margin-top: 5px;
  }
`;
