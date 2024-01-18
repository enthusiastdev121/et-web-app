import Button from "components/Button";
import React from "react";
import { ImShare } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import styled from "styled-components";
const Items = [
  { image: "/images/live/following1.png", message: "hello hii" },
  { image: "/images/live/following1.png", message: "how are you " },
  { image: "/images/live/following1.png", message: "what about you! " },
  { image: "/images/live/following1.png", message: "bye!" },
  { image: "/images/live/following1.png", message: "see you...." },
];

function DiscoverMessage() {
  return (
    <DiscoverMEssage1>
      <div className="lg:flex  ">
        <div className="video_section">
          <img className="" src="/images/live/center screen.png" />
        </div>
        
        <div>
          <div className="p-4 bg-white overflow-y-scroll no-scroll h-96">
            {Items.map((i: any) => {
              return (
                <div key={i.mesage} className="mt-2">
                  <div className="flex">
                    <div>
                      <img src={i.image} />
                    </div>
                    <div className="message-lebel rounded-lg">{i.message}</div>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Message..."
                  className="rounded-full border-2 mt-5 p-1"
                />
              </div>
              <div className=" mt-7 text-blue-500">
                <IoSend />
              </div>
            </div>
          </div>
        </div>

      </div>
        <div className="lg:flex mt-4 ">
          <div className="font-semibold">My must have Self Care items and practices</div>
          <div className="flex"><div className="share-option mt-1"><ImShare/></div> <div>share</div></div>
        </div>
      <div className="flex mt-5 gap-2">
        <div className="font-semibold mt-2">Yashika</div>
        <Button primary>Follow</Button>
      </div>
    </DiscoverMEssage1>
  );
}

export default DiscoverMessage;
const DiscoverMEssage1 = styled.div`
  .video_section {
    width: 70%;
    /* border: 2px solid; */
  }
  .message-lebel {
    background-color: #97979742;
    margin-top: 16px;
    margin-left: 12px;
    padding: 4px;
  }
  .share-option {
    margin-left: 112px;
    @media (max-width:1024px) {
      margin-left: 0px;
      
    }
    
  }
`;
