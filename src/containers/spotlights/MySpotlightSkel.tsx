import ZSkel from "components/ZSkel";
import React from "react";


export default function Skel() {
    return (
        <>
            <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", padding: "10px 10px", gap: 20 }} >
                {[1, 2, 3, 4, 5, 6,].map((i) => {
                    return (
                        <div key={i} style={{ width: 400, height: 80, position: 'relative', overflow: 'hidden' }}>
                            <ZSkel />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
