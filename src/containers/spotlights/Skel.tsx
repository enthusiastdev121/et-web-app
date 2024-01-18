import ZSkel from "components/ZSkel";
import React from "react";


export default function Skel() {
    return (
        <>
            {/* <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", padding: "10px 10px", gap: 20 }} >
                {[1, 2, 3, 4, 5, 6, 7, 8,].map((i) => {
                    return (
                        <div key={i} style={{ width: 200, height: 300, position: 'relative', overflow: 'hidden' }}>
                            <ZSkel />
                        </div>
                    );
                })}
            </div> */}
            <div className='min-h-[350px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-3'>
                {[1, 2, 3, 4, 5, 6, 7, 8,].map((i) => {
                    return (
                        <div key={i} style={{ width: '100%', aspectRatio: '0.5626', position: 'relative', overflow: 'hidden' }}>
                            <ZSkel />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
