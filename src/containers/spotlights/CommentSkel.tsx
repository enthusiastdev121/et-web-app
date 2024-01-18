import ZSkel from "components/ZSkel";
import React from "react";

import Skeleton from "react-loading-skeleton";


export default function Skel() {
    return (
        <>
            <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", padding: "10px 10px", gap: 20 }} >
                {[1, 2, 3, 4, 5, 6, 7, 8,].map((i) => {
                    return (
                        <div key={i} style={{ width: '100%', height: 42, position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
                            <div className="w-[40%] h-[10px] mb-[10px]">
                                <Skeleton height={"100%"} width={"100%"} />
                            </div>
                            <div className="w-full h-[32px]">
                                <Skeleton height={"100%"} width={"100%"} />
                            </div>
                            <div></div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
