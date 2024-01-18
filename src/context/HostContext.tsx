import { WHITELABEL } from '@/utils/envProviders';
import { WHITELABELS } from '@/utils/whitelabelConfig';
import { createContext, useContext, useEffect, useState } from 'react';


// const HostContext = createContext<HostContextD>("");
const HostContext = createContext<HostContextD>(WHITELABEL);
// const HOSTNAME = typeof window !== 'undefined' ? window?.location.hostname : "NONE";

export default function HostProvider({ children, passedHost }: any) {
    const [hostname, setHostname] = useState<HostContextD>(WHITELABEL || "exploretalent")
    // const [hostname, setHostname] = useState<HostContextD>(WHITELABEL?.split(':')[0])
    // const [hostname, setHostname] = useState<HostContextD>("")

    useEffect(() => {
        if (hostname.includes(WHITELABELS.exploretalent)) {
            setHostname("exploretalent")
        } else if (hostname.includes(WHITELABELS.auditions)) {
            setHostname('auditions')
        } else if (hostname.includes(WHITELABELS.talento)) {
            setHostname('talento')
        } else if (hostname.includes(WHITELABELS.modeling)) {
            setHostname('modeling')
        } else if (hostname.includes(WHITELABELS.manilaModeling)) {
            setHostname('manilaModeling')
        } else if (hostname.includes("localhost")) {
            setHostname('exploretalent')
        }
    }, [hostname]);
    // useEffect(() => {
    //     if (window.location.hostname === DOMAIN.exploretalent) {
    //         setHostname("exploretalent")
    //     } else if (window.location.hostname === DOMAIN.auditions) {
    //         setHostname('auditions')
    //     } else if (window.location.hostname === DOMAIN.talento) {
    //         setHostname('talento')
    //     } else if (window.location.hostname === DOMAIN.modeling) {
    //         setHostname('modeling')
    //     } else if (window.location.hostname === "localhost") {
    //         setHostname('exploretalent')
    //     }
    // }, [hostname]);

    // console.log("hostname from context: ", hostname);


    return (
        <HostContext.Provider value={hostname}>
            {children}
        </HostContext.Provider>
    );
}

export function useHost() {
    return useContext(HostContext);
}

// type HostContextD = "exploretalent" | "auditions" | "talento" | "modeling";
type HostContextD = any;
