import React from 'react'


const Items = [
  { image: "/images/live/following1.png", name: "hello", live: "Live" },
  { image: "/images/live/following1.png", name: "hello", },
  { image: "/images/live/following1.png", name: "hello", live: "Live" },
  { image: "/images/live/following1.png", name: "hello", live: "Live" },
  { image: "/images/live/following1.png", name: "hello", },
  { image: "/images/live/following1.png", name: "hello", live: "Live" },
  { image: "/images/live/following1.png", name: "hello", live: "Live" },
];
function Features() {
  return (
    <div>
      <div className="font-semibold text-[20px]">Features</div>
      <div className="">
        {Items.map((i: any) => {
          return (
            <div key={i?.name}>
              <div className="flex gap-5 mt-5">
                <div>
                  <div className="border border-red-500 rounded-full"><img className="" src={i.image} /></div>
                  <div className=" bg-red-500 rounded-full text-white -mt-3 px-1 ml-1 z-10 absolute ">{i.live}</div>
                </div>
                <div className="mt-3 "> {i?.name} </div>
              </div>
            </div>

          );
        })}
        <hr className="mt-2" />
      </div>
    </div>
  )
}

export default Features
