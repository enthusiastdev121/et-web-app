import ZSkel from "components/ZSkel";
import React from "react";


export default function ExploreSpotlightSkel() {
    return (
        <>
            <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", padding: "10px 10px", gap: 20 }} >
                {[1, 2, 3, 4].map((i) => {
                    return (
                        <div key={i} style={{ width: 165, height: 255, position: 'relative', overflow: 'hidden' }}>
                            <ZSkel />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
