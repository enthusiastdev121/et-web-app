import styled from 'styled-components';
import { useEffect } from 'react';

export function AdSense() {

    useEffect(() => {

        if (typeof window !== 'undefined') {

            (window.adsbygoogle = window.adsbygoogle || []).push({});

            // console.log("ADD", window.adsbygoogle)
        }
    }, []);



    return (
        <div
            className='w-full overflow-hidden'
        >
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-full-width-responsive="true"
                data-ad-format="fluid"
                data-ad-layout-key="-ho+e-1z-4v+gh"
                data-ad-client="ca-pub-3440052600880388"
                data-ad-slot="9596775800"
            ></ins>

        </div>
    );
}