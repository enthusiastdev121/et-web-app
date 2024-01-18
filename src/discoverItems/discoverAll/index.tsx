import React from "react";
import styled from "styled-components";
const Items = [
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  { image: "/images/live/img.png", label: "Dance" },
  
];

function DiscoverAll() {
  return (
    <Discover1>
     <h2 className="font-semibold ml-2 mt-5"> Discover All</h2>
      
        <div className="discover-all">
          {Items.map((i: any) => {
            return (
              <div className="relative ml-2 " key={i.label}>
                 <img className=" mt-2" src={i.image} />
                <div className="label"> {i.label}</div>
              </div>
            );
          })}
        </div>
      
    </Discover1>
  );
}

export default DiscoverAll;

const Discover1 = styled.div`
  .discover-all {
    display: flex;
    flex-wrap: wrap;
  }
  .label{
    background-color:#00000099;
    position: absolute;
    bottom: 0;
    color: white;
    padding: 10px 68px;
    border-radius: 0px 0px 10px 10px;
  }
`;
